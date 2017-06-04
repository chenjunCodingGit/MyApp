<template>
    <div class="mysort1">
        <div class="gridlist-demo-container">
            <mu-grid-list class="gridlist-demo">
                <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
                    <img @click="selectgoods(index)" :src="tile.image" />
                    <span slot="title">{{tile.title}}</span>
                    <span slot="subTitle">by
                        <b>上新</b>
                    </span>
                    <!--<mu-icon-button icon="star_border" slot="action" />-->
                </mu-grid-tile>
            </mu-grid-list>
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
                            if (i >= 1 && i < 5) {
                                res[0].featured = 1
                            } else if (i >= 5) {
                                res[5].featured = 1
                            }
                            this.list.push(res[i])
                        }
                        // this.list
                    }, (err) => {
                        console.log(err)
                    })

                }
            }, function (error) {
                console.log(error)
            })
    },
    data: function () {
        return {
            regUrl: staticList.staticList[0],
            selected: '1',
            value: 5,
            snackbar: true,
            toast: true,
            list: []
        }
    },
    methods: {
        selectgoods(index) {
            // console.log(index)
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
.mysort1 {
    .mu-grid-tile.action-left .mu-grid-tile-title-container{
        margin-left: 20px;
    }
}
</style>
