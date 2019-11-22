<template>
  <div>



      <v-card>
        <v-tabs-items v-model="tab">
          <v-tab-item
              v-for="i in 3"
              :key="i"
              :value="'tab-' + i"
          >
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs
            v-model="tab"
            background-color="deep-orange darken-1"
            centered
            dark
            icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Recents
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Favorites
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Nearby
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>


      </v-card>




<!--<div>{{$route.params.id}}</div>-->
<!--    <bottom-navigation @id="(val) => id = val"/>-->
  </div>
</template>

<script>
// import BottomNavigation from "./bottomNavigation";
export default {
  name: 'info2',
  // components: {BottomNavigation},
  props: {
    url: String
  },
  data: () => ({
    tab: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    id: 1
  }),
  // watch: {
  //   id: function (n, o) {
  //     this.$router
  //   }
  // }
}
</script>
<style scoped>
</style>
