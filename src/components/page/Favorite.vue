<template>
    <div class="myfavorite">
        <mu-appbar title="我的收藏">
            <mu-icon color='#fff' value="keyboard_arrow_left" @click='back()' />
            <mu-flat-button @click='clearFav' label="清空收藏" slot="right" />
        </mu-appbar>
        <div v-show="clearAll" class="boxshow">
            <div class="myfav" v-show="lists[index].isshow" v-for="item, index in lists" :key="index">
                <div class="favimg">
                    <img :src="item.image" />
                </div>
                <div class="favmid">
                    <div>{{item.title}}</div>
                    <div>{{item.price}}</div>
                </div>
                <mu-float-button @click="deleteFav(index,$event)" icon="delete" mini class="demo-float-button" />
            </div>
        </div>
    
    </div>
</template>

<script>
import staticList from '../data/Global.js'
// v-show="lists[index].isFavorite"
export default {
    created() {
        this.$http.jsonp(
            'http://' + this.regUrl + '/php/session.php', {
                jsonp: 'callback'
            }
        ).then((res) => {
            if (res.ok) {
                res.json().then((res) => {
                    if (res.status) {
                        this.username = res.status

                        this.$http.jsonp( //selectFavorite
                            'http://' + this.regUrl + '/php/favorite/selectFavorite.php', {
                                params: {
                                    name: this.username
                                },
                                jsonp: 'callback'
                            }).then(function (res) {
                                if (res.ok) {
                                    res.json().then((res) => {
                                        // console.log(res)
                                        res.forEach(function (element, index) {
                                            //  this.lists[index] = element
                                            this.lists.push(element)
                                        }, this);

                                    }, (err) => {
                                        console.log(err)
                                    })

                                }
                            }, function (error) {
                                console.log(error)
                            })
                    }
                })
            }
        })
    },
    components: {
        // TopBar
    },
    data() {
        return {
            username: '',
            lists: [],
            clearAll: true,
            regUrl: staticList.staticList[0]
        }
    },
    methods: {
        deleteFav(index, e) {
            this.lists[index].isshow = false
            if (this.lists[index].id) {
                this.$http.jsonp( //selectFavorite
                    'http://' + this.regUrl + '/php/favorite/delOneFavorite.php', {
                        params: {
                            id: this.lists[index].id
                        },
                        jsonp: 'callback'
                    }).then(function (res) {
                        if (res.ok) {
                            res.json().then((res) => {


                            }, (err) => {
                                console.log(err)
                            })

                        }
                    }, function (error) {
                        console.log(error)
                    })
            }
        },
        clearFav() {
            this.clearAll = false

            this.$http.jsonp( //selectFavorite
                'http://' + this.regUrl + '/php/favorite/delAllFavorite.php', {
                    params: {
                        name: this.username
                    },
                    jsonp: 'callback'
                }).then(function (res) {
                    if (res.ok) {
                        res.json().then((res) => {


                        }, (err) => {
                            console.log(err)
                        })

                    }
                }, function (error) {
                    console.log(error)
                })
        },
        back() {
            this.$router.push({ path: '/home' })
        }
    }
}
</script>

<style lang="less">
.myfavorite {
    .mu-appbar {
        padding: 0px;
        height: 50px;
        line-height: 50px;
        .mu-icon {
            width: 40px;
            height: 50px;
            line-height: 50px;
            margin-left: -7px;
            margin-top: 5px;
        }
        .right span {
            font-family: "Microsoft YaHei";
            font-size: 13px; // letter-spacing: 1px;
        }
        .mu-appbar-title span {
            font-size: 16px;
            letter-spacing: 1px;
            margin-left: 157px;
        }
        .mu-flat-button-label {
            padding-right: 7px;
            padding-left: 7px;
        }
    }
    .boxshow {
        width: 100%;
        overflow: hidden;
        .myfav {
            display: flex;
            justify-content: center;
            align-items: center;
            .favimg {
                width: 100px;
                height: 100px;
                flex: 1;
                margin-left: 20px;
                margin-top: 10px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .favmid {
                flex: 1;
                margin-left: 10px;
            }
            .mu-float-button-mini {
                flex: .2;
                margin-right: 15px;
            }
        }
    }
    .demo-raised-button {
        width: 150px;
        margin-top: 40px;
        position: absolute;
        left: 50%;
        margin-left: -75px;
    }
}
</style>