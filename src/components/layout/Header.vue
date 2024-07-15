<template>
  <div class="header">
    <hr class="hr1">
    <div class="menuBar">
      <div class="section">
        <button class="menuButton" @click="goToMain">
          <h3>홈</h3>
        </button>
      </div>
      <div class="section">
        <button class="menuButton" @click="goToRecommend">
          <h3>채널</h3>
        </button>
      </div>
      <div class="section">
        <button class="menuButton" @click="goToHouse">
          <h3>집사진</h3>
        </button>
      </div>
    </div>
    <hr class="hr2">
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    goToMain() {
      this.$router.push('/');
    },
    goToRecommend() {
      this.$router.push('/housewarming');
    },
    goToHouse() {
      this.$router.push('/housePicture');
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
}

.hr1, .hr2 {
  width: 100%;
  border-top: 0.1px solid #EAEAEA;
}
.menuButton{
  border:none;
  background-color:white;
  cursor:pointer;
}
.menuBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 25%;
}

.section {
  flex: 1;
  text-align: center;
}
</style>
