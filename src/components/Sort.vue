<template>
    <div class='about'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">上新</mt-tab-item>
            <mt-tab-item id="2">孕婴</mt-tab-item>
            <mt-tab-item id="3">童装</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-sub-header>图片展示</mu-sub-header>
                        <mu-grid-tile v-for="tile, index in list" :key="index">
                        <img :src="tile.image"/>
                        <span slot="title">{{tile.title}}</span>
                        <span slot="subTitle">by <b>{{tile.author}}</b></span>
                        <mu-icon-button icon="star_border" slot="action"/>
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 0" :key = 'n.id'
                         :title="'content ' + n" />
                <div>
                    11111111111111
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 0" :key = 'n.id'
                         :title="'content ' + n" />
                <div>
                    sdddsddsddddddddddd 
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            selected: '1',
            value:5,
            list: [{
                image: './static/home/one.jpg',
                title: 'Breakfast',
                author: 'Myron'
            }, {
                image: './static/home/one.jpg',
                title: 'Burger',
                author: 'Linyu'
            }, {
                image: './static/home/one.jpg',
                title: 'Camera',
                author: 'ruolin'
            }, {
                image: './static/home/one.jpg',
                title: 'Hats',
                author: 'kakali'
            }, {
                image: './static/home/one.jpg',
                title: 'Honey',
                author: 'yuyang'
            }, {
                image: './static/home/one.jpg',
                title: 'Morning',
                author: 'mokayi'
            }, {
                image: './static/home/one.jpg',
                title: 'Vegetables',
                author: 'NUyyyyyyy'
            }, {
                image: './static/home/one.jpg',
                title: 'water',
                author: 'TDDyyyyyyy'
            }]
        }
    }
}
</script>

<style type='less' >
.about{
    .gridlist-demo-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .gridlist-demo{
        width: 500px;
        height: 450px;
        overflow-y: auto;
    }
}
.about .is-selected {
    background-color:#7e57c2;
}
.mint-navbar{
    position: relative;
    top: 0px;
    border-bottom: 3px solid #ececec;
}
.mint-navbar .mint-tab-item-label{
    font-size: 18px;
}
.mint-navbar .mint-tab-item{
    padding: 13px 0;
}
.about .mint-navbar .mint-tab-item.is-selected{
    color: #fff;
}
.about .mint-navbar .mint-tab-item{
    color: #7e57c2; 
}
.mt-tab-container{
    overflow: scroll;
    flex: 1;
}
</style>