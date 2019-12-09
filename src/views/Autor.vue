<template>
  <div class="uk-padding">
    <vk-card type="blank" class="uk-width-1-1">
      <vk-card-title>{{ name }}</vk-card-title>
      <div class="uk-panel">
        <img :src="require(`../assets/${name}.jpg`)" class="uk-align-left uk-margin-remove-adjacent" style="width: 300px"/>
        <p style="white-space: pre-wrap">{{ descriere }}</p>
      </div>
    </vk-card>
  </div>
</template>

<script>
  import store from '../store'
    export default {
        name: "autor",
        data () {
            return {
                name: '',
                descriere: ''
            }
        },
        created() {
            this.getNameDescription();
            this.scrollUp();
        },
        methods: {
            getNameDescription () {
                this.name = this.$route.params.name;
                if (this.name === "Ion Luca Caragiale")
                    this.descriere = store.state.descriereCaragiale;
                else if (this.name === "Mihai Eminescu")
                    this.descriere = store.state.descriereEminescu;
            },
            scrollUp () {
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>

</style>