<template>
  <div>
    <div class="headline font-weight-bold text-center pa-4">
      Сведения по отпуску:
    </div>
    <div v-if="planned_dates.length" class="pa-4">
      <div class="title">
        Ваш запланированный отпуск:
      </div>
      <div v-for="(item, index) in planned_dates" :key="index">
        <div class="dateString">{{item.date}}:</div>
        <div class="dayString">{{item.number_of_days}}</div>
        <v-divider
          v-if="index + 1 < planned_dates.length"
          :key="index"
        ></v-divider>
      </div>
    </div>
    <div class="title pa-4" v-else>
      Нет актуальных данных по предстоящим отпускам
    </div>
    <div class="pa-4">
      Неизрасходованный отпуск (дней): {{debt}}
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Vocation',
  data: () => ({
    planned_dates: [],
    debt: ""
  }),
  methods: {
    updateContent: async function () {
      let requestResult = await axios.get(`https://apps.elem.ru:3037/kiosk/vocation?card=${this.$store.state.user}`)
      this.planned_dates = requestResult.data.data.planned_dates
      this.debt = requestResult.data.data.debt
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
  .dateString {
    display: inline-block;
    width: 140px;
  }
  .dayString {
    display: inline-block;
  }
</style>