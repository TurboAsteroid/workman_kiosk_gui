<template>
  <v-container>
    <img :src="images.any_person" style="height: 230px;">
  </v-container>
</template>

<script>
export default {
  name: 'photo',
data: () => ({
  images: {
    any_person: require('@/assets/any_person.png')
  }
})
}
</script>
<style scoped>
</style>
