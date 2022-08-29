<template>
    <div>
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
      name:'listStyle',
      data() {
    return {
      listData: [],
    };
  },
  methods: {
    findlistData() {
      axios({
        url: "https://dahua0822-api.herokuapp.com/goods?sort=style",
        method: "get",
      }).then((res) => {
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
  