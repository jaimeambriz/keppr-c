<template>
    <div class="vaults">
        <div class="create-vault">
            <h4 data-toggle="modal" data-target="#createVault">
                <i class="fa fa-picture-o fa-lg"></i> Create Vault
            </h4>
        </div>
        <div class="row">
            <!-- DRAW THE VAULTS -->
            <div class="column">
                <div class="thumbnail" v-for="vault in vaults[0]">
                    <router-link :to="'/vaults/'+vault.id">
                        <img :src="vault.imageUrl" alt="image" style="width:100%">
                    </router-link>
                    <div class="caption">
                        <p>{{vault.name}}</p>
                        <!-- <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                        <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i> -->
                        <i class="fa fa-trash" @click="deleteVault(vault.id)"></i>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="thumbnail" v-for="vault in vaults[1]">
                    <router-link :to="'/vaults/'+vault.id">
                        <img :src="vault.imageUrl" alt="image" style="width:100%">
                    </router-link>
                    <div class="caption">
                        <p>{{vault.name}}</p>
                        <!-- <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                            <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i> -->
                        <i class="fa fa-trash" @click="deleteVault(vault.id)"></i>
                    </div>
                </div>
            </div>
            <div v-if="vaults.length > 2" class="column">
                <div class="thumbnail" v-for="vault in vaults[2]">
                    <router-link :to="'/vaults/'+vault.id">
                        <img :src="vault.imageUrl" alt="image" style="width:100%">
                    </router-link>
                    <div class="caption">
                        <p>{{vault.name}}</p>
                        <!-- <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                                <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i> -->
                        <i class="fa fa-trash" @click="deleteVault(vault.id)"></i>
                    </div>
                </div>
            </div>
            <div v-if="vaults.length > 2" class="column">
                <div class="thumbnail" v-for="vault in vaults[3]">
                    <router-link :to="'/vaults/'+vault.id">
                        <img :src="vault.imageUrl" alt="image" style="width:100%">
                    </router-link>
                    <div class="caption">
                        <p>{{vault.name}}</p>
                        <!-- <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                                    <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i> -->
                        <i class="fa fa-trash" @click="deleteVault(vault.id)"></i>
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm-6" v-for="vault in vaults">
                <div class="thumbnail">
                    <router-link :to="'/vaults/'+vault.id">
                        <img :src="vault.imageUrl" alt="image" style="width:100%">
                    </router-link>
                    <div class="caption">
                        <h1>{{vault.name}}</h1>
                        <p>{{vault.description}}</p>
                        <i class="fa fa-trash" @click="deleteVault(vault.id)"></i>
                    </div>
                </div>
            </div> -->
            <!-- CREATE VAULT BUTTON -->

            <!-- MODAL BEGIN -->
            <div class="modal fade" id="createVault" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- *********** Modal Header *********** -->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">
                                Create Vault
                            </h4>
                        </div>
                        <!-- *********** Modal Body *********** -->
                        <div class="modal-body">
                            <form class="form">
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input type="text" class="form-control" placeholder="Name" v-model="vault.name" required/>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Image</label>
                                    <input type="url" class="form-control" placeholder="https://vignette.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png/revision/latest?cb=20091207194310"
                                        v-model="vault.imageUrl" required/>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Description</label>
                                    <input type="text" class="form-control" placeholder="Description" v-model="vault.description" required/>
                                </div>
                                <div class="form-group">
                                    <button @click="createVault" data-dismiss="modal" class="btn btn-default">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Valuts',
        data() {
            return {
                vault: {
                    name: "",
                    description: "",
                    imageUrl: "",
                    userId: 0
                }
            }
        },
        components: {},
        computed: {
            vaults() {
                //     var vaults = this.$store.state.vaults
                //     if (vaults.length == 2) {
                //         return vaults
                //     }
                //     this.$store.dispatch('massageKeepData', { data: vaults, num: 2, set: "setVaults" })
                return this.$store.state.activeVaults
            },

        },
        mounted() {
            this.$store.dispatch('getVaults')
        },
        methods: {
            createVault() {
                this.$store.dispatch("createVault", this.vault)
                this.vault = {
                    name: "",
                    description: "",
                    imageUrl: ""
                }
            },
            deleteVault(vaultId) {
                this.$store.dispatch('deleteVault', vaultId)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .create-vault {
        color: white;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .create-vault {
        cursor: pointer;
    }

    .modal {
        z-index: 9999
    }

    .vaults {
        padding-top: 2rem;
    }

    /* *********** COLUMN STYLING ********* */

    body {
        margin: 0;
        font-family: Arial;
    }

    img:hover {
        -ms-transform: scale(1.02);
        /* IE 9 */
        -webkit-transform: scale(1.02);
        /* Safari 3-8 */
        transform: scale(1.02);
    }

    .header {
        text-align: center;
        padding: 32px;
    }

    img {
        border-radius: 10px;
    }

    .row {
        display: -ms-flexbox;
        /* IE 10 */
        display: flex;
        -ms-flex-wrap: wrap;
        /* IE 10 */
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create two equal columns that sits next to each other */

    .column {
        -ms-flex: 25%;
        /* IE 10 */
        flex: 25%;
        padding: 0 4px;
    }

    .column img {
        margin-top: 8px;
        vertical-align: middle;
    }

    /* Style the buttons */

    .btn {
        border: none;
        outline: none;
        padding: 10px 16px;
        background-color: #f1f1f1;
        cursor: pointer;
        font-size: 18px;
    }

    .btn:hover {
        background-color: #ddd;
    }

    .btn.active {
        background-color: #666;
        color: white;
    }
</style>