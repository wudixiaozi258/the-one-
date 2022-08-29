<template>
    <div>
      <div class="loding" v-if="loding" @touchmove.stop.prevent="()=>{}" >
      <div class="round"></div>
    </div>
        <li v-for="item in listData" :key="item.id">
          <div class="listImg"><img :src="item.image" ref="img" alt="" /></div>

          <div class="listTxt">
            <p class="list_p">{{ item.name }}</p>
            <span class="list_span">￥{{ item.price }}</span>
          </div>

          <div class="listIcon"><img src="./分组 2@2x.png" alt="" /></div>
        </li>
    </div>
  </template>
  <script>
    import axios from "axios";
     export default{
      name:'listRate',
      data() {
    return {
      listData: [],
      loding: false
    };
  },
  methods: {
    findlistData() {
      this.loding = true
      axios({
        url: "https://dahua0822-api.herokuapp.com/goods?sort=rate",
        method: "get",
      }).then((res) => {
        if (res.status === 200) {
          this.loding = false
        }
        console.log(res)
        this.listData = res.data.data.data;
      });
    },
  },
  created() {
    this.findlistData();
  },
      }
  </script>
  <style>

  </style>
  