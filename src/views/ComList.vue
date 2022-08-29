<template>
  <div >
    <div class="loding" v-if="loding" @touchmove.stop.prevent="()=>{}" >
      <div class="round"></div>
    </div>
    <div class="HomeTitle">
      <span>购物车</span>
    </div>
    <div class="ComgList">
      <ul>
        <li v-for="item in clistData" :key="item.id">
          <div>
            <input type="checkbox" v-model="item.checked" @click="checkBut(item.productId._id)" />
          </div>
          <div class="ListShop">
            <div class="shopImga">
              <img :src="item.productId.image" alt="" />
            </div>
            <div class="shopGo">
              <p>{{ item.productId.name }}</p>
              <p>尺码：M</p>
              <p>￥{{ item.price }}</p>
            </div>

            <div class="shopGo">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>
                <span class="item_jian" @click="unTions(item.productId._id)">-</span>
                <span> {{ item.quantity }} </span>
                <span class="item_jia" @click="addTions(item.productId._id)">+</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="comFooter">
      <div class="comShop">
        <div>
          共计：<span>{{ this.num }}</span>件
        </div>
        <div>
          合计：<span class="daole">{{ this.sum }}</span>元
        </div>
      </div>
      <div class="fooBut">支付</div>
    </div>
    <div style="height:137.73px;"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ComList",
  data() {
    return {
      clistData: [],
      sum: 0,
      num: 0,
      loding: false
    };
  },
  methods: {
    findclistData() {
      this.loding = true
      axios({
        url: "https://dahua0822-api.herokuapp.com/cart",
        method: "get",
      }).then((res) => {

        if (res.status === 200) {
          this.loding = false
        }
        this.clistData = res.data.data.items;
        this.sum = res.data.data.subTotal;
        let number = 0
        this.clistData.map(function (arr) {
          if (arr.checked) {
            return number += arr.quantity
          }
        })
        this.num = number
      });
    },
    // jia
    addTions(id) {
      this.loding = true
      axios
        .post("https://dahua0822-api.herokuapp.com/cart", {
          productId: id,
          quantity: 1,
        })
        .then((res) => {
          axios.get("https://dahua0822-api.herokuapp.com/cart").then((res) => {
            if (res.status === 200) {
              this.loding = false
            }
            this.clistData = res.data.data.items;

            this.sum += res.data.data.subTotal;
          });
        });
    },
    // jian
    unTions(id) {
      this.loding = true
      axios
        .post("https://dahua0822-api.herokuapp.com/cart", {
          productId: id,
          quantity: -1,
        })
        .then((res) => {
          axios.get("https://dahua0822-api.herokuapp.com/cart").then((res) => {
            if (res.status === 200) {
              this.loding = false
            }
            this.clistData = res.data.data.items;
            this.sum = res.data.data.subTotal;
          });
        });
    },
    checkBut(id) {
      this.loding = true
      axios
        .post("https://dahua0822-api.herokuapp.com/cart/select", {
          productId: id,
        })
        .then((res) => {
          axios.get("https://dahua0822-api.herokuapp.com/cart").then((res) => {
            if (res.status === 200) {
              this.loding = false
            }
            this.clistData = res.data.data.items;
            this.sum = res.data.data.subTotal;
            let number = 0
            this.clistData.map(function (arr) {
              if (arr.checked) {
                return number += arr.quantity
              }

            })
            this.num = number

          });
        });
    },
  },
  created() {
    this.findclistData();
  },

  computed: {},
};
</script>
<style>
.HomeTitle {
  width: 375px;
  height: 68px;
  background: white;
  text-align: center;
  line-height: 68px;
}

.HomeTitle span {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
}

.ComgList {
  width: 375px;
  /* height: 1500px; */
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 23px;
  background-color: #f7f7fa;
}

.ComgList li {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

input[type="checkbox"] {
  width: 22px;
  height: 22px;
  margin: 0 4px 0 0;
  appearance: none;
  position: relative;
  background: white;
  border-radius: 50%;
}

/** 选中的样式*/
input[type="checkbox"]:checked::before {
  content: "";
  background: rgba(255, 223, 117, 1);
  position: absolute;
  /* top: 25%; */
  /* left: 25%; */
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 50%;
}

.comFooter {
  width: 375.24px;
  height: 137.73px;
  position: fixed;
  bottom: 0;
  border-radius: 30px 30px 0px 0;
  padding: 22px;
  background: rgba(255, 255, 255, 1);
}

.comShop {
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: 700;
  justify-content: space-between;
  margin-bottom: 18px;
}

.daole {
  font-size: 18px;
  font-weight: 700;
}

.fooBut {
  width: 335px;
  height: 58px;
  opacity: 1;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 58px;
  background: rgba(255, 223, 117, 1);
}

.ListShop {
  font-size: 12px;
  display: flex;
  margin-left: 18px;
  width: 295px;
  height: 98px;
  opacity: 1;
  padding: 7px;
  background: rgba(255, 255, 255, 1);
  border-radius: 30px;
}

.shopImga {
  flex-grow: 1;
  width: 84px;
  height: 84px;
  opacity: 1;
  overflow: hidden;
  background: rgba(247, 247, 247, 1);
  border-radius: 30px;
}

.shopImga img {
  width: 84px;
  height: 84px;
}

.shopGo {
  margin-left: 10px;
  flex-grow: 1;
  width: 80px;
}

.shopGo p {
  margin-top: 17px;
  font-size: 12px;
  font-weight: 700;
}

.shopGo p:nth-child(1) {
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* width: 120px; */
}

.shopGo p:nth-child(2) {
  font-size: 10px;
  font-weight: 500;
  color: rgba(204, 204, 204, 1);
}

.shopTo {
  flex-grow: 1;
}

.item_jia {
  width: 16px;
  height: 16px;
  display: inline-block;
  text-align: center;
  line-height: 16px;
  background: rgba(255, 223, 117, 1);
}

.item_jian {
  width: 16px;
  height: 16px;
  display: inline-block;
  text-align: center;
  line-height: 16px;
  background: rgba(255, 223, 117, 1);
}

.loding {
  position: fixed;

  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 99999;
  align-items: center;
  justify-content: center;
}

.round {
  width: 80px;
  height: 80px;
  border: 6px solid;
  border-radius: 50%;
  border-color: #fff transparent #fff transparent;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  from {
    transform: rotale(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
