<template>
  <v-card
      class="mx-auto"
      tile
      flat
      style="background: #ea6921;"
  >
    <v-list-item v-for="(item, i) in menu" :key="i" @click="goTo(item.path)" class="menuItem" dark>
      <v-list-item-content>
        <v-list-item-title style="font-size: 1.3em">{{item.name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>

<script>
//import router from '../router'
export default {
  name: 'rightNavigation',
  props: {
    url: String
  },
  data(){ return {
    menu: this.$router.options.routes.slice(1)
  }},
  methods: {
    goTo(path) {
      this.$router.replace(path)
      this.$store.commit('setTimer', 30)
    }
  }
}
</script>
<style scoped>
  .menuItem {
    margin: 0 0 10px;
    border-radius: 10px !important;
    height: 75px;
    font-weight: bold;
    background-color: #f39322;
    text-align: center;
    cursor: pointer;
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);
    border-top: 3px solid rgba(255, 255, 255, 0.3);
  }
</style>
