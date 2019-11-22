<template>
	<v-app>
		<v-container>
			<v-row no-gutters>
				<v-col cols="12" sm="7" style="background:#962716"><img :src="images.logo" style="margin-left: 20px; margin-top: 17px;"/></v-col>
				<v-col cols="12" sm="5">
					<v-col cols="12" sm="12" style="background: green">
						<v-btn v-if="rightNav" @click="rightNav = null">Выход</v-btn>
						<clock/>
					</v-col>
				</v-col>
				<v-col cols="12" sm="7">
					<div style="background: red;" v-if="rightNav > 0">
						{{rightNav}}
					</div>
					<v-col cols="12" sm="12" style="padding: 0px">
						<info v-if="rightNav < 0 || rightNav == null"/>
					</v-col>
				</v-col>
				<v-col cols="12" sm="5">
					<v-col cols="12" sm="12" style="background: #ea6921;" v-if="!rightNav" @click="rightNav = -1">
						<div style="background: #fec552; height: 400px; width: 180px;">
							<img :src="images.proximity">
						</div>
					</v-col>
					<v-col cols="12" sm="12" style="background: #ea6921;" v-if="rightNav">
						<photo/>
					</v-col>
					<v-col cols="12" sm="12" v-if="rightNav">
						<right-navigation @selected="(val) => rightNav = val"/>
					</v-col>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
// <router-view/>
import RightNavigation from "./components/rightNavigation";
import Clock from "./components/clock";
import Photo from "./components/photo";
import Info from "./components/info";
export default {
  name: 'App',
    components: {Info, Photo, Clock, RightNavigation},
    data: () => ({
        images: {
            proximity: require('@/assets/img/proximity.gif'),
            logo: require('@/assets/img/logo.png')
        },
        rightNav: null
    })
};
</script>
