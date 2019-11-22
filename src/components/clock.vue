<template>
  <div id="time">
    {{ time }}
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
  }),
  mounted: function() {
    setInterval(() => {
      let currentDate = new Date()
      let currentMinutes = currentDate.getMinutes()
      let currentSeconds = currentDate.getSeconds()
      this.time = `${currentDate.getHours()}${currentSeconds%2?' ':':'}${currentMinutes < 10 ? '0' : ''}${currentMinutes}`
    }, 1000)
  },
}
</script>
<style scoped>
  #time {
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
</style>
