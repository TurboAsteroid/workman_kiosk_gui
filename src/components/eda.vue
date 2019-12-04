<template>
  <div>
    <div class="headline font-weight-bold text-center pa-4">
      Сведения по талонам на питание
    </div>
    <div v-if="edaList.length" class="pa-4">
      <table class="edaTable">
        <tr>
          <td>Наименование</td>
          <td>Остаток</td>
          <td>Использовано</td>
          <td>Норма</td>
        </tr>
        <tr v-for="(item, index) in edaList" :key="index">
          <td>{{item.name}}:</td>
          <td>{{item.available}}</td>
          <td>{{item.used}}</td>
          <td>{{item.norma}}</td>
        </tr>
      </table>
    </div>
    <div class="title pa-4" v-else>
      У вас нет талонов на питание
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Eda',
  data: () => ({
    edaList: []
  }),
  methods: {
    updateContent: async function () {
      let requestResult = await axios.get(`https://apps.elem.ru:3037/kiosk/eda?card=${this.$store.state.user}`)
      this.edaList = requestResult.data.data
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
  .edaTable {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
  }
  .edaTable td {
    border: 1px solid black;
    padding: 5px;
  }
</style>