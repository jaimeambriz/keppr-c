<template>
  <div class="home">
    <div class="row">
      <!-- ********** BEGIN DRAWING THUMBNAILS ********* -->
      <div class="column">
        <div class="thumbnail keep-content" v-for="keep in keeps[0]">
          <img :src="keep.imageUrl" alt="image" @click="openImageModal(keep)" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
            <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
            <i class="fa fa-share"></i> (coming soon)
          </div>
        </div>
      </div>
      <div class="column">
        <div class="thumbnail keep-content" v-for="keep in keeps[1]">
          <img :src="keep.imageUrl" alt="image" @click="openImageModal(keep)" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
            <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
            <i class="fa fa-share"></i> (coming soon)
          </div>
        </div>
      </div>
      <div v-if="keeps.length > 2" class="column">
        <div class="thumbnail keep-content" v-for="keep in keeps[2]">
          <img :src="keep.imageUrl" alt="image" @click="openImageModal(keep)" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
            <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
            <i class="fa fa-share"></i> (coming soon)
          </div>
        </div>
      </div>
      <div v-if="keeps.length > 2" class="column">
        <div class="thumbnail keep-content" v-for="keep in keeps[3]">
          <img :src="keep.imageUrl" alt="image" @click="openImageModal(keep)" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
            <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
            <i class="fa fa-share"></i> (coming soon)
          </div>
        </div>
      </div>
    </div>
    <login></login>
    <register></register>
     <!-- ********** IMAGE MODAL ********** -->
    <image-modal></image-modal>
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
</template>

<script>
  import ImageModal from './imagemodal'
  import Register from './Register'
  import Login from './Login'
  export default {
    name: 'Home',
    data() {
      return {
        addKeep: {
          vaultId: "",
          keepId: "",
          userId: 0
        },
      }
    }, mounted() {
      // this.$store.dispatch('getAllKeeps')
    },
    components: {
      Login,
      Register,
      ImageModal
    },
    computed: {
      keeps() {
        // ********** COMMENT THIS OUT WHEN THE SERVER IS RUNNING **********
        var keeps = this.$store.state.keeps
        if (keeps.length == 4) {
          return keeps
        }
        this.$store.dispatch('massageKeepData', { data: keeps, num: 4, set: "setKeeps" })
        // ********** END **********
        return this.$store.state.keeps
      },
      vaults() {
        return this.$store.state.vaults
      },
      activeKeep() {
        return this.$store.state.activeKeep
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
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
      setActiveKeep(keep) {
        this.$store.dispatch('setActiveKeep', keep)
        $("#addKeep").modal('show')
      },
      incrementCount() {
        var keep = this.$store.state.activeKeep
        keep.count++
        this.$store.dispatch("updateKeep", keep)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .caption {
    color: white;
  }

  .thumbnail {
    background-color: rgba(87, 87, 87, 0.5)
  }

  .home {
    padding-top: 4rem;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  .fa-eye {
    margin-right: 10px
  }

  .fa-share {
    margin-left: 10px
  }

  p {
    margin: 0 0 0px
  }

  img:hover {
    -ms-transform: scale(1.02);
    /* IE 9 */
    -webkit-transform: scale(1.02);
    /* Safari 3-8 */
    transform: scale(1.02);
  }

  img {
    border-radius: 10px;
  }

  /* Create four equal columns that sits next to each other */

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

  /* ************** MEDIA WIDTH ***********  
  @media (max-width: 1000px) { 
  #photos { 
  column-count: 3; } 
  }  */
</style>