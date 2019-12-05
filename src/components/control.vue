<template>
  <div no-gutters class="pa-4 heightWrapper">
    <div class="headline font-weight-bold text-center">
      Учёт рабочего времени:
    </div>
    <div v-html="table" class="controlTableWraper" v-if="table" />
    <div class="title pa-4" v-else>
      Нет актуальных данных по контролю доступа
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Vocation',
  data: () => ({
    table: ""
  }),
  methods: {
    updateContent: async function () {
      let requestResult = await axios.get(`https://apps.elem.ru:3037/kiosk/control?card=${this.$store.state.user}`)
      this.table = requestResult.data.data

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
<style>
  .controlTableWraper table {
    background-color: #f7cb70;
    border-collapse: collapse;
    border: 1px solid black;
  }
  .controlTableWraper table td {
    border: 1px solid black;
    padding: 0 5px;
  }
</style>