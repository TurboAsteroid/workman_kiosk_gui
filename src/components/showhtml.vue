<template>
  <v-container no-gutters class="pa-0">
    <div v-if="$route.path !== '/kvitok'" v-html="content" class="htmlContent" :class="$route.path === '/siz' ? 'siz' : ''" />
    <div v-else>
      <div v-html="content" class="htmlContentKvitok" />
      <div class="printBlock">
        <v-btn color="warning" @click="helper.print(user)" x-large dark>Напечатать</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  name: 'htmlContent',
  data: () => ({
    content: undefined
  }),
  mounted: async function() {
    this.updateContent(this.$route.path)
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  watch: {
    '$route': async function(to) {
      this.updateContent(to.path)
    }
  },
  methods: {
    updateContent: async function (path) {
      let htmlResult = await axios.get(`https://apps.elem.ru:3033/routes/kiosk/getHTML${path}?card=${this.$store.state.user}`)
      this.content = htmlResult.data
    }
  }
}
</script>
<style scoped>
  .htmlContentKvitok {
    width: 1025px;
    height: 840px;
    overflow: auto;
    background-color: #fec552;
    padding: 20px;
    box-sizing: border-box;
  }
  .htmlContentKvitok .kvitok {

  }
  .htmlContent {
    width: 1025px;
    height: 908px;
    overflow: auto;
    background-color: #f7cb70;
    padding: 20px 5px;
    box-sizing: border-box;
  }
  .printBlock {
    background-color: #a23b2a;
    height: 68px;
    padding: 9px 0 0;
    text-align: center;
  }
</style>
