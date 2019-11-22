<template>
	<v-app>
		<v-container>
			<v-row no-gutters>
				<v-col cols="12" lg="7" style="background:#962716">
					<img :src="images.logo" style="margin-left: 20px; margin-top: 17px;"/>
				</v-col>
				<div style="width: 255px; background:#962716">
					<v-btn v-if="rightNav" @click="rightNav = null">Выход</v-btn>
					<clock  v-if="!rightNav" style="margin-top: 22px"/>
				</div>
				<v-col cols="12" lg="7">
					<div style="background: red;" v-if="rightNav > 0">
						{{rightNav}}
					</div>
					<v-col cols="12" sm="12" style="padding: 0px">
						<info v-if="rightNav < 0 || rightNav == null"/>
					</v-col>
				</v-col>
				<div style="width: 255px">
					<v-col cols="12" sm="12" style="background: #ea6921;" v-if="!rightNav" @click="rightNav = -1">
						<div style="width: 180px; height: 841px;">
							<div style="background: #fec552; width: 180px; height: 842px;">
							<img :src="images.proximity">
							</div>
						</div>
					</v-col>
					<v-col cols="12" sm="12" style="width: 255px; height: 865px;background: #ea6921;" v-if="rightNav">
						<photo/>
						<right-navigation @selected="(val) => rightNav = val"/>
					</v-col>
				</div>
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
