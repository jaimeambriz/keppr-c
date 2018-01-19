<template>
    <div class="vault">
        <div class="row">
            <!-- ********** DRAW KEEPS ********** -->
            <div class="col-sm-4" v-for="keep in activeKeeps">
                <div class="thumbnail">
                    <img :src="keep.imageUrl" alt="image" style="width:100%">
                    <div class="caption">
                        <p>{{keep.name}}</p>
                        <i class="fa fa-trash" @click="removeKeepFromVault(keep.id)"></i>
                    </div>
                </div>
            </div>
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
            activeKeeps() {
                return this.$store.state.activeKeeps
            }
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
    .row{
        margin-top:5rem
    }
    .keeps {
        padding-top: 2rem;
    }
</style>