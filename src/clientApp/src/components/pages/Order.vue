<template>
    <div id="order">
        <div class="modal" v-show="modalSuccess">
            <i class="far fa-check-circle"></i>
            <div>Orçamento concluído com sucesso. Redirecionando em 2 segundos...</div>
        </div>
        <div v-show="!flags.isLoading" class="resources-box">
            <div class="resources" v-show="!flags.isLoading">
                <div class="resource" v-for="orderItem in order.itens" :key="orderItem.resourceTypeName">
                    <div>
                        Nível {{orderItem.resourceTypeName}}
                    </div>
                    <div>
                        <label>Período em meses</label>
                        <input v-model="orderItem.period" @change="calcOrderValue(orderItem)" type="number" min="0" class="custom-form">
                    </div>
                    <div>
                        <label>Quantidade</label>
                        <input v-model="orderItem.resourceQuantity" @change="calcOrderValue(orderItem)" type="number" min="0" class="custom-form">
                    </div>
                    <div>
                        <b>Total: {{orderItem.total | toCurrency}}</b>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="flags.isLoading" class="resources-box justify-center">
            <Spinner></Spinner>
        </div>
        <div class="button-box">
            <button @click="saveOrder" class="btn primary"><i class="fas fa-plus"></i>Concluir</button>
        </div>
    </div>
</template>
<script>
import currency from 'currency.js';
import axios from 'axios';
import _sum from 'sum-by';

import Spinner from '../shared/Spinner';

export default {
    data(){
        return {
            resources: [],
            order: {
                itens: [],
                totalResources: 0,
                total: 0
            },
            resourceTypes: [],
            flags: {
                isLoading: false
            },
            modalSuccess: false
        }
    },
    components:{
        Spinner
    },
    async created(){
        this.flags.isLoading = true;
        let resources = await axios.get('/resources');
        this.flags.isLoading = false;
        this.resourceTypes = resources.data;

        this.resourceTypes.forEach(resourceType => {
            this.order.itens.push({
                resourceTypeName: resourceType.name,
                resourceValue: resourceType.value,
                resourceQuantity: 0,
                total: 0,
                period: 1
            });
        })
    },
    methods: {
        async saveOrder(){
            let confirmOrder = confirm("Deseja concluir seu orçamento?");
            if(confirmOrder){
                this.order.totalResources = _sum(this.order.itens, (item) => parseInt(item.resourceQuantity));
                this.order.total = _sum(this.order.itens, (item) => parseFloat(item.total));
                if(this.order.totalResources > 0){
                    await axios.post('/orders', this.order);
                    this.modalSuccess = true;
                    setTimeout(() => {
                        this.modalSuccess = false;
                        this.$router.push('/');
                    }, 2000);
                } else {
                    alert("Nenhum recurso selecionado");
                }
            }
        },
        calcOrderValue(orderItem){ 
            if(orderItem.period && orderItem.resourceQuantity){
                orderItem.total = 0;
                if(orderItem.period == 12 && orderItem.resourceQuantity >= 3){
                    orderItem.total = (orderItem.period * parseFloat(orderItem.resourceValue));
                    orderItem.total = orderItem.total * orderItem.resourceQuantity;
                    orderItem.total = orderItem.total - (orderItem.resourceValue * 0.10) * orderItem.resourceQuantity;
                } else {
                    let percentToSum = 0;
                    if(orderItem.period <= 3){
                        percentToSum = 0.20;
                    } else if(orderItem.period >= 4 && orderItem.period <= 6){
                        percentToSum = 0.10;
                    }
                    orderItem.total = (orderItem.period * parseFloat(orderItem.resourceValue)) + (orderItem.resourceValue * percentToSum);
                    orderItem.total = orderItem.total * orderItem.resourceQuantity;
                }
            }    
        }
    },
    filters: {
        toCurrency: function(value) {
            return currency(value, { symbol: "R$", precision: 2 }).format(true);
        }
    }
}
</script>
<style scoped lang="scss">
.button-box {
    text-align: right;    
    color: #989696;
    button {
        margin-top: 10px;
    }
}
.resources-box {
    background-color: #f7f7f7a1;
    border: 1px solid #dcdcdcc9;
    padding: 2vh;
    height: 50vh;
    display: flex;

    .no-resource-text {
        color: #989696;
    }

    &.justify-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .resources {
        width: 100%;
        height: 8vh;
        .resource {
            display: grid;
            grid-template-columns: 15% 30% 40% 15%;

            > div {
                display: flex;
                align-items: center;
            }
        }
    }
}
.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #378bab;
    font-size: 7em;
    margin-bottom: 0.2em;
}
</style>