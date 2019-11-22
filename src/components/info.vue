<template>
  <div>
    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="(item, i) in images"
          :key="i"
          :value="'tab-' + i"
          style="height: 771px; width: 1005px;"
      >
          <img :src="item.img" style="padding-left: 11px; padding-right: 12px"
               class="deep-orange darken-1">
      </v-tab-item>
    </v-tabs-items>
    <v-tabs
        v-model="tab"
        background-color="deep-orange darken-1"
        dark
        centered
        height="94"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        style="width: 94px;"
        v-for="(item, i) in images"
        :key="'#tab-' + item.icon"
        :href="'#tab-' + i">
        <img :src="item.icon">
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'info',
  data: () => ({
    images: {
      1: {
        img: require('@/assets/img/1.jpg'),
        icon: require('@/assets/img/1_small.jpg')
      },
      2: {
        img: require('@/assets/img/2.jpg'),
        icon: require('@/assets/img/2_small.jpg')
      },
      3: {
        img: require('@/assets/img/3.jpg'),
        icon: require('@/assets/img/3_small.jpg')
      },
      4: {
        img: require('@/assets/img/4.jpg'),
        icon: require('@/assets/img/4_small.jpg')
      },
      5: {
        img: require('@/assets/img/5.jpg'),
        icon: require('@/assets/img/5_small.jpg')
      },
      6: {
        img: require('@/assets/img/6.jpg'),
        icon: require('@/assets/img/6_small.jpg')
      },
      7: {
        img: require('@/assets/img/7.jpg'),
        icon: require('@/assets/img/7_small.jpg')
      },
      8: {
        img: require('@/assets/img/8.jpg'),
        icon: require('@/assets/img/8_small.jpg')
      },
      9: {
        img: require('@/assets/img/9.jpg'),
        icon: require('@/assets/img/9_small.jpg')
      },
      10: {
        img: require('@/assets/img/10.jpg'),
        icon: require('@/assets/img/10_small.jpg')
      }
    },
    tab: null,
  }),
	mounted() {
      const self = this
      setInterval(() => {
          let currentDate = new Date()
          self.tab = 'tab-' + Math.round(currentDate.getSeconds()/6)
			}, 1000)
	}
}
</script>
<style scoped>
</style>
