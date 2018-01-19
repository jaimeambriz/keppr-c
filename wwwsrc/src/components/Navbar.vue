<template>
    <div class="navbar">
        <nav class="navbar navbar-inverse" data-spy="affix">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/">
                        <img src="https://preview.ibb.co/jq2bbm/Keepr.png" alt="Keeper" height="50" width="50" style="display: inline-block">
                    </router-link>
                </div>
                <ul class="nav navbar-nav">
                    <li class="navbar-home">
                        <router-link to="/">
                            <i class="fa fa-home fa-lg"></i> Home
                        </router-link>
                    </li>
                    <li class="navbar-vaults">
                        <router-link to="/vaults">
                            <i class="fa fa-microchip fa-lg"></i> Vaults
                        </router-link>
                    </li>
                    <li class="navbar-keeps">
                        <router-link to="/keeps">
                            <i class="fa fa-thumb-tack fa-lg"></i> Keeps
                        </router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="!user.id" class="navbar-email" data-toggle="modal" data-target="#register">
                        <a href="#">
                            <i class="fa fa-send"></i> Register</a>
                    </li>
                    <li v-if="!user.id" class="navbar-login" data-toggle="modal" data-target="#login">
                        <a href="#">
                            <i class="fa fa-sign-in"></i> Login</a>
                    </li>
                    <li v-else="user.id" class="navbar-logout">
                        <a href="#" @click="logout">
                            <i class="fa fa-sign-out"></i> Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
            }
        },
        components: {},
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*navbar*/

    .container-fluid {
        background-color: rgba(206, 39, 39, 0.7)
    }

    .navbar {
        border-radius: 0;
        margin: 0;
        border: 0;
        font-size: 20px;
    }

    .affix {
        top: 0;
        width: 100%;
        z-index: 999 !important;
    }

    .navbar-inverse {
        background-color: transparent;
    }

    .navbar-inverse .navbar-nav>li>a {
        color: #0e0e0e;
    }

    .navbar-inverse .navbar-brand {
        color: #000000;
    }

    .navbar-inverse .navbar-brand:focus,
    .navbar-inverse .navbar-brand:hover {
        color: #ffffff;
    }

    .navbar-inverse .navbar-nav>li>a:focus,
    .navbar-inverse .navbar-nav>li>a:hover {
        color: white;
        background-color: transparent;
    }

    .navbar-nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 60px;
    }
</style>