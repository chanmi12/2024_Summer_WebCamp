<template>
  <Post/>
  <Pagination/>
</template>

<script>
import Post from "@/components/housePic/Post.vue"
import Pagination from "@/components/layout/Pagination.vue";
export default{
  name: 'Housewarming',
  components: {Post, Pagination}
};
</script>

<style scoped>

</style>