<template>
  <div >
    <div class="time" v-if="!user">
      {{ time }}
    </div>
    <div class="timer" v-if="user" @click="helper.changeProximityCode(undefined)">
      <span>
        {{timer}}
      </span>
      <img :src="src">
    </div>
  </div>
</template>

<script>
export default {
  name: 'clock',
  props: {
    url: String
  },
  data: () => ({
    time: '',
    src: require("@/assets/img/out.gif")
  }),
  methods: {
    clock() {
      let currentDate = new Date()
      let currentMinutes = currentDate.getMinutes()
      let currentSeconds = currentDate.getSeconds()
      this.time = `${currentDate.getHours()}${currentSeconds%2?' ':':'}${currentMinutes < 10 ? '0' : ''}${currentMinutes}`
    }
  },
  mounted: function() {
    this.clock()
    setInterval(() => this.clock(), 1000)
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    timer () {
      return this.$store.state.timer
    }
  }
}
</script>
<style scoped>
  .time {
    color: #f39322;
    height: 70px;
    text-align: center;
    font-size: 3.5em;
    font-weight: bold;
    border-radius: 10px;
    background-color: #802010;
    line-height: 70px;
    font-family: monospace;
  }
  .timer {
    color: #fef9ef;
    height: 70px;
    text-align: center;
    font-size: 3.2em;
    font-weight: bold;
    border-radius: 10px;
    background-color: #f39322;
    cursor: pointer;
    border-bottom: 3px solid rgba(129, 47, 11, 0.6);
    border-top: 3px solid rgba(255, 255, 255, 0.5);

    padding: 8px 20px 15px;
  }
  .timer > img {
    vertical-align: top;
  }
  .timer > span {
    display: inline-block;
    width: 70px;
    text-align: center;
    margin-right: 10px;
    margin-top: 4px;
    line-height: 40px;
    vertical-align: top;
  }
</style>
