<template>
  <div class="uk-padding">
    <vk-card type="blank" class="uk-width-1-1">
      <vk-card-title>{{ name }}</vk-card-title>
      <div class="uk-panel">
        <img :src="require(`../assets/${name}.jpg`)" class="uk-align-left uk-margin-remove-adjacent" style="width: 300px"/>
        <p style="white-space: pre-wrap">{{ descriere }}</p>
      </div>
      <hr class="uk-divider-icon">
      <vk-card-title>{{ question }}</vk-card-title>
      <vk-grid v-if="!getRaspuns" class="uk-child-width-1-3@m uk-text-center uk-flex-center">
          <div class="unu" @click="chose(1)">{{ questions[0] }}</div>
          <div class="doi" @click="chose(2)">{{ questions[1] }}</div>
          <div class="trei" @click="chose(3)">{{ questions[2] }}</div>
      </vk-grid>
      <div v-if="getRaspuns">
        <div v-if="getCorect && getLogged" class="uk-alert-success" uk-alert>
          <p class="uk-text-center">Ai raspuns corect! Felicitari!</p>
        </div>
        <div v-if="!getCorect && getLogged" class="uk-alert-danger" uk-alert>
          <p class="uk-text-center">Ai raspuns gresit!</p>
        </div>
        <div v-if="!getLogged" class="uk-alert-danger" uk-alert>
          <p class="uk-text-center">Logheaza-te pentru a putea raspunde la intrebari! Multumim!</p>
        </div>
      </div>
    </vk-card>
  </div>
</template>

