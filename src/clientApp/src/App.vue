<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './assets/styles/style.scss';
import './assets/styles/common.scss';

import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
</style>
