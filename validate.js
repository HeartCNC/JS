/*验证*/
//验证用户名
function checkUserName(userName){
	return /[\w]{8,16}/g.test(userName);
}
//验证密码
function checkPassword(password){
	return /[\w]{6,16}/g.test(password);
}
//验证邮箱
function checkEmail(email){
	return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g.test(phoneNum);
}
//验证手机号
function checkPhoneNum(phoneNum){
	return /(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/g.test(phoneNum);
}
//验证ip
function checkIp(ip){
	return /\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}/g.test(ip);
}


