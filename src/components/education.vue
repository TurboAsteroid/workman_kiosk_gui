<template>
  <div class="htmlContent pa-4">
    <div class="headline font-weight-bold text-center">
      Сведения по обучению:
    </div>
    <table class="educationTable">
      <thead>
        <tr>
          <td>Дата обучения</td>
          <td>Тема</td>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(item, i) in list" :key="i">
        <td>{{item.date}}</td>
        <td>{{item.title}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: () => ({
    list: undefined
  }),
  methods: {
    updateContent: async function () {
      let htmlResult = await axios.get(`https://apps.elem.ru:3037/kiosk/education?card=${this.$store.state.user}`)
      this.list = htmlResult.data.data.data
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },

  mounted: async function() {
    this.updateContent()
  },
  watch: {
    '$route': async function() {
      this.updateContent()
    }
  },
}
</script>
<style scoped>
  .htmlContent {
    width: 1025px;
    height: 908px;
    overflow: auto;
  }
  .educationTable {
    background-color: #f7cb70;
    width: 100%;
    border-collapse: collapse;
  }
  .educationTable tr td {
    background-color: #f7cb70;
    height: auto;
    padding: 4px 16px;
    border: 1px solid black;
  }
</style>
