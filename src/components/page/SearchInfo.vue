<template>
    <div class="mysearch" @keyup="get()" @click="get()">
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
        </mt-search>
        <ul class="search-ui">
            <li v-for=" (value, index) in mydata">
                {{value}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '', //双向绑定输入框值
            mydata: []  //保存搜索引擎返回的值
        }
    },
    methods: {
        get: function () {  //跨域请求jsonp
            this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
                params: {
                    wd: this.value
                },
                jsonp: 'cb'
            }).then(function (res) {
                this.mydata = res.data.s;
            }, function (err) {
                console.log(err)
            })
        }
    },
}
</script>
<style>
a {
    text-decoration: none;
}

.mysearch .mint-search .mint-searchbar {
    background-color: #7e57c2;
}

.mint-search .mint-searchbar a {
    color: #fff;
}

.mint-search {
    height: 100%;
}

.mint-searchbar-cancel {
    color: #fff;
}

.mysearch .mint-search {
    height: 100%;
}

.search-ui {
    padding-left: 30px;
    margin-top: 5px;
    font-size: 16px;
}

.search-ui li {
    line-height: 40px;
    border-bottom: 1px solid #ececec;
    color: #7e57c2;
}
</style>   