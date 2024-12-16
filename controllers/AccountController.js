const RootController = require('./RootController');
const userList = require('./test-data/user');

class AccountController extends RootController {
	async generateToken(
		userName = userList.mainUser.userName,
		userPassword = userList.mainUser.password,
	) {
		const response = await this.axiosInstance.post('/Account/v1/GenerateToken', {
			userName: userName,
			password: userPassword,
		});

		return response.data.token;
	}

	async getUserId(
		userName = userList.mainUser.userName,
		userPassword = userList.mainUser.password,
	) {
		const response = await this.axiosInstance.post('/Account/v1/Login', {
			userName: userName,
			password: userPassword,
		});

		return response.data.userId;
	}
}
module.exports = new AccountController();
