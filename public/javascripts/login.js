/**
 * Created by DengZhihao on 2017/4/26.
 */
Vue.http.options.emulateJSON = true;

var vm = new Vue({
    el: '#app',
    data: {
        loginMethod: 1,
        loginBody: {
            lphone: '',
            lpwd: ''
        },
        registerBody: {
            rphone: '',
            rpwd: '',
            rname: '',
            rsex: ''
        }
    },
    methods: {
        myLogin: function () {
            this.$http.post('/', this.loginBody).then(function (response) {
                location.href = 'home';
            }, function (response) {
                location.href = '/';
            })
        },
        myRegister: function () {
            this.$http.post('register', this.registerBody).then(function (response) {
                location.href = '/';
            }, function (response) {
                location.href = '/';
            })
        }
    }
})

