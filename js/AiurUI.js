if (location.protocol != 'https:') {
    //location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
swal({
    title: '课程安全',
    text: "请确认你是否使用了与用户名相同的密码。\r\n这有极高的风险可能会导致你的课程被恶意删除。",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: '已修改密码',
    cancelButtonText: '立即修改',
    cancelButtonColor: '#d33',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger'
}).then((result) => {
    if (!result.value) {
        swal({
            title: '正在重定向...',
            text: '请在密码修改完成后再登录选课平台。',
            timer: 2000,
            type: 'success',
            onOpen: () => {
                swal.showLoading();
            }
        }).then(() => {
            location.href = "https://zhjw.neu.edu.cn/ACTIONCHANGEPASSWORD.APPPROCESS";
        });
    } else {
        swal({
            title: '可以开始选课了',
            showConfirmButton: false,
            timer: 1300,
            type: 'success'
        })
    }
})
var countDownDate = new Date("Dec 7, 2017 13:00:00").getTime();
var update = function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "天 " + hours + "小时 "
        + minutes + "分 " + seconds + "秒 ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "已经开始。";
    }
};
update();
var x = setInterval(update, 1000);