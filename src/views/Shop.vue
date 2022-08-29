<template>
  <div>
    <div class="HotBox">
      <div class="hotTitle">火爆商品</div>

      <div class="hotCon">
        <ul>
          <li v-for="item in listDataTop" :key="item.id">
            <div class="hotConbox">
              <div class="hotImg">
                <img :src="item.image" ref="img" alt="">
              </div>
              <div class="hotLibox">
                <div class="hottitle1"><span>{{ item.name }}</span></div>
                <div class="hottitle2"><span>¥{{ item.price }}</span></div>
              </div>
            </div>
          </li>

        </ul>
      </div>


      <div class="hotNav">
        <ul>
          <li>
            <router-link to="/">
              <div class="navbox2" :class="{active:'/listAll' == $route.path}" style="margin: 0;width:44px;" @click="goTo()"> 
                全部
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/listStyle">
              <div class="navbox2" @click="goTo()" :class="{active:'/listStyle' == $route.path}">

                款式新
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/listSell">
              <div class="navbox2" @click="goTo()" :class="{active:'/listSell' == $route.path}">
                销量
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/listRate">
              <div class="navbox2" @click="goTo()" :class="{active:'/listRate' == $route.path}">
                好评
              </div>
            </router-link>
          </li>

        </ul>

      </div>

      <!-- 商品列表 -->
      <div class="HomeList">

        <ul>
          <router-view></router-view>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Shop",
  data() {
    return {
      listData: [],
      listDataTop: []
    };
  },
  methods: {
    findlistData() {
      axios({
        url: "https://dahua0822-api.herokuapp.com/goods",
        method: "get",
      }).then((res) => {
        console.log(res)
        this.listData = res.data.data.data;
        this.listDataTop = res.data.data.top
      });
    },
    goTo(){
      console.log(this.$route.name)
    }
  },
  created() {
    this.findlistData();
  },
};
</script>
<style lang="scss">


.HomeTitle {
  width: 375px;
  height: 68px;
  background: white;
  text-align: center;
}

.HomeTitle span {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
}

.HomeList {
  width: 375px;
  /* height: 1500px; */
  background-color: #f7f7fa;
}

.HomeList li {
  margin-top: 20px;
  width: 327px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.listImg {
  width: 68px;
  height: 68px;
  overflow: hidden;
  background: white;
  border-radius: 20px;
}

.listImg img {
  width: 68px;
  height: 68px;
}

.listTxt {
  font-size: 12px;
  flex-grow: 2;
  padding-left: 15px;
  text-align: left;
  overflow: hidden;
  width: 100px;
}

.listIcon {
  width: 48px;
  height: 48px;
  opacity: 1;
  border-radius: 30px;
  text-align: center;
  line-height: 48px;
  background: rgba(255, 230, 148, 1);
}

.listIcon img {
  width: 18px;
  height: 18px;
}

.list_p {
  font-size: 12px;
  font-weight: 700;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list_span {
  font-size: 16px;
  font-weight: 700;
}

.HotBox {
  box-sizing: border-box;
  /* overflow: hidden; */
  width: 375px;
  padding: 28px 24px;
  overflow: hidden;
  background-color: #f7f7fa;

}

.hotTitle {
  font-size: 14px;
  font-weight: 700;
}

.hotCon {
  margin-top: 20px;
}

.hotCon ul {
  display: flex;

  /* overflow: hidden; */
  overflow-x: auto;
  align-items: center;
}

ul::-webkit-scrollbar {
  display: none;
}

.hotCon ul li {
  margin-left: 26px;

  text-overflow: ellipsis;
  white-space: nowrap;
}

.hotConbox {

  width: 168px;
  height: 222px;
  border-radius: 28px;
  overflow: hidden;
}

.hotCon ul li:nth-child(1) {
  margin-left: 0px;
}

.hotImg {
  width: 168px;
  height: 146px;

}

.hotLibox {
  width: 168px;
  height: 76px;
  padding: 10px 18px;
  box-sizing: border-box;
  border-radius: 0px 0px 28px 28px;
  background-color: white;

}

.hotImg img {
  width: 168px;
  height: 146px;
}

.hottitle1 {
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hottitle2 {
  margin-top: 14px;
  font-size: 16px;
  font-weight: 700;
}

.hotNav {
  margin-top: 32px;
}

.hotNav ul {
  display: flex;
  overflow-x: auto;
  align-items: center;
}

ul::-webkit-scrollbar {
  display: none;
}


.navbox2 {
  margin-left: 20px;
  width: 99.23px;
  height: 44px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 44px;
  background-color: white;
}
.active {
  background-color: rgba(255, 230, 148, 1);
}

</style>
