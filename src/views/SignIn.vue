<template xmlns="http://www.w3.org/1999/html">
  <div class="uk-padding uk-flex-middle">
    <div class="uk-width-2-5@m uk-align-center">
      <vk-card hover v-if="showForm">
        <form @submit.prevent="handleSubmit">
          <fieldset class="uk-fieldset">
            <legend class="uk-legend">Create your account</legend>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="user" /></span>
                <input v-model="formData.username" class="uk-input" type="text" placeholder="Name" required="required">
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
                <input type="submit" class="uk-button uk-button-default uk-width-1-1" value="Register now!">
              </div>
            </div>
            <div class="uk-inline uk-width-1-1" style="height: 45px"  v-if="showSpinner">
              <vk-spinner class="uk-position-center uk-container" ratio="1.5" />
            </div>
          </fieldset>
        </form>
      </vk-card>

      <vk-card class="uk-text-center" type="blank" v-if="!showForm">
        <vk-card-title>Status</vk-card-title>
        <p>{{ status }}</p>
      </vk-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: 'signin',
        data () {
            return {
                showSpinner: false,
                showForm: true,
                formData: {
                    username: '',
                    password: ''
                },
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

                axios.post('https://romanaapp.herokuapp.com/createUser', this.formData, axiosConfig)
                    .then(function (response) {
                        vm.responseData = response.data
                        if(vm.responseData != "already registered")
                          vm.afterResponse();
                        else 
                          vm.status = "Username-ul este deja folosit de un alt utilizator!"
                    })
                    .catch(function (error) {
                        vm.status = error
                    })
            },
            afterResponse() {
                this.showForm = false;
                this.showSpinner = false;
                this.status = "Contul a fost creat cu succes!"
                this.$router.push({name: 'login'});
            }
        }
    }
</script>
