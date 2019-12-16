<template>
  <v-card
      class="mx-auto"
      tile
      flat
      style="background: #ea6921;"
  >
    <v-list-item v-for="(item, i) in menu" :key="i" @click="goTo(item.path)" class="menuItem" dark v-show="item.show <= access">
      <v-list-item-content>
        <v-list-item-title style="font-size: 1.3em">{{item.name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>

<script>
//import router from '../router'
import axios from "axios"
export default {
  name: 'rightNavigation',
  props: {
    url: String
  },
  mounted: async function() {
    this.updateContent()
  },
  computed: {
    user () {
      return this.$store.state.user
    },
  },
  data(){ return {
    menu: this.$router.options.routes.slice(1),
    access: -1
  }},
  methods: {
    goTo(path) {
      this.$router.replace(path)
      this.$store.commit('setTimer', 30)
    },
    updateContent: async function () {
      if (this.$store.state.user) {
        let jsonResult = await axios.get(`https://apps.elem.ru:3037/kiosk/getAccess?card=${this.$store.state.user}`)
        this.access = jsonResult.data.data.access
      }
    }
  },
  watch: {
    user: async function() {
      this.updateContent()
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
