/**
 * Created by DengZhihao on 2017/4/7.
 */
const vueSwipe = VueSwipe.Swipe;
const vueSwipeItem = VueSwipe.SwipeItem;
var vm = new Vue({
    el: '.container',
    data: {
        advList:[]
    },
    mounted: function () {
        this.$nextTick(function () {
            this.loadingState = true;
            this.queryAdv();
        });
    },
    components: {
        'swipe': vueSwipe,
        'swipe-item': vueSwipeItem
    },
    methods: {
        queryAdv: function () {
            var _this = this;
            this.$http.get("/javascripts/homeData.json").then(function (response) {
                var res = response.data;
                if (res.status == "2") {
                    _this.advList = res.result.list;
                }
            })
        }
    }
})