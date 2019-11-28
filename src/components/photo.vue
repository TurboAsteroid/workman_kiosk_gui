<template>
  <v-container>
    <img :src="src" class="photo">
  </v-container>
</template>

<script>
export default {
  name: 'photo',
  data: () => ({

  }),
  computed: {
    user () {
      return this.$store.state.user
    },
    src () {
      return `https://elem-pre.elem.ru/spline/getPhoto?TABN=` + this.user
    }
  }
}
</script>
<style scoped>
  .photo {
    width: 190px;
    border: 5px solid #f39322;
    margin: 0 auto;
    border-radius: 10px;
    color: #fef9ef;
  }
</style>
