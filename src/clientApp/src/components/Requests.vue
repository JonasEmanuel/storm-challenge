<template>
  <div>
    <div class="title-and-button">
      <h1>Pedidos realizados</h1>
      <button @click="$router.push('/request');" class="btn primary"><i class="fas fa-plus"></i>Novo Pedido</button>
    </div>
    <table>
      <thead>
        <th>ID</th>
        <th>Quantidade de Recursos</th>
        <th>Valor Total</th>
      </thead>
      <tbody>
        <tr>
          <td>745838jf48</td>
          <td>4</td>
          <td>R$ 890,00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    
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
