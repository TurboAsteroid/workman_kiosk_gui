<template>
		<v-app>
			<v-app-bar app clipped-right color="deep-orange darken-1" dark>
				<v-toolbar-title>ЭЛЕМ</v-toolbar-title>
				<v-spacer></v-spacer>
				<div>
					ПО ВСЕМ ВОПРОСАМ, СВЯЗАННЫМ С РАБОТОЙ ТЕРМИНАЛА,
					ОБРАЩАТЬСЯ ПО ТЕЛЕФОНУ 8(34368)4-65-79
				</div>
			</v-app-bar>
			<v-content>
				<v-container>
					<v-row no-gutters>
						<v-col cols="12" sm="10">
							<v-col cols="12" sm="12" style="background: red;">
								<router-view/>
							</v-col>
							<v-col cols="12" sm="12" style="background: darkseagreen">
{{rightNav}}
<bottom-navigation v-if="!rightNav"/>
							</v-col>
						</v-col>
						<v-col cols="12" sm="2">
							<v-col cols="12" sm="12" style="background: green">
								<clock/>
							</v-col>
							<v-col cols="12" sm="12" style="background: blue">
								<info/>
							</v-col>
							<v-col cols="12" sm="12" style="background: aqua">
								<photo/>
							</v-col>
							<v-col cols="12" sm="12">
								<right-navigation @selected="(val) => rightNav = val"/>
							</v-col>
						</v-col>
					</v-row>
				</v-container>
			</v-content>

		</v-app>
</template>

<script>
// <router-view/>
import RightNavigation from "./components/rightNavigation";
import Clock from "./components/clock";
import Photo from "./components/photo";
import Info from "./components/info";
import BottomNavigation from "./components/bottomNavigation";
export default {
  name: 'App',
    components: {BottomNavigation, Info, Photo, Clock, RightNavigation},
    data: () => ({
        bottomNav: '1',
        rightNav: null
    })
};
</script>
