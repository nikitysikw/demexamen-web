export default {
	SET_USER (state, { user, videos, rolle }) {
		state.user.isLogin = true;
		
		state.user.data.id = user.id;
		state.user.data.email = user.email;
		state.user.data.username = user.username;
		state.user.data.token = user.token;
		
		state.user.data.rolle = rolle.name;
	},
	CLEAR_USER (state) {
		state.user = {
			isLogin: false,
			data: {
				id: "",
				username: "",
				email: "",
				token: "",
				rolle: "",
			},
			videos: [],
		};
	},
	
	SET_LOGIN_ERROR_EMAIL (state, email) {
		state.loginError.email = email;
	},
	SET_LOGIN_ERROR_PASSWORD (state, password) {
		state.loginError.password = password;
	},
	CLEAR_LOGIN_ERROR (state) {
		state.loginError.email = [];
		state.loginError.password = [];
	},
	
	SET_REGISTRATION_ERROR_EMAIL (state, email) {
		state.registrationError.email = email;
	},
	SET_REGISTRATION_ERROR_PASSWORD (state, password) {
		state.registrationError.password = password;
	},
	SET_REGISTRATION_ERROR_REPEAT_PASSWORD (state, repeatPassword) {
		state.registrationError.repeatPassword = repeatPassword;
	},
	SET_REGISTRATION_ERROR_USERNAME (state, username) {
		state.registrationError.username = username;
	},
	CLEAR_REGISTRATION_ERROR (state) {
		state.registrationError.email = [];
		state.registrationError.password = [];
		state.registrationError.username = [];
		state.registrationError.repeatPassword = [];
	},
	
	SET_USER_VIDEOS (state, videos) {
		state.user.videos = videos;
	},
	CLEAR_USER_VIDEOS (state) {
		state.user.videos = [];
	},
	
	SET_VIDEO_CATEGORIES (state, categories) {
		state.categories = categories;
	},
	
	SET_MAIN_VIDEOS (state, videos) {
		state.mainVideos = videos;
	},
	CLEAR_MAIN_VIDEOS (state) {
		state.mainVideos = [];
	},
	
	SET_VIDEOS (state, videos) {
		state.videos = videos;
	},
	CLEAR_VIDEOS (state) {
		state.videos = [];
	},
	
	SET_VIDEO (state, video) {
		state.video.data = video[0];
		state.video.comments = video[1];
	},
	
	SET_STATUS_VIDEOS (state, status) {
		state.videoStatus = status;
	},
};