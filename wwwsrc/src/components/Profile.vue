<template>
  <div class="Profile">
    <h1>Profile</h1>
    <template>
        <main>
          <section>
            <h1>Scroll down!</h1>
          </section>
       
          <section v-scroll-reveal.reset>
            <h1>Tada!</h1>
          </section>
        </main>
      </template>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
      }
    },
    components: {},
    computed: {},
    methods: {}
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
  section {
    height: 100vh;
  }
</style>