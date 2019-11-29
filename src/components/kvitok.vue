<template>
  <div class="htmlContent">
    <v-simple-table>
      <thead>
        <tr>
          <td colspan="2" class="titleTd">Сведения по обучению</td>
        </tr>
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
    </v-simple-table>
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
      let htmlResult = await axios.get(`https://apps.elem.ru:3033/routes/kiosk/education?card=${this.$store.state.user}`)
      this.list = htmlResult.data.data
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
    background-color: #f7cb70;
  }
  .htmlContent table tr td {
    background-color: #f7cb70;
    height: auto;
    padding: 4px 16px;
  }
  .titleTd {
    font-size: 1.2em;
    text-align: center;
  }
</style>
