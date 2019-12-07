<template>
  <vk-card>
    <vk-grid>
      <div class="uk-width-2-5@m">
        <img :src="require(`../assets/${name}.jpg`)" />
      </div>
      <div class="uk-width-2-5@m">
        <vk-card-title class="uk">{{ name }}</vk-card-title>
        <vk-button @click="getAuthor">CITESTE</vk-button>
      </div>
    </vk-grid>
  </vk-card>
</template>

<script>
    export default {
        name: "card",
        props: {
            name: '',
        },
        methods: {
          getAuthor () {
            this.$router.push({ name: 'autor', params: { name: this.name } })
          }
        }
    }
</script>

<style scoped>

</style>