<template>
  <div>
    <div>
        
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
   export default{
    name:'Home'
    }
</script>
<style>
*{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
.HomeTitle{
    width: 375px;
height: 68px;
text-align: center;
}
.HomeTitle span{
    font-size: 17px;
font-weight: 500;
text-align: center;
}
</style>
