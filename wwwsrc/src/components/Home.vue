<template>
  <div class="home" id="container">
    <div class="row">
      <!-- ********** BEGIN DRAWING THUMBNAILS ********* -->
      <div class="column">
        <div class="thumbnail animated zoomInDown" v-for="keep in keeps[0]">
          <div v-scroll-reveal="{origin: 'bottom', distance: '300px',duration: 200, delay: 900}" class="scroll-reveal">
            <img :src="keep.imageUrl" alt="image"  @click="openImageModal(keep)" style="width:100%">
            <div class="caption">
              <p>{{keep.name}}</p>
              <div class="buttons">
                <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                <i class="fa fa-share"></i> (coming soon)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="thumbnail animated zoomInDown" v-for="keep in keeps[1]">
          <div v-scroll-reveal="{origin: 'bottom',  distance: '300px',duration: 200, delay: 500}" class="scroll-reveal">
            <img :src="keep.imageUrl" alt="image" @click="openImageModal(keep)" style="width:100%">
            <div class="caption">
              <p>{{keep.name}}</p>
              <div class="buttons">
                <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                <i class="fa fa-share"></i> (coming soon)
              </div>
            </div>
          </div>
          <!-- ********* HOVER BUTTONS ********** -->
          <!-- <div class="hover-buttons">
            <div class="buttons">
              <p>{{keep.name}}</p>
              <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
              <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
              <i class="fa fa-share"></i> (coming soon)
            </div>
          </div> -->
        </div>
      </div>
      <div v-if="keeps.length > 2" class="column">
        <div class="thumbnail animated zoomInDown" v-for="keep in keeps[2]">
          <div v-scroll-reveal="{origin: 'bottom',  distance: '300px',duration: 200, delay: 800}"class="scroll-reveal">
            <img :src="keep.imageUrl" alt="image"  @click="openImageModal(keep)" style="width:100%">
            <div class="caption">
              <p>{{keep.name}}</p>
              <div class="buttons">
                <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                <i class="fa fa-share"></i> (coming soon)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="keeps.length > 2" class="column">
        <div class="thumbnail animated zoomInDown" v-for="keep in keeps[3]">
          <div v-scroll-reveal="{origin: 'bottom',  distance: '300px',duration: 200, delay: 600}" class="scroll-reveal">
            <img :src="keep.imageUrl" alt="image"  @click="openImageModal(keep)" style="width:100%">
            <div class="caption">
              <p>{{keep.name}}</p>
              <div class="buttons">
                <i class="fa fa-eye" @click="openImageModal(keep)">{{keep.views}}</i>
                <i v-if="user.id" class="fa fa-code-fork" @click="setActiveKeep(keep)">{{keep.count}}</i>
                <i class="fa fa-share"></i> (coming soon)
              </div>
            </div>
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
  // import ScrollReveal from 'scrollreveal'
  // window.sr = ScrollReveal();
  // sr.flag   = true;
  // if ( sr && sr.flag ) {
  //   var container = document.getElementById('container');
  //   sr.reveal( '.tile', { container: container } );
  //   sr.flag = false;
  // } else {
  //   sr.sync();
  // }
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

  /*********** HOVER ***********/

  .thumbnail {
    background-color: rgba(87, 87, 87, 0.5);
    position: relative
  }

  /* .image {
    opacity: 1;
    transition: .5s ease;
    display: inline-block;
    width: 100%;
  } */

  /* .hover-buttons {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 2%;
    left: 0%;
    width: 100%;
    transform: translate(0%, 0%);
    text-align: center;
  } */

  /* .thumbnail:hover .image {
    opacity: .3;
  } */

  /* .thumbnail:hover .hover-buttons {
    opacity: 1;
  } */

  .buttons {
    background-color: rgba(0, 0, 0, 0.507);
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    border-radius: 10px;
  }

  /* *********** END HOVER ********** */

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

  .buttons:hover,
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

  img,
  .fa-code-fork,
  .fa-share,
  .fa-eye {
    cursor: pointer;
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