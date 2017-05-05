<template>
    <div class='sort'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">上新</mt-tab-item>
            <mt-tab-item id="2">孕婴</mt-tab-item>
            <mt-tab-item id="3">童装</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" class="sort1">
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
                            <img :src="tile.image" />
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author}}</b></span>
                            <mu-icon-button icon="star_border" slot="action" />
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" class="sort2">
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile, index in list" :key="index">
                            <img :src="tile.image" />
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author}}</b></span>
                            <mu-icon-button icon="star_border" slot="action" />
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 0" :key='n.id' :title="'content ' + n" />
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
            value: 5,
            list: [{
                image: './static/home/one.jpg',
                title: 'Breakfast',
                author: 'Myron',
                featured: true
            }, {
                image: './static/home/two.jpg',
                title: 'Burger',
                author: 'Linyu'
            }, {
                image: './static/home/three.jpg',
                title: 'Camera',
                author: 'ruolin'
            }, {
                image: './static/home/one.jpg',
                title: 'Hats',
                author: 'kakali'
            }, {
                image: './static/home/two.jpg',
                title: 'Honey',
                author: 'yuyang'
            }, {
                image: './static/home/three.jpg',
                title: 'Morning',
                author: 'mokayi',
                featured: true
            }, {
                image: './static/home/one.jpg',
                title: 'Vegetables',
                author: 'NUyyyyyyy'
            }, {
                image: './static/home/two.jpg',
                title: 'water',
                author: 'TDDyyyyyyy'
            }]
        }
    }
}
</script>

<style lang='less' >
.sort {
    .sort1 {
        .gridlist-demo-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .gridlist-demo {
            width: 500px;
            height: 566px;
            overflow-y: auto;
        }
    }
    .sort2 {
        .gridlist-demo-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .gridlist-demo {
            width: 500px;
            height: 566px;
            overflow-y: auto;
        }
    }
}

.sort .is-selected {
    background-color: #7e57c2;
}

.mint-navbar {
    position: relative;
    top: 0px;
    border-bottom: 3px solid #ececec;
}

.mint-navbar .mint-tab-item-label {
    font-size: 18px;
}

.mint-navbar .mint-tab-item {
    padding: 13px 0;
}

.sort .mint-navbar .mint-tab-item.is-selected {
    color: #fff;
}

.sort .mint-navbar .mint-tab-item {
    color: #7e57c2;
}

.mt-tab-container {
    overflow: scroll;
    flex: 1;
}
</style>