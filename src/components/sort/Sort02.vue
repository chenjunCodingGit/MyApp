<template>
    <div class="mysort3">
        <div class="lineimg">
            <div @click="selectgood(index)" v-for="item,index in list" :key="index" class="img">
                <img :src="item.image" />
                <div>{{item.title}}</div>
            </div>
    
        </div>
    </div>
</template>
<script>
import staticList from '../data/Global.js'

export default {
    created() {
        this.$http.jsonp(
            'http://' + this.regUrl + '/php/goods/selectGoods.php', {
                jsonp: 'callback'
            }).then(function (res) {
                if (res.ok) {
                    res.json().then((res) => {
                        // console.log(res)
                        for (let i in res) {
                            this.list.push(res[i])
                            // if (i <= 3) {
                            //     this.list.push(res[i])
                            // } else {
                            //     this.list1.push(res[i])
                            // }
                        }
                    }, (err) => {
                        console.log(err)
                    })

                }
            }, function (error) {
                console.log(error)
            })
    },
    data() {
        return {
            list: [],
            regUrl: staticList.staticList[0]
        }
    },
    methods: {
        selectgood(index) {
            // console.log(this.list[index])
            this.$http.jsonp(
                'http://' + this.regUrl + '/php/details/updatecontent.php',
                {
                    params: {
                        image: this.list[index].image,
                        title: this.list[index].title,
                        describes: this.list[index].describes,
                        scale: this.list[index].scale,
                        price: Number(this.list[index].price),
                        goodid: Number(this.list[index].id),
                    },
                    jsonp: 'callback'
                }
            ).then((res) => {
                if (res.ok) {
                    res.json().then((res) => {
                        // console.log(res)
                        if (res.msg == "success") {
                            this.$router.push({ path: '/detail' })
                        }
                    })
                }
            })
        }
    }
}
</script>
<style lang="less">
.mysort3 {
    .lineimg {
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;
        .img:nth-child(2n+1) {
            margin-left: 4%;
            margin-top: 10px;
        }
        .img:nth-child(2n) {
            margin-top: 10px;
            margin-left: 4%;
        }
        .img {
            // height: 150px;
            width: 44%;
            display: inline-block;
            position: relative;
            overflow: scroll;
            flex: 1;
            img {
                width: 100%;
                height: 50%;
            }
            div {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.3);
                width: 100%;
                height: 40px;
                line-height: 40px;
                color: #fff;
                text-align: center;
                bottom: 0px;
            }
        }
    }
}
</style>
