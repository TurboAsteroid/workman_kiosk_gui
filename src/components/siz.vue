<template>
  <div no-gutters class="pa-0 htmlContent" >
    <div class="headline font-weight-bold text-center pt-4">
      Средства индивидуальной защиты:
    </div>
    <div v-html="content" class=" siz pa-4" />
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Siz',
  data: () => ({
    content: undefined
  }),
  mounted: async function() {
    this.updateContent()
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  watch: {
    '$route': async function() {
      this.updateContent()
    }
  },
  methods: {
    updateContent: async function () {
      let htmlResult = await axios.get(`https://apps.elem.ru:3037/kiosk/siz?card=${this.$store.state.user}`)
      this.content = htmlResult.data
    }
  }
}
</script>
<style scoped>
  .htmlContent {
    width: 1025px;
    height: 908px;
    overflow: auto;
    box-sizing: border-box;
  }
</style>
