<template>
  <div>
    <div class="title-and-button">
      <h1>Pedidos realizados</h1>
      <button @click="$router.push('/order');" class="btn primary"><i class="fas fa-plus"></i>Novo Pedido</button>
    </div>
    <table>
      <thead>
        <th>ID</th>
        <th>Quantidade de Recursos</th>
        <th>Valor Total</th>
      </thead>
      <tbody>
        <tr v-show="!flags.isLoading && orders.length > 0" v-for="order in orders" :key="order._id">
          <td>{{order._id}}</td>
          <td>{{order.totalResources}}</td>
          <td>{{order.total | toCurrency}}</td>
        </tr>
        <tr v-show="orders.length == 0 && !flags.isLoading">
          <td colspan="3">Nenhum pedido cadastrado</td>
        </tr>
        <tr v-show="flags.isLoading">
          <td colspan="3" class="center"><Spinner></Spinner></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import currency from 'currency.js';

import Spinner from '../shared/Spinner';

export default {
  data(){
    return {
      orders: [],
      flags: {
        isLoading: false
      }
    }
  },
  components: {
    Spinner
  },
  async created(){
    this.flags.isLoading = true;
    let orders = await axios.get('/order');
    this.flags.isLoading = false;
    this.orders = orders.data;
  },
  methods: {
    
  },
  filters: {
    toCurrency: function(value) {
        return currency(value, { symbol: "R$", precision: 2 }).format(true);
    }
  }
}
</script>

<style lang="scss" scoped>
.title-and-button {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
