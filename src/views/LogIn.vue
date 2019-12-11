<template xmlns="http://www.w3.org/1999/html">
  <div class="uk-padding uk-flex-middle">
    <div class="uk-width-2-5@m uk-align-center">
      <vk-card hover>
        <form @submit.prevent="handleSubmit">
          <fieldset class="uk-fieldset">
            <legend class="uk-legend">Log in</legend>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="user" /></span>
                <input v-model="formData.username" class="uk-input" type="name" placeholder="Name" required="required">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="lock" /></span>
                <input v-model="formData.password" class="uk-input" type="password" placeholder="Password" required="required">
              </div>
            </div>
            <div class="uk-margin" v-if="!showSpinner">
              <div class="uk-inline uk-width-1-1">
                <input type="submit" class="uk-button uk-button-default uk-width-1-1" value="Log in">
              </div>
            </div>
            <div class="uk-inline uk-width-1-1" style="height: 45px"  v-if="showSpinner">
              <vk-spinner class="uk-position-center uk-container" ratio="1.5" />
            </div>
          </fieldset>
        </form>
      </vk-card>
    </div>
    <vk-card class="uk-text-center" type="blank" v-if="status == 'Nume de utilizator sau parola gresita!'">
      <vk-card-title>Status</vk-card-title>
      <p>{{ status }}</p>
    </vk-card>
  </div>
</template>

<script>
    import store from '../store'
    import axios from 'axios'

    export default {
        name: 'login',
        data () {
            return {
                showSpinner: false,
                formData: {
                    username: '',
                    password: ''
                },
                responseData: '',
                status: ''
            }
        },
        methods: {
            handleSubmit () {
                this.showSpinner = true;
                let vm = this;

                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                };

                axios.post('https://romanaapp.herokuapp.com/login', this.formData, axiosConfig)
                    .then(function (response) {
                        vm.responseData = response.data
                        
                        if(vm.responseData != "something went wrong")
                           vm.afterResponse();
                        else 
                        {
                          vm.status = "Nume de utilizator sau parola gresita!"
                          vm.showSpinner = false;
                        }
                    })
                    .catch(function (error) {
                        vm.status = error
                    })
            },
            afterResponse () {
                console.log("Am ajuns in raspunsul de log in")
                store.commit('changeLogged', this.responseData);
                this.status = "Bine ai venit!"
                this.showSpinner = false;
                this.$router.push({name: 'home'});
            }
        }
    }
</script>
