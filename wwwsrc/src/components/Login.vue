<template>
  <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- *********** Modal Header *********** -->
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          <h4 class="modal-title">
            User Login
          </h4>
        </div>
        <!-- *********** Modal Body *********** -->
        <div class="modal-body">
          <form class="form">
            <div class="form-group">
              <label class="control-label">Email</label>
              <input type="email" class="form-control" placeholder="Email" v-model="login.email" required/>
            </div>
            <div class="form-group">
              <label class="control-label">Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="login.password" required/>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
            </div>
            <div class="form-group">
              <button @click="submitLogin" data-dismiss="modal" class="btn btn-default"> Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vue from 'vue'
  export default {
    name: 'Login',
    data() {
      return {
        login: {
          email: '',
          password: ''
        },
      }
    },
    components: {
    },
    methods: {
      submitLogin() {
        this.$store.dispatch('login', this.login)
        this.login = {
          email: '',
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
  .modal {
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