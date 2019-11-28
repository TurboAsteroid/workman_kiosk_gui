<template>
  <div style="background-color: #a23b2a">
    <v-tabs-items v-model="tab" class="imageBlock">
      <v-tab-item
          v-for="(item, i) in images"
          :key="i"
          :value="'tab-' + i"
          style="height: 771px; width: 1004px;"
      >
          <img :src="item.img"
               class="deep-orange darken-1">
      </v-tab-item>
    </v-tabs-items>
    <v-tabs
        v-model="tab"
        background-color="#a23b2a"
        dark
        centered
        class="tabItemBlock"
        height = "100"
    >
      <v-tab
        class="tabItem"
        v-for="(item, i) in images"
        :key="'#tab-' + i"
        :href="'#tab-' + i"
        @click=changePage(i)>
        <img :src="item.icon">
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'info',
  data: () => ({
    image: 0,
    interval: null,
    images: [
      {
        img: require('@/assets/img/1.jpg'),
        icon: require('@/assets/img/1_small.jpg')
      },
      {
        img: require('@/assets/img/2.jpg'),
        icon: require('@/assets/img/2_small.jpg')
      },
      {
        img: require('@/assets/img/3.jpg'),
        icon: require('@/assets/img/3_small.jpg')
      },
      {
        img: require('@/assets/img/4.jpg'),
        icon: require('@/assets/img/4_small.jpg')
      },
      {
        img: require('@/assets/img/5.jpg'),
        icon: require('@/assets/img/5_small.jpg')
      },
      {
        img: require('@/assets/img/6.jpg'),
        icon: require('@/assets/img/6_small.jpg')
      },
      {
        img: require('@/assets/img/7.jpg'),
        icon: require('@/assets/img/7_small.jpg')
      },
      {
        img: require('@/assets/img/8.jpg'),
        icon: require('@/assets/img/8_small.jpg')
      },
      {
        img: require('@/assets/img/9.jpg'),
        icon: require('@/assets/img/9_small.jpg')
      },
      {
        img: require('@/assets/img/10.jpg'),
        icon: require('@/assets/img/10_small.jpg')
      }
    ],
  }),
	mounted() {
    this.setInterval()
	},
  methods: {
    changePage(index = this.image + 1) {
      clearInterval(this.interval)
      this.image = (index % this.images.length)
      this.setInterval()
    },
    setInterval() {
      this.interval = setInterval(() => this.changePage(), 10000)
    }
  },
  computed: {
    tab() {
      return 'tab-' + this.image
    }
  }
}
</script>
<style scoped>
  .imageBlock {
    height: 791px;
    width: 1025px;
    margin: 0;
    padding: 10px;
    background-color: #fec552;
    overflow: hidden;
    position: relative;
  }
  .tabItem {
    display: inline-block;
    width: 90px;
    height: 87px;
    padding: 0;
    margin: 0 2px;
  }
  .tabItem img {
  }
  .tabItemBlock {
    height: 117px;
    background-color: #a23b2a;
    padding-top: 17px;
    text-align: center;
    width: 940px;
    margin: 0 auto;
  }



</style>
