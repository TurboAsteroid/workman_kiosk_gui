<template>
  <div no-gutters class="pa-4 heightWrapper" v-if="content">
    <div class="heightScroll">
      <div class="headline font-weight-bold text-center">Расчётный листок за {{month}}.{{year}}</div>
      <table>
        <tr>
          <td>Цех(отдел): {{content.department.name}}</td>
          <td class="pl-4">{{content.rate.wage_slip_name}}: {{content.rate.value}}</td>
        </tr>
        <tr>
          <td>Таб.N {{user}}</td>
          <td class="pl-4">{{content.working_time_fund_plan.wage_slip_name}}: {{content.working_time_fund_plan.value}}</td>
        </tr>
        <tr>
          <td>ФИО: {{content.employee.fullname}}</td>
          <td class="pl-4"></td>
        </tr>
      </table>
      <br />
      <table class="tableKvitok text-right">
        <tr class="text-center">
          <td colspan="4">{{content.accruals_per_month.name}}</td>
          <td colspan="4">{{content.retentions_per_month.wage_slip_name}}</td>
        </tr>
        <tr class="text-center">
          <td>{{content.accruals_per_month.data[0][0].name}}</td>
          <td>{{content.accruals_per_month.data[0][1].name}}</td>
          <td>{{content.accruals_per_month.data[0][2].name}}</td>
          <td>{{content.accruals_per_month.data[0][3].name}}</td>
          <td>{{content.retentions_per_month.data[0][0].name}}</td>
          <td>{{content.retentions_per_month.data[0][1].name}}</td>
          <td>{{content.retentions_per_month.data[0][2].name}}</td>
          <td>{{content.retentions_per_month.data[0][3].name}}</td>
        </tr>

        <tr v-for="(item, index) in content.combineResult" :key="index">
          <td>{{item[0][0].value}}</td>
          <td class="text-left">{{item[0][1].value}}</td>
          <td>{{item[0][2].value}}</td>
          <td>{{item[0][3].value}}</td>
          <td>{{item[1][0].value}}</td>
          <td class="text-left">{{item[1][1].value}}</td>
          <td>{{item[1][2].value}}</td>
          <td>{{item[1][3].value}}</td>
        </tr>
        <tr>
          <td colspan="2">{{content.accruals_per_month.total_accrued.wage_slip_name}}</td>
          <td colspan="2">{{content.accruals_per_month.total_accrued.value}}</td>

          <td colspan="2">{{content.retentions_per_month.total_retentions.wage_slip_name}}</td>
          <td colspan="2">{{content.retentions_per_month.total_retentions.value}}</td>
        </tr>
        <tr>
          <td colspan="8" class="text-center">
            {{content.payroll.wage_slip_name}}: {{content.payroll.value}}
          </td>
        </tr>
        <tr v-if="content.other.length">
          <td colspan="4" class="text-center">Доходы в неденежн.форме,вычеты:</td>
          <td colspan="4"></td>
        </tr>
        <tr v-for="(item, index) in content.other" :key="index">
          <td>{{item.сode}}</td>
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
          <td></td>
          <td colspan="4"></td>
        </tr>


      </table>
      <br />
      <table class="tableKvitok">
        <tr>
          <td><b>{{content.taxes[0][0].name}}</b></td>
          <td><b>{{content.taxes[0][1].name}}</b></td>
        </tr>
        <tr>
          <td>{{content.taxes[0][0].value}}</td>
          <td>{{content.taxes[0][1].value}}</td>
        </tr>
      </table>
      <br />
      <table class="tableKvitok">
        <tr>
          <td colspan="4" class="text-center">{{content.insurance_premiums.wage_slip_name}}</td>
        </tr>
        <tr>
          <td>{{content.insurance_premiums.data[0].name}}</td>
          <td>{{content.insurance_premiums.data[1].name}}</td>
          <td>{{content.insurance_premiums.data[2].name}}</td>
          <td>{{content.insurance_premiums.data[3].name}}</td>
        </tr>
        <tr>
          <td>{{content.insurance_premiums.data[0].value}}</td>
          <td>{{content.insurance_premiums.data[1].value}}</td>
          <td>{{content.insurance_premiums.data[2].value}}</td>
          <td>{{content.insurance_premiums.data[3].value}}</td>
        </tr>
      </table>
    </div>
    <div class="printBlock">
      <v-btn color="warning" @click="helper.print(user)" x-large dark>Напечатать</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Kvitok',
  data: () => ({
    content: undefined,
    month: "",
    year: "",
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
    updateContent: async function () {
      let jsonResult = await axios.get(`https://apps.elem.ru:3037/kiosk/kvitok?card=${this.$store.state.user}`)
      this.content = jsonResult.data.data.data[0]
      this.month = jsonResult.data.data.month
      this.year = jsonResult.data.data.year
    }
  }
}
</script>
<style scoped>
  .printBlock {
    background-color: #a23b2a;
    height: 68px;
    padding: 9px 0 0;
    text-align: center;
  }
  .tableKvitok {
    background-color: #f7cb70;
    width: 100%;
    border-collapse: collapse;
  }
  .tableKvitok td {
    border: 1px solid black;
    padding: 0 5px;
  }
  .heightWrapper {
    width: 1025px;
    height: 908px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .heightScroll {
    height: 824px;
    overflow: auto;
  }
</style>
