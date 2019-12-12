<template>
  <div class="uk-position-relative">
    <vk-navbar class="nav" :class="{ 'uk-position-top': $router.currentRoute.name === 'home', 'color' : $router.currentRoute.name !== 'home' }"
               :transparent="$router.currentRoute.name === 'home'">
      <vk-navbar-nav>
        <vk-navbar-logo><img src="./assets/logo.png" class="logo" style="max-height: 50%"></vk-navbar-logo>
        <vk-navbar-nav-item title="Acasa" active @click="$router.push({ name: 'home' })" />
      </vk-navbar-nav>

      <vk-navbar-nav slot="right">
        <vk-navbar-nav-item
          v-if="!getLogged"
          title="Inregistrare"
          active
          @click="$router.push({ name: 'signin' })" />
        <vk-navbar-nav-item
          v-if="!getLogged"
          title="Conectare"
          active
          @click="$router.push({ name: 'login' })" />
        <vk-navbar-nav-item
          v-if="getLogged"
          title="Deconectare"
          active
          @click="logOut" />
      </vk-navbar-nav>
    </vk-navbar>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.color {
  background-color: #CFA58D;
}
</style>

<script>
import store from './store'

export default {
    name: 'app',
    computed: {
        getLogged() {
            return this.$store.state.logged;
        }
    },
    methods: {
        logOut () {
            store.commit('changeLogged');
            if(this.$route.path != '/')
              this.$router.push({name: 'home'});
        }
    }
}
</script>