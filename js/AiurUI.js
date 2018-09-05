swal({
    title: '课程安全',
    text: "请确认你是否使用了与用户名相同的密码。\r\n这有极高的风险可能会导致你的课程被恶意删除。",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: '已确认密码',
    cancelButtonText: '立即修改',
    cancelButtonColor: '#d33',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    footer: '<a href="https://zhjw.neu.edu.cn/index.jsp" target="_blank">前往确认</a>'
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
});
var countDownDate = new Date("2018-09-11 13:00:00").getTime();
var update = function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance < 0) {
        clearInterval(x);
        $("#started").html("选课已经开始");
        return;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $("#demo").html(days + "天 " + hours + "小时 "
        + minutes + "分 " + seconds + "秒 ");
};
update();
var x = setInterval(update, 1000);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }