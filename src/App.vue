<template>
		<v-app>
			<v-app-bar app clipped-right color="deep-orange darken-1" dark>
				<v-toolbar-title>Toolbar</v-toolbar-title>
			</v-app-bar>
			<v-content>
				<v-container fluid fill-height>
					<right-navigation/>
					<bottom-navigation/>
					<router-view/>

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
export default {
  name: 'App',
    components: {BottomNavigation, RightNavigation},
    data: () => ({
        drawer: true,
        drawerRight: null,
        right: true,
        left: false,
    })
};
</script>
