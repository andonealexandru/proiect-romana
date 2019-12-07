<template>
  <div>
    <div class="full-height background-image uk-background-cover uk-light uk-flex"
         uk-parallax="bgy: 0">

    </div>
    <div class="uk-padding uk-width-1-1@m">
      <vk-grid matched class="uk-flex-middle uk-text-center uk-child-width-1-3@m">
        <!-- eminescu creanga caragiale slavici -->
        <div>
          <Card
            name="Junimea"
            image="junimea.jpg"
          />
        </div>
        <div>
          <Card
            name="Titu Maiorescu"
            image="maiorescu.jpg"
          />
        </div>
        <div>
          <Card
            name="Mihai Eminescu"
            image="eminescu.jpg"
          />
        </div>
        <div>
          <Card
            name="Ion Creanga"
            image="creanga.jpg"
          />
        </div>
        <div>
          <Card
            name="Ion Luca Caragiale"
            image="caragiale.jpg"
          />
        </div>
        <div>
          <Card
            name="Ioan Slavici"
            image="slavici.jpg"
          />
        </div>
      </vk-grid>
    </div>
  </div>
</template>

<script>
  import Card from "../components/Card";

  export default {
      name: "Home",
      components: {
          Card
      }
  }
</script>

<style scoped>
  .full-height {
    height: 100vh;
  }
  .background-image {
    background-image: url("../assets/background.png");
    background-color: #CFA58D;
    background-size: auto;
  }
</style>