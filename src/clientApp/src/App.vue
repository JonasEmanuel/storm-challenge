<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import './assets/styles/style.scss';
import './assets/styles/common.scss';

import NavBar from './components/shared/NavBar'

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
