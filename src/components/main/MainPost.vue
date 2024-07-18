<template>
  <div class="post-container">
    <img src="/img/housewarmPic/housewarming1.jpeg" alt="main post Img" class="mainImg"/>
    <div class="information-container">
      <p class="title">따스한 햇빛이 들어오는 방</p>
      <img src="/img/profile/profile1.jpeg" alt="profile Img" class="profileImg"/>
      <p class="name">내일의 집</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'MainPost'
}
</script>

<style scoped>
.post-container {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-top: 3%;
  overflow: hidden;
}

.mainImg {
  width: 100%;
  height: 600px;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.post-container:hover .mainImg {
  transform: scale(1.1);
}

.information-container {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 30px;
  border-radius: 5px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #FFFFFF;
}

.profileImg {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
}

.name {
  display: inline;
  margin: 0;
  line-height: 40px;
  color: #FFFFFF;
}
</style>