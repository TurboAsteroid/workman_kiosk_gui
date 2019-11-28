<template>
  <v-container>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">Введите номер телефона</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="step > 2" step="2">Введите код подтверждения</v-stepper-step>
        <v-divider/>
        <v-stepper-step :complete="step > 3" step="3">Спасибо!</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-form
                  ref="form"
                  v-model="valid"
          >
            <v-text-field
                    v-model="input1"
                    label="Укажите ваш телефон, на который будет зарегистрировано приложение"
                    prefix="+7"
                    :maxlength=maxLength
                    required
                    :counter=maxLength
                    :rules="phoneRules"
                    placeholder="Ваш телефон"
            />
          </v-form>

          <v-btn
                  :disabled="!valid"
                  color="primary"
                  @click="sendForm"
                  class="mr-4"
          >
            Отправить
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-form
                  ref="form"
                  v-model="valid2"
          >
            <v-text-field
                    v-model="input2"
                    label="Введите код, который пришёл вам на указанный номер телефона"
                    :rules="codeRules"
                    required
                    placeholder="Код подтверждения"
            />
          </v-form>
          <v-btn
                  :disabled="!valid2"
                  color="primary"
                  @click="sendAproveCode"
                  class="mr-4"
          >
            Отправить
          </v-btn>

          <v-btn
                  @click="cleanForm"
                  class="mr-4"
          >
            Начать сначала
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
                  class="mb-12"
                  height="200px"
          >
            На ваш телефон отправлен одноразовый пароль и ссылка для скачивания приложения. Спасибо!
          </v-card>
          <v-btn
                  @click="cleanForm"
                  class="mr-4"
          >
            Вернуться к началу
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <div class="mr-4">
      {{message}}
    </div>
    <v-container class="lighten-5 numpad">
      <v-row>
        <v-col xs="auto">
          <v-card @click="append('1')" id="n1" class="btn">1</v-card>
        </v-col>
        <v-col xs="auto">
          <v-card @click="append('2')" id="n2" class="btn">2</v-card>
        </v-col>
        <v-col xs="auto">
          <v-card @click="append('3')" id="n3" class="btn">3</v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="auto">
          <v-card @click="append('4')" id="n4" class="btn">4</v-card>
        </v-col>
        <v-col xs="auto">
          <v-card @click="append('5')" id="n5" class="btn">5</v-card>
        </v-col>
        <v-col xs="auto">
          <v-card @click="append('6')" id="n6" class="btn">6</v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="auto">
          <v-card @click="append('7')" id="n7" class="btn">7</v-card>
        </v-col>
        <v-col xs="auto">
          <v-card @click="append('8')" id="n8" class="btn">8</v-card>
        </v-col>
        <v-col xs="auto">
          <v-card @click="append('9')" id="n9" class="btn">9</v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="auto"><div id="n0" class="btn empty">.</div>
        </v-col>
        <v-col xs="auto">
          <v-card @click="append('0')" id="n0" class="btn">0</v-card>
        </v-col>
        <v-col xs="auto">
          <v-card @click="remove()" id="remove" class="btn">&#8656;</v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios"

export default {
  props: {
    source: String,
  },
  data: () => ({
    step: 1,
    valid: false,
    valid2: false,
    input1: "",
    input2: "",
    message: "",
    maxLength: 10,
    phoneRules: [
      v => !!v || "Введите номер телефона",
      v => v.length === 10 || "Телефон должен состоять из 10 цифр"
    ],
    codeRules: [
      v => !!v || "Введите номер телефона",
    ],
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    cleanForm() {
      this.step = 1
      this.input1 = ""
      this.input2 = ""
      this.valid = false
      this.valid2 = false
      this.message = ""
    },
    async sendForm() {
      let response = await axios.post("https://apps.elem.ru:3033/routes/registration/phone", {
        phone: this.input1,
        card: this.user,
      })
      if (response.data.status === 1) {
        this.step = 2
        this.message = ""
      } else {
        this.message = response.data.data.message
      }
      this.$store.commit('setTimer', 30)
    },
    async sendAproveCode() {
      let response = await axios.post("https://apps.elem.ru:3033/routes/registration/aprove", {
        phone: this.input1,
        code: this.input2,
        card: this.user,
      })
      if (response.data.status === 1) {
        this.step = 3
        this.message = ""
      } else {
        this.message = response.data.data.message
      }
      this.$store.commit('setTimer', 30)
    },
    append(number) {
      if (this[`input${this.step}`].length < 10) this[`input${this.step}`] += number;
    },
    remove() {
      this[`input${this.step}`] = this[`input${this.step}`].substr(0, this[`input${this.step}`].length - 1);
    },
  },
}
</script>
<style>
  .numpad {
    width: 300px !important;
  }
  .btn {
    cursor: pointer;
    text-align: center;
    padding: 20px 25px;
  }

  .empty {
    visibility: hidden
  }
</style>