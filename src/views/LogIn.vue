<template xmlns="http://www.w3.org/1999/html">
  <div class="uk-padding uk-flex-middle">
    <div class="uk-width-2-5@m uk-align-center">
      <vk-card hover>
        <form @submit.prevent="handleSubmit">
          <fieldset class="uk-fieldset">
            <legend class="uk-legend">Log in</legend>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon"><vk-icon icon="mail" /></span>
                <input v-model="formData.email" class="uk-input" type="email" placeholder="Email" required="required">
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
  </div>
</template>

<script>
    import store from '../store'

    export default {
        name: 'login',
        data () {
            return {
                showSpinner: false,
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            handleSubmit () {
                this.showSpinner = true;
                setTimeout(this.afterResponse, 3000);
            },
            afterResponse () {
                store.commit('changeLogged');
                this.$router.push({name: 'home'});
            }
        }
    }
</script>
