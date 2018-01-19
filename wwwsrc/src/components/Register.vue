<template>
    <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- *********** Modal Header *********** -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
              <span class="sr-only">Close</span>
            </button>
            <h4 class="modal-title">
              Register
            </h4>
          </div>
          <!-- *********** Modal Body *********** -->
          <div class="modal-body">
            <form class="form">
              <div class="form-group">
                <label class="control-label">Username</label>
                <input type="text" class="form-control" placeholder="Username" v-model="register.username" required/>
              </div>
              <div class="form-group">
                <label class="control-label">Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="register.email" required/>
              </div>
              <div class="form-group">
                <label class="control-label">Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="register.password" required/>
              </div>
              <div class="form-group">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"/> Remember me
                    </label>
                  </div>
              </div>
              <div class="form-group">
                  <button @click="submitRegister" data-dismiss="modal" class="btn btn-default">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'Register',
      data() {
        return {
          register: {
            email: '',
            username: '',
            password: ''
          },
        }
      },
      components: {
      },
      methods: {
        // signIn: function () {
        //   Vue.googleAuth().directAccess()
        //   Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError)
        // },
        // onSignInSuccess: function (authorizationCode) {
        //   this.toggleLoading()
        //   this.resetResponse()
        //   this.$store.dispatch('getGoogleUser', authorizationCode)
        //   // this.$store.dispatch('getCal', authorizationCode)
        // },
        // onSignInError: function (error) {
        //   this.response = 'Failed to sign-in'
        //   console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
        // },
        // toggleLoading: function () {
        //   this.loading = (this.loading === '') ? 'loading' : ''
        // },
        // resetResponse: function () {
        //   this.response = ''
        // },
        // toggleFormState() {
        //   this.loginFormActive = !this.loginFormActive
        // },
        submitLogin() {
          this.$store.dispatch('login', this.login)
          this.login = {
            email: '',
            password: ''
          }
        },
        submitRegister() {
          this.$store.dispatch('register', this.register)
          this.register = {
            email: '',
            username: '',
            password: ''
          }
        },
        logout() {
          this.$store.dispatch('logout')
        }
      },
    //   computed: {
    //     error() {
    //       return this.$store.state.error.message
    //     },
    //   }
    }
  </script>
  
  <style scoped>
    .modal{
      margin-top: 5%
    }
    .modal-body .form-horizontal .col-sm-2,
    .modal-body .form-horizontal .col-sm-10 {
      width: 100%
    }
  
    .modal-body .form-horizontal .control-label {
      text-align: left;
    }
  
    .modal-body .form-horizontal .col-sm-offset-2 {
      margin-left: 15px;
    }
  
    .header {
      display: flex;
      /* justify-content: center; */
    }
  
    .loginbox {
      background-color: #83bcf1a2;
      padding: .5rem;
      width: 90rem;
      border-radius: 25px;
    }
  
    .register .login {
      /* max-width: 40rem ; */
      margin: 0rem;
      padding: 0rem;
      /* background-color: white; */
    }
  
    .regheader {
      display: flex;
      /* justify-content: center */
    }
  
    label {
      display: inline-block;
    }
  
    a {
      display: block;
    }
  
    .title {
      display: block;
    }
  
    .top {
      display: flex;
      justify-content: center;
    }
  </style>