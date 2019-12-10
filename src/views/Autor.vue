<template>
  <div class="uk-padding">
    <vk-card type="blank" class="uk-width-1-1">
      <vk-card-title>{{ name }}</vk-card-title>
      <div class="uk-panel">
        <img :src="require(`../assets/${name}.jpg`)" class="uk-align-left uk-margin-remove-adjacent" style="width: 300px"/>
        <p style="white-space: pre-wrap">{{ descriere }}</p>
      </div>
      <hr class="uk-divider-icon">
      <vk-card-title>Ai găsit greșeala?</vk-card-title>
      <vk-grid v-if="!getRaspuns" class="uk-child-width-1-3@m uk-text-center uk-flex-center">
          <div @click="chose(1)">{{ questions[0] }}</div>
          <div @click="chose(2)">{{ questions[1] }}</div>
          <div @click="chose(3)">{{ questions[2] }}</div>
      </vk-grid>
      <div v-if="getRaspuns">
        <div v-if="corect" class="uk-alert-success" uk-alert>
          <p class="uk-text-center">Ai raspuns corect! Felicitari!</p>
        </div>
        <div v-if="!corect" class="uk-alert-danger" uk-alert>
          <p class="uk-text-center">Ai raspuns gresit!</p>
        </div>
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
                descriere: '',
                questions: [],
                corect: false,
                raspunsulCorect: 0
            }
        },
        created() {
            this.getNameDescriptionQuestions();
            this.scrollUp();
        },
        computed: {
            getRaspuns () {
                if (this.name === "Ion Luca Caragiale") {
                    return store.state.raspunsCaragiale;
                }
                else if (this.name === "Mihai Eminescu") {
                    return store.state.raspunsEminescu;
                }
                else if (this.name === "Ion Creangă") {
                    return store.state.raspunsCreanga;
                }
                else if (this.name === "Ioan Slavici") {
                    return store.state.raspunsSlavici;
                }
                else if (this.name === "Titu Maiorescu") {
                    return store.state.raspunsMaiorescu;
                }
                else if (this.name === "Junimea") {
                    return store.state.raspunsJunimea;
                }
            }
        },
        methods: {
            getNameDescriptionQuestions () {
                this.name = this.$route.params.name;
                if (this.name === "Ion Luca Caragiale") {
                    this.descriere = store.state.descriereCaragiale;
                    this.questions = store.state.intrebariCaragiale;
                    this.raspunsulCorect = store.state.corectCaragiale;
                }
                else if (this.name === "Mihai Eminescu") {
                    this.descriere = store.state.descriereEminescu;
                    this.questions = store.state.intrebariEminescu;
                    this.raspunsulCorect = store.state.corectCaragiale;
                }
                else if (this.name === "Ion Creangă") {
                    this.descriere = store.state.descriereCreanga;
                    this.questions = store.state.intrebariCreanga;
                    this.raspunsulCorect = store.state.corectCreanga;
                }
                else if (this.name === "Ioan Slavici") {
                    this.descriere = store.state.descriereSlavici;
                    this.questions = store.state.intrebariSlavici;
                    this.raspunsulCorect = store.state.corectSlavici;
                }
                else if (this.name === "Titu Maiorescu") {
                    this.descriere = store.state.descriereMaiorescu;
                    this.questions = store.state.intrebariMaiorescu;
                    this.raspunsulCorect = store.state.corectMaiorescu;
                }
                else if (this.name === "Junimea") {
                    this.descriere = store.state.descriereJunimea;
                    this.questions = store.state.intrebariJunimea;
                    this.raspunsulCorect = store.state.corectJunimea;
                }
            },
            scrollUp () {
                window.scrollTo(0, 0);
            },
            chose (x) {
                /// user-ul a ales raspunsul

                if (x === this.raspunsulCorect) {
                    this.corect = true;
                    /// trimite ca a raspuns corect
                }
                else {
                    this.corect = false;
                    /// trimite ca a raspuns gresit
                }

                if (this.name === "Ion Luca Caragiale") {
                    store.commit("raspunsCaragiale")
                }
                else if (this.name === "Mihai Eminescu") {
                    store.commit("raspunsEminescu")
                }
                else if (this.name === "Ion Creangă") {
                    store.commit("raspunsCreanga")
                }
                else if (this.name === "Ioan Slavici") {
                    store.commit("raspunsSlavici")
                }
                else if (this.name === "Titu Maiorescu") {
                    store.commit("raspunsMaiorescu")
                }
                else if (this.name === "Junimea") {
                    store.commit("raspunsJunimea")
                }
            }
        }
    }
</script>

<style scoped>

</style>