<script>
  import store from '../store'
  import axios from 'axios'
    export default {
        name: "autor",
        data () {
            return {
                responseData: '',
                name: '',
                descriere: '',
                questions: [],
                question: '',
                corect: null,
                raspunsulCorect: 0,
                formData: {
                    username: '',
                    autor: '',
                    raspCorect: false
                }
            }
        },
        created() {
            this.getNameDescriptionQuestions();
            this.scrollUp();
        },
        computed: {
            getRaspuns () {
                if (this.name === "Ion Luca Caragiale") {
                    return this.$store.state.raspunsCaragiale;
                }
                else if (this.name === "Mihai Eminescu") {
                    return this.$store.state.raspunsEminescu;
                }
                else if (this.name === "Ion Creangă") {
                    return this.$store.state.raspunsCreanga;
                }
                else if (this.name === "Ioan Slavici") {
                    return this.$store.state.raspunsSlavici;
                }
                else if (this.name === "Titu Maiorescu") {
                    return this.$store.state.raspunsMaiorescu;
                }
                else if (this.name === "Junimea") {
                    return this.$store.state.raspunsJunimea;
                }
            },
            getLogged() {
                return this.$store.state.logged;
            },
            getCorect() {
                if (this.name === "Ion Luca Caragiale") {
                    return this.$store.state.raspunsCorectCaragiale;
                }
                else if (this.name === "Mihai Eminescu") {
                    return this.$store.state.raspunsCorectEminescu;
                }
                else if (this.name === "Ion Creangă") {
                    return this.$store.state.raspunsCorectCreanga;
                }
                else if (this.name === "Ioan Slavici") {
                    return this.$store.state.raspunsCorectSlavici;
                }
                else if (this.name === "Titu Maiorescu") {
                    return this.$store.state.raspunsCorectMaiorescu;
                }
                else if (this.name === "Junimea") {
                    return this.$store.state.raspunsCorectJunimea;
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
                    this.question = store.state.intrebareCaragiale;
                }
                else if (this.name === "Mihai Eminescu") {
                    this.descriere = store.state.descriereEminescu;
                    this.questions = store.state.intrebariEminescu;
                    this.raspunsulCorect = store.state.corectCaragiale;
                    this.question = store.state.intrebareEminescu;
                }
                else if (this.name === "Ion Creangă") {
                    this.descriere = store.state.descriereCreanga;
                    this.questions = store.state.intrebariCreanga;
                    this.raspunsulCorect = store.state.corectCreanga;
                    this.question = store.state.intrebareCreanga;
                }
                else if (this.name === "Ioan Slavici") {
                    this.descriere = store.state.descriereSlavici;
                    this.questions = store.state.intrebariSlavici;
                    this.raspunsulCorect = store.state.corectSlavici;
                    this.question = store.state.intrebareSlavici;
                }
                else if (this.name === "Titu Maiorescu") {
                    this.descriere = store.state.descriereMaiorescu;
                    this.questions = store.state.intrebariMaiorescu;
                    this.raspunsulCorect = store.state.corectMaiorescu;
                    this.question = store.state.intrebareMaiorescu;
                }
                else if (this.name === "Junimea") {
                    this.descriere = store.state.descriereJunimea;
                    this.questions = store.state.intrebariJunimea;
                    this.raspunsulCorect = store.state.corectJunimea;
                    this.question = store.state.intrebareJunimea;
                }
            },
            scrollUp () {
                window.scrollTo(0, 0);
            },
            chose (x) {
                if(this.$store.state.logged === true) {
                    /// user-ul a ales raspunsul
                    console.log("e logat");
                    if (x === this.raspunsulCorect) {
                        this.trimitereRaspuns(true);
                        this.handleSubmit()
                    }
                    else {
                        this.trimitereRaspuns(false);
                        this.handleSubmit()
                    }
                } else {
                    this.corect = false;
                    console.log("nu e logat")
                }
            },
            trimitereRaspuns (booleana) {
                if (this.name === "Ion Luca Caragiale") {
                    store.commit("raspunsCorectCaragiale", booleana);
                    store.commit("raspunsCaragiale")
                }
                else if (this.name === "Mihai Eminescu") {
                    store.commit("raspunsCorectEminescu", booleana);
                    store.commit("raspunsEminescu")
                }
                else if (this.name === "Ion Creangă") {
                    store.commit("raspunsCorectCreanga", booleana);
                    store.commit("raspunsCreanga")
                }
                else if (this.name === "Ioan Slavici") {
                    store.commit("raspunsCorectSlavici", booleana);
                    store.commit("raspunsSlavici")
                }
                else if (this.name === "Titu Maiorescu") {
                    store.commit("raspunsCorectMaiorescu", booleana);
                    store.commit("raspunsMaiorescu")
                }
                else if (this.name === "Junimea") {
                    store.commit("raspunsCorectJunimea", booleana);
                    store.commit("raspunsJunimea")
                }
            },
            handleSubmit () {
                let vm = this;

                this.formData.username = this.$store.state.nume; 
                this.formData.raspCorect = this.getCorect;

                if (this.name === "Ion Luca Caragiale") {
                    this.formData.autor = "caragiale";
                }
                else if (this.name === "Mihai Eminescu") {
                    this.formData.autor = "eminescu";
                }
                else if (this.name === "Ion Creangă") {
                    this.formData.autor = "creanga";
                }
                else if (this.name === "Ioan Slavici") {
                    this.formData.autor = "slavici";
                }
                else if (this.name === "Titu Maiorescu") {
                    this.formData.autor = "maiorescu";
                }
                else if (this.name === "Junimea") {
                    this.formData.autor = "junimea";
                }

                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                };

                axios.post('https://romanaapp.herokuapp.com/rasp', this.formData, axiosConfig)
                    .then(function (response) {
                        vm.responseData = response.data;
                        if(vm.responseData === "updated")
                          vm.afterResponse();
                        else 
                          vm.status = "Ceva nu a mers cum ar fi trebuit! Ne pare rau!"
                    })
                    .catch(function (error) {
                        vm.status = error;
                    })
            },
            afterResponse () {
                console.log(this.responseData);
            }
        }
    }
</script>

<style scoped>

</style>