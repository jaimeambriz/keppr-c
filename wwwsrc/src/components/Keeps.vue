<template>
    <div class="keeps">
        <div class="create-keep">
            <h4 data-toggle="modal" data-target="#createKeep">
                <i class="fa fa-picture-o fa-lg"></i> Create Keep
            </h4>
        </div>
        <div class="row">
            <!-- ********** DRAW KEEPS ********** -->
            <div class="col-sm-4" v-for="keep in keeps">
                <div class="thumbnail">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-eye">{{keep.views}}</i>
                        <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                        <i class="fa fa-heart">{{keep.likes}}</i>
                        <i class="fa fa-trash" @click="deleteKeep(keep.id)"></i>
                    </div>
                </div>
            </div>
            <!-- CREATE KEEP MODAL -->
            <div class="modal fade" id="createKeep" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- *********** Modal Header *********** -->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">
                                Create Keep
                            </h4>
                        </div>
                        <!-- *********** Modal Body *********** -->
                        <div class="modal-body">
                            <form class="form">
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input type="text" class="form-control" placeholder="Name" v-model="keep.name" required/>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Image</label>
                                    <input type="url" class="form-control" placeholder="https://vignette.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png/revision/latest?cb=20091207194310"
                                        v-model="keep.imageUrl" required/>
                                </div>
                                <div class="form-group">
                                    <button @click="createKeep" data-dismiss="modal" class="btn btn-default">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- *********** ADD KEEP TO VAULT MODAL************ -->
            <div class="modal fade" id="addKeep" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- *********** Modal Header *********** -->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">
                                Add Keep
                            </h4>
                            <h6>{{activeKeep.name}}</h6>
                        </div>
                        <!-- *********** Modal Body *********** -->
                        <div class="modal-body">
                            <form class="form">
                                <div class="form-group">
                                    <div class="col-sm-12 dropdown-style" title="choose category">
                                        <label for="vault options">Select Vault</label>
                                        <select class="form-control text-center" v-model="addKeep">
                                            <option class="col-sm-12" disabled>Vaults</option>
                                            <option class="col-sm-12" v-for="vault in vaults" selected :value="vault.id">{{vault.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button @click="addKeepToVault(addKeep)" data-dismiss="modal">Submit</button>
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
        name: 'Keeps',
        data() {
            return {
                keep: {
                    name: "",
                    imageUrl: "",
                    views: 0,
                    count: 0,
                    userId: 0,
                    likes: 0
                },
                addKeep: {
                    vaultId: "",
                    keepId: "",
                    userId: 0
                },
            }
        },
        components: {
        },
        computed: {
            keeps() {
                return this.$store.state.userKeeps
            },
            vaults() {
                return this.$store.state.vaults
            },
            activeKeep() {
                return this.$store.state.activeKeep
            }
        },
        mounted() {
            this.$store.dispatch('getUserKeeps')
        },
        methods: {
            createKeep() {
                this.$store.dispatch('createKeep', this.keep)
                this.keep = {
                    name: "",
                    imageUrl: "",
                    views: 0,
                    count: 0,
                    userId: 0,
                    likes: 0
                }
            },
            addKeepToVault(vaultId) {
                var addKeep = {
                    keepId: this.activeKeep.id,
                    vaultId: vaultId,
                    userId: 0
                }
                this.incrementCount()
                this.$store.dispatch("addKeepToVault", addKeep)
            },
            incrementCount() {
                var keep = this.$store.state.activeKeep
                keep.count++
                this.$store.dispatch("updateKeep", keep)

            },
            setActiveKeep(keep) {
                this.$store.dispatch('setActiveKeep', keep)
                $("#addKeep").modal('show')
            },
            deleteKeep(keepId) {
                this.$store.dispatch('deleteKeep', keepId)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    a {
        color: #42b983;
    }

    .keeps {
        padding-top: 2rem;
    }

    .create-keep {
        cursor: pointer;
    }

    .row {
        display: flex;
        flex-wrap: wrap
    }

    .keep-content:hover .overlay {
        opacity: .5;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #40cc4c;
    }

    .hover-buttons {
        top: 50%;
        left: 50%;
        position: absolute;
        font-size: 30px;
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>