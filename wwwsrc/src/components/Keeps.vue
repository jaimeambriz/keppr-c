<template>
    <div class="keeps">
        <div class="create-keep">
            <h4 data-toggle="modal" data-target="#createKeep">
                <i class="fa fa-picture-o fa-lg"></i> Create Keep
            </h4>
        </div>
        <div class="row">
            <!-- ********** DRAW KEEPS ********** -->
            <div class="column">
                <div class="thumbnail" v-for="keep in keeps[0]">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                        <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                        <i class="fa fa-trash" @click="deleteKeep(keep.id)"></i>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="thumbnail" v-for="keep in keeps[1]">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                        <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                        <i class="fa fa-trash" @click="deleteKeep(keep.id)"></i>
                    </div>
                </div>
            </div>
            <div v-if="keeps.length > 2" class="column">
                <div class="thumbnail" v-for="keep in keeps[2]">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                        <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                        <i class="fa fa-trash" @click="deleteKeep(keep.id)"></i>
                    </div>
                </div>
            </div>
            <div v-if="keeps.length > 2" class="column">
                <div class="thumbnail" v-for="keep in keeps[3]">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                        <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                        <i class="fa fa-trash" @click="deleteKeep(keep.id)"></i>
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm-4" v-for="keep in keeps">
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
            </div> -->
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
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title">
                            Add Keep
                        </h4>
                        <h6>{{activeKeep.name}}</h6>
                        <img :src="activeKeep.imageUrl" alt="" style="height:100px; width:auto;">
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
        <!-- ********** IMAGE MODAL ********** -->
        <image-modal></image-modal>
    </div>
</template>

<script>
    import ImageModal from "./imagemodal"
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
                fourCol: true,
            }
        },
        components: {
            ImageModal
        },
        computed: {
            keeps() {
                // var keeps = this.$store.state.userKeeps
                // if (keeps.length == 4) {
                //     return keeps
                // }
                // this.$store.dispatch('massageKeepData', { data: keeps, num: 4, set: "setUserKeeps" })
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
            openImageModal(keep) {
                this.$store.dispatch('setActiveKeep', keep)
                $("#imageModal").modal('show')
                this.incrementViews(keep)
            },
            incrementViews(keep) {
                keep.views++
                this.$store.dispatch('updateKeep', keep)
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
    /*********** THUMBNAIL OPACITY ********* */

    .caption {
        color: white;
    }

    .thumbnail {
        background-color: rgba(253, 253, 253, 0.215)
    }

    /* ********* END ********* */

    .create-keep {
        color: white;
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

    /* *********** COLUMN STYLING ********* */

    body {
        margin: 0;
        font-family: Arial;
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