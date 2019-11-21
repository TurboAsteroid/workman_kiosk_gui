<template>
		<v-app>
			<v-app-bar app clipped-right color="deep-orange darken-1" dark>
				<v-toolbar-title>Toolbar</v-toolbar-title>
			</v-app-bar>
			<v-content>
				<v-container>
					<v-row no-gutters>
						<v-col cols="12" sm="10">
							<v-col cols="12" sm="12" style="background: red;">
								<router-view/>
							</v-col>
							<v-col cols="12" sm="12" style="background: darkseagreen">
								<bottom-navigation/>
							</v-col>
						</v-col>
						<v-col cols="12" sm="2">
							<v-col cols="12" sm="12" style="background: green">
								<clock/>
							</v-col>
							<v-col cols="12" sm="12" style="background: aqua">
								<photo/>
							</v-col>
							<v-col cols="12" sm="12" style="background: yellow">
								<right-navigation/>
							</v-col>
						</v-col>
					</v-row>
				</v-container>
			</v-content>
			<v-footer app color="deep-orange darken-1" class="white--text">
				<span>Vuetify</span>
				<v-spacer></v-spacer>
				<span>&copy; 2019</span>
			</v-footer>
		</v-app>
</template>

<script>
// <router-view/>
import RightNavigation from "./components/rightNavigation";
import BottomNavigation from "./components/bottomNavigation";
import Clock from "./components/clock";
import Photo from "./components/photo";
export default {
  name: 'App',
    components: {Photo, Clock, BottomNavigation, RightNavigation},
    data: () => ({
        drawer: true,
        drawerRight: null,
        right: true,
        left: false,
    })
};
</script>
