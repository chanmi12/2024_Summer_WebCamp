<template>
  <MainPost/>
  <HousePicPost/>
  <HouseWarmPost/>
</template>

<script>
import MainPost from "@/components/main/MainPost";
import HousePicPost from "@/components/main/HousePicPost";
import HouseWarmPost from "@/components/main/HouseWarmPost";
export default{
  name: 'Main',
  components: {MainPost, HouseWarmPost, HousePicPost},
};
</script>
<style scoped>
</style>
