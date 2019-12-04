<template>
	<v-app>
		<div no-gutters style="width: 1280px; padding: 0">
			<v-row no-gutters>
				<v-col style="background:#962716;">
					<img :src="images.logo" style="margin-left: 20px; margin-top: 17px;"/>
          <div class="headerTitle">ПО ВСЕМ ВОПРОСАМ, СВЯЗАННЫМ С РАБОТОЙ ТЕРМИНАЛА,<br>ОБРАЩАТЬСЯ ПО ТЕЛЕФОНУ 8(34368)4-65-79</div>
				</v-col>
				<v-col style="background:#962716;" class="pa-5 rightColumn">
					<clock @click="helper.changeProximityCode(21534660)" />
				</v-col>
      </v-row>
      <v-row no-gutters>
				<v-col class="contentBlock">
          <router-view />
				</v-col>
				<v-col class="pa-5 rightColumn" style="background: #ea6921;height: 908px;" >
					<div v-if="!user" @click="helper.changeProximityCode(21534660)" class="welcome py-10">
            ПОЖАЛУЙСТА, ПРИЛОЖИТЕ ВАШ ПРОПУСК
            <img :src="images.proximity">
					</div>
					<div style="background: #ea6921;" v-if="user">
						<photo/>
						<right-navigation @selected="(val) => rightNav = val"/>
					</div>
				</v-col>
			</v-row>
		</div>
	</v-app>
</template>

<script>
// <router-view/>
import RightNavigation from "./components/rightNavigation";
import Clock from "./components/clock";
import Photo from "./components/photo";
export default {
  name: 'App',
  components: {Photo, Clock, RightNavigation},
  data: () => ({
      images: {
          proximity: require('@/assets/img/proximity.gif'),
          logo: require('@/assets/img/logo.png')
      },
      rightNav: null
  }),
  computed: {
    user () {
      return this.$store.state.user
    },
    timer () {
      return this.$store.state.timer
    }
  }
};
</script>
<style scoped>
  @font-face{
    font-family: Franklin Gothic Heavy; /* Гарнитура шрифта */
    src: url(../public/FRAHV.TTF); /* Путь к файлу со шрифтом */
  }
  * {
    font-family: Franklin Gothic Heavy;
  }
  .rightColumn {
    max-width: 255px;
    min-width: 255px;
    width: 255px;
  }
  .welcome {
    background: #fec552;
    border: 5px solid #f39322;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: #fef9ef;
    font-size: 1.4em;
  }
  .headerTitle {
    display: inline-block;
    color: #f39322;
    margin-left: 20px;
    font-size: 20px;
    letter-spacing: 1px
  }
	.contentBlock {
		background-color: #fec552;
	}
</style>