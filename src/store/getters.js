export default {
	isAdmin (state) {
		return state.user.data.rolle === "Administrator";
	},
	isLogin (state) {
		return state.user.isLogin;
	},
};