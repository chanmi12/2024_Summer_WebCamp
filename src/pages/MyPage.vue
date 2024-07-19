<template>
  <div class="myPage">
    <div class="content-container">
      <div class="profile">
        <div class="top-section">
          <img src="/img/profile/profile9.jpeg" alt="profile img" class="profileImg"/>
          <p class="name">류찬미</p>
        </div>
        <hr class="divider">
        <div class="bottom-section">
          <div class="action-buttons">
            <img src="/img/bookmark.png" alt="bookmark" class="action-icon"/>
            <p class="action-text">스크랩</p>
            <p class="action-count">27</p>
          </div>
          <button class="action-buttons">
            <img src="/img/heart.png" alt="heart" class="action-icon"/>
            <p class="action-text">좋아요</p>
            <p class="action-count">39</p>
          </button>
        </div>
      </div>
      <div class="button-section">
        <p class="photoTitle1">사진 <span class="highlight">0</span></p>
        <div class="photo-section">
          <button class="photoButton">
            <p class="photoText">+ 첫 번째 사진을 올려보세요</p>
          </button>
        </div>
        <p class="houseWarmTitle">집들이 <span class="highlight">0</span></p>
        <div class="houseWarm-section">
          <button class="houseWarmButton">
            <p class="houseWarmText">+ 첫 번째 집들이를 올려보세요</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPage'
};
</script>

<style scoped>
.myPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
}

.profile {
  width: 300px;
  height: 400px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  margin-top: 5%;
  margin-left: 10%;
}

.top-section {
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profileImg {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 15%;
}

.name {
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
}

.divider {
  width: 80%;
  margin: 0 auto;
  border: none;
  height: 1px;
  background-color: #CCCCCC;
  margin-top: 10px;
}

.bottom-section {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
}

.action-icon {
  width: 30px;
  height: 30px;
  margin-top: 30%;
}

.action-text {
  font-size: 16px;
  font-weight: bold;
  margin-top: 20%;
}

.action-count {
  font-size: 16px;
  font-weight: bold;
  margin-top: -30%;
  color: #000000;
}

.button-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8%;
  margin-top: 7%;
}

.photoTitle1 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.highlight {
  color: #00CCFF;
}

.photo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 700px;
  height: 180px;
  border: 1px dashed #CCCCCC;
  margin-bottom: 8%;
  margin-top: 1%;
  padding: 10px;
}

.houseWarm-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 700px;
  height: 180px;
  border: 1px dashed #CCCCCC;
  margin-top: 1%;
  margin-bottom: 8%;
  padding: 10px;
}

.photoButton, .houseWarmButton {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.photoText, .houseWarmText {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  color: #666666;
  margin: 0;
}

.houseWarmTitle {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
}
</style>
