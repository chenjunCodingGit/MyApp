<template>
    <div>
        <div class="search-info" @keyup="get()" @click="get()">
            <div class="mysearch">
                <mu-icon @click='back' class="search-left" value="keyboard_arrow_left" color="#fff"/>
                <mu-icon class="search-icon" value="search" color="#7e57c2" />
                <input v-model="value" type="search" placeholder='搜索' v-focus/>
                <span @click='searchCancel'>取消</span>
            </div>
            <ul class="search-ui">
                <li v-for=" (value, index) in mydata">
                    {{value}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
export default {
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },
    components: {
        TopBar
    },
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
        },
        searchCancel(){ //点击取消
            this.value = ''
        },
        back(){ //点击返回home
            this.$router.push({path:'/home'})
        }
    },
}
</script>
<style lang="less">
a {
    text-decoration: none;
}

.search-info {
    .mysearch {
        position: fixed;
        width: 100%;
        background-color: #7e57c2;
        height: 44px;
        top: 0px;
        z-index: 99;
        .mu-icon{
            position: absolute;
            top: 12px;
            font-size: 20px;
        }
        .mu-icon.search-icon {
            left: 32px;
        }
        .mu-icon.search-left{
            top: 0px;
            font-size:22px;
            height: 44px;
            line-height:44px;
            width: 28px;
            text-align: center;
        }
        input {
            padding-left:25px; 
            width: 80%;
            height: 28px;
            margin-left: 30px;
            margin-top: 8px;
            border: none;
            border-radius: 3px;
            outline: none;
        }
        span{
            display:inline-block;
            color:#fff;
            height:44px;
            line-height:44px;
            width:36px;
            text-align:center;
        }
    }
}

.search-info .mint-search .mint-searchbar {
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

.search-info .mint-search {
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