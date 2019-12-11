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
          <div class="unu" @click="selectUnu()">{{ questions[0] }}</div>
          <div class="doi" @click="selectDoi()">{{ questions[1] }}</div>
          <div class="trei" @click="selectTrei()">{{ questions[2] }}</div>
      </vk-grid>
      <div v-if="getRaspuns">
        <div v-if="corect && getLogged" class="uk-alert-success" uk-alert>
          <p class="uk-text-center">Ai raspuns corect! Felicitari!</p>
        </div>
        <div v-if="!corect && getLogged" class="uk-alert-danger" uk-alert>
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
                corect: false, // ocupa-te sa ramana raspunsul..pt ca acum daca rasp corect si reintru imi apare ca am rasp gresit, si nu pot sa mai raspund la niciun autor
                raspunsulCorect: 0,
                formData: {
                    username: '',
                    autor: '',
                    raspCorect: false
                },
                targetId: '',
                unu: HTMLDivElement,
                doi: HTMLDivElement,
                trei: HTMLDivElement,
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
                if(this.$store.state.logged == true) {
                    /// user-ul a ales raspunsul
                    console.log("e logat")
                    if (x === this.raspunsulCorect) {
                        this.corect = true;
                        this.handleSubmit()
                    }
                    else {
                        this.corect = false;
                        this.handleSubmit()
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
                } else {
                    this.corect = false;
                    console.log("nu e logat")
                }
            },
            handleSubmit () {
                this.showSpinner = true;
                let vm = this;

                this.formData.username = this.$store.state.nume; 
                this.formData.raspCorect = this.corect;

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
                        vm.responseData = response.data
                        if(vm.responseData == "updated")
                          vm.afterResponse();
                        else 
                          vm.status = "Ceva nu a mers cum ar fi trebuit! Ne pare rau!"
                    })
                    .catch(function (error) {
                        vm.status = error
                    })
            },
            afterResponse () {
                console.log(this.responseData);
                this.showSpinner = false;
            },
            selectUnu () {
                this.unu = document.querySelector("body > div > div > div > div > div.uk-child-width-1-3\\@m.uk-text-center.uk-flex-center.uk-grid.uk-grid-stack > div.unu.uk-first-column");
                let vm = this;
                this.unu.addEventListener( 'click', function( e ){
                    console.log( e.target, e.currentTarget ); 
                    vm.targetId = e.currentTarget;
                    vm.chose(1);
                    e.preventDefault();
                });
            },
            selectDoi () {
                this.doi = document.querySelector("body > div > div > div > div > div.uk-child-width-1-3\\@m.uk-text-center.uk-flex-center.uk-grid.uk-grid-stack > div.doi.uk-grid-margin.uk-first-column")
                let vm = this;
                this.doi.addEventListener( 'click', function( e ){
                    console.log( e.target, e.currentTarget ); 
                    vm.targetId = e.currentTarget;
                    vm.chose(2);
                    e.preventDefault();
                });
            },
            selectTrei () {
                this.trei = document.querySelector("body > div > div > div > div > div.uk-child-width-1-3\\@m.uk-text-center.uk-flex-center.uk-grid.uk-grid-stack > div.trei.uk-grid-margin.uk-first-column")
                let vm = this
                this.trei.addEventListener( 'click', function( e ){
                    console.log( e.target, e.currentTarget ); 
                    vm.targetId = e.currentTarget;
                    vm.chose(3);
                    e.preventDefault();
                });
            }
        }
    }
</script>

<style scoped>

</style>