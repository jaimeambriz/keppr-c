<template>
    <div class="vault">
        <div class="row">
            <!-- ********** DRAW KEEPS ********** -->
            <div class="column">
                <div class="thumbnail" v-for="keep in keeps[0]">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                        <i class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                        <i class="fa fa-trash" @click="removeKeepFromVault(keep.id)"></i>
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
                        <i class="fa fa-trash" @click="removeKeepFromVault(keep.id)"></i>
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
                        <i class="fa fa-trash" @click="removeKeepFromVault(keep.id)"></i>
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
                        <i class="fa fa-trash" @click="removeKeepFromVault(keep.id)"></i>
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm-4" v-for="keep in activeKeeps">
                <div class="thumbnail">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-trash" @click="removeKeepFromVault(keep.id)"></i>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ActiveKeeps',
        data() {
            return {
                keep: {
                    name: "",
                    imageUrl: "",
                    views: 0,
                    count: 0,
                    userId: 0
                }
            }
        },
        components: {},
        computed: {
            keeps() {
                // var keeps = this.$store.state.activeKeeps
                // if (keeps.length == 4) {
                //     return keeps
                // }
                // this.$store.dispatch('massageKeepData', { data: keeps, num: 4, set: "setActiveVaultKeeps" })
                return this.$store.state.activeKeeps
            },
        },
        mounted() {
            this.$store.dispatch('getKeepsByVaultId', this.$route.params.id)
        },
        methods: {
            removeKeepFromVault(keepId) {
                this.$store.dispatch('removeKeepFromVault', { vaultId: this.$route.params.id, keepId: keepId })
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row {
        margin-top: 5rem
    }

    .keeps {
        padding-top: 2rem;
        
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