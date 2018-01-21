<template>
    <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- *********** Modal Header *********** -->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title">
                        {{activeKeep.name}}
                    </h4>
                </div>
                <!-- *********** Modal Body *********** -->
                <div class="modal-body">
                    <div class="thumbnail keep-content">
                        <img :src="activeKeep.imageUrl" alt="image" class="image" style="height:500px; width:auto">
                        <div class="overlay">
                            <div class="hover-buttons">
                                <i class="fa fa-eye"> {{activeKeep.views}}</i>
                                    <i class="fa fa-code-fork" @click="OpenAddKeepToVaultModal"> {{activeKeep.count}}</i>
                                <i class="fa fa-share"></i> (coming soon)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Modal',
        data() {
            return {

            }
        },
        components: {
        },
        computed: {
            activeKeep() {
                return this.$store.state.activeKeep
            },
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            createKeep() {
                this.$store.dispatch('createKeep', this.keep)
            },
            addKeepToVault(keep) {
                var test = this.newKeep
                var keep = keep
                $("#addKeep").modal('show')
            },
            OpenAddKeepToVaultModal() {
                $("#imageModal").modal('hide')
                $("#addKeep").modal('show')
            },
        }
    }
</script>
<style scoped>
   
    .thumbnail {
        max-height: 600Px;
        position: relative;
        width: 100%;
    }

    .fa-code-fork {
        margin-left: 20px;
        margin-right: 20px;
    }

    .keep-content:hover .overlay {
        opacity: .7;
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
        background-color: #000000;
    }

    .hover-buttons {
        top:5%;
        left: 50%;
        position: absolute;
        font-size: 20px;
        transform: translate(-50%, -50%);
        text-align: center;
        color:rgb(255, 255, 255);
        cursor: pointer;
    }
</style>