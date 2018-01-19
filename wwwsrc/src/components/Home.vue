<template>
  <div class="home">
    <!-- <div class="header" id="myHeader"> -->
    <!-- ********** BUTTONS FOR GRID ********** -->
    <!-- <h1>Image Grid</h1>
      <p>Click on the buttons to change the grid view.</p>
      <button class="btn active" @click="two()">2</button>
      <button class="btn" @click="four()">4</button>
      <button class="btn" @click="eight()">8</button> -->
    <!-- </div> -->
    <!-- ********** BEGIN DRAWING THUMBNAILS ********* -->
    <div id="photos">
      <!-- <div class="column"> -->
      <!-- <div class="thumbnail" style="width:100%;" v-for="keep in keeps"></div> -->
      <div class="image-container " v-for="keep in keeps">
        <img :src="keep.imageUrl" alt="image" @click="setActiveKeep(keep)" style="width:100%; border:white solid 10px; border-radius: 10%;">
      </div>


      <!-- <div class="caption"> -->
      <!-- <p>{{keep.name}}</p> -->
      <!-- <i class="fa fa-eye pull-left" @click="incrementViews(keep)">{{keep.views}}</i>
            <i class="fa fa-code-fork">{{keep.count}}</i>
            <i class="fa fa-heart pull-right">{{keep.likes}}</i>
          </div>  -->
      <!-- </div> -->
      <!-- </div> -->
      <!-- <div class="column">
        <div class="thumbnail" v-for="keep in keeps[1]">
          <img :src="keep.imageUrl" alt="image" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
            <i class="fa fa-code-fork">{{keep.count}}</i>
            <i class="fa fa-heart">{{keep.likes}}</i>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="thumbnail" v-for="keep in keeps[2]">
          <img :src="keep.imageUrl" alt="image" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
            <i class="fa fa-code-fork">{{keep.count}}</i>
            <i class="fa fa-heart">{{keep.likes}}</i>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="thumbnail" v-for="keep in keeps[3]">
          <img :src="keep.imageUrl" alt="image" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
            <i class="fa fa-code-fork">{{keep.count}}</i>
            <i class="fa fa-heart">{{keep.likes}}</i>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="thumbnail" v-for="keep in keeps[4]">
          <img :src="keep.imageUrl" alt="image" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
            <i class="fa fa-code-fork">{{keep.count}}</i>
            <i class="fa fa-heart">{{keep.likes}}</i>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="thumbnail" v-for="keep in keeps[5]">
          <img :src="keep.imageUrl" alt="image" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
            <i class="fa fa-code-fork">{{keep.count}}</i>
            <i class="fa fa-heart">{{keep.likes}}</i>
          </div>
        </div>
      </div>
      <div class="column">
          <div class="thumbnail" v-for="keep in keeps[6]">
            <img :src="keep.imageUrl" alt="image" style="width:100%">
            <div class="caption">
              <p>{{keep.name}}</p>
              <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
              <i class="fa fa-code-fork">{{keep.count}}</i>
              <i class="fa fa-heart">{{keep.likes}}</i>
            </div>
          </div>
        </div>
        <div class="column">
            <div class="thumbnail" v-for="keep in keeps[7]">
              <img :src="keep.imageUrl" alt="image" style="width:100%">
              <div class="caption">
                <p>{{keep.name}}</p>
                <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
                <i class="fa fa-code-fork">{{keep.count}}</i>
                <i class="fa fa-heart">{{keep.likes}}</i>
              </div>
            </div>
          </div> -->
      <!-- ********** DRAW KEEPS ********** -->
      <!-- <div class="col-sm-4" v-for="keep in keeps">
        <div class="thumbnail">
          <img :src="keep.imageUrl" alt="image" style="width:100%">
          <div class="caption">
            <p>{{keep.name}}</p>
            <i class="fa fa-eye" @click="incrementView(keep)">{{keep.views}}</i>
            <i class="fa fa-code-fork">{{keep.count}}</i>
            <i class="fa fa-heart">{{keep.likes}}</i>
          </div>
        </div>
      </div> -->
    </div>
    <login></login>
    <register></register>
    <modal></modal>
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
  import Modal from './modal'
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
      Modal
    },
    computed: {
      keeps() {
        var keeps = this.$store.state.keeps
        console.log(keeps)
        return keeps
      },
      vaults() {
        return this.$store.state.vaults
      },
      activeKeep() {
        return this.$store.state.activeKeep
      }
    },
    methods: {
      setActiveKeep(keep) {
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
      eight() {
        var elements = document.getElementsByClassName("column");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.msFlex = "12.5%";  // IE10
          elements[i].style.flex = "12.5%";
        }
      },
      two() {
        var elements = document.getElementsByClassName("column");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.msFlex = "50%";  // IE10
          elements[i].style.flex = "50%";
        }
      },
      four() {
        var elements = document.getElementsByClassName("column");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.msFlex = "25%";  // IE10
          elements[i].style.flex = "25%";
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    padding-top: 4rem;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial;
  }

  .header {
    text-align: center;
    padding: 32px;
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
    margin: 0 0 1px
  }
  img:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02); 
}
  /* Create two equal columns that sits next to each other */

  /* 
  .column {
    -ms-flex: 50%; */

  /* IE 10 */

  /* flex: 50%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
  } */

  /* Style the buttons */

  /* .btn {
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
  } */

  /* ************** Column Count *********** */

  .thumbnail {
    display: block;
    padding: 0px;
    margin-bottom: 20px;
    line-height: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    -webkit-transition: border .2s ease-in-out;
    -o-transition: border .2s ease-in-out;
    transition: border .2s ease-in-out;
  }

  #photos {

    line-height: 18;

    /* -webkit-column-count: 5;
   -webkit-column-gap:   0px;
   -moz-column-count:    5;
   -moz-column-gap:      0px; */
    column-count: 4;
    column-gap: 2px;
  }

  /* 
  template {
    margin: 0;
    padding: 0;
  } */

  /* @media (max-width: 1200px) {
  #photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
} */

  @media (max-width: 1000px) {
    #photos {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }

  @media (max-width: 800px) {
    #photos {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }

  /* /* @media (max-width: 400px) {
    #photos {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  } */
</style>