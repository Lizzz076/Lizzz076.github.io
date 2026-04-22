// 用户名校验
function checkUsername() {
    let username = document.getElementById("username").value;
    let tip = document.getElementById("usernameTip");
    if (username.length < 3) {
        tip.innerText = "用户名长度不能小于3个字符!";
        return false;
    } else {
        tip.innerText = "";
        return true;
    }
}

// 密码非空校验
function checkPwd() {
    let pwd = document.getElementById("pwd").value;
    let tip = document.getElementById("pwdTip");
    if (pwd === "") {
        tip.innerText = "请输入密码!";
        return false;
    } else {
        tip.innerText = "";
        return true;
    }
}

// 确认密码校验
function checkRepwd() {
    let pwd = document.getElementById("pwd").value;
    let repwd = document.getElementById("repwd").value;
    let tip = document.getElementById("repwdTip");
    if (repwd === "") {
        tip.innerText = "请再次输入密码!";
        return false;
    } else if (repwd !== pwd) {
        tip.innerText = "两次密码输入不一致!";
        return false;
    } else {
        tip.innerText = "";
        return true;
    }
}

// 手机号格式校验
function checkPhone() {
    let phone = document.getElementById("phone").value;
    let tip = document.getElementById("phoneTip");
    let reg = /^1[3-9]\d{9}$/;
    if (phone !== "" && !reg.test(phone)) {
        tip.innerText = "请输入正确的手机号格式!";
        return false;
    } else {
        tip.innerText = "";
        return true;
    }
}

// 邮箱格式校验
function checkEmail() {
    let email = document.getElementById("email").value;
    let tip = document.getElementById("emailTip");
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (email !== "" && !reg.test(email)) {
        tip.innerText = "请输入正确的邮箱格式!";
        return false;
    } else {
        tip.innerText = "";
        return true;
    }
}

// 表单提交总校验
function checkForm() {
    let flag1 = checkUsername();
    let flag2 = checkPwd();
    let flag3 = checkRepwd();
    let flag4 = checkPhone();
    let flag5 = checkEmail();
    return flag1 && flag2 && flag3 && flag4 && flag5;
}