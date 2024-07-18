<template>
  <div class="myPage">
    <div class="profile">
      <div class="top-section">
        <img src="/img/profile/profile9.jpeg" alt="profile img" class="profileImg"/>
        <p class="name">류찬미</p>
      </div>
      <hr class="divider">
      <div class="bottom-section">
        <button class="action-buttons">
          <img src="/img/bookmark.png" alt="bookmark" class="action-icon"/>
          <p class="action-text">스크랩</p>
          <p class="action-count">27</p>
        </button>
        <button class="action-buttons">
          <img src="/img/heart.png" alt="heart" class="action-icon"/>
          <p class="action-text">좋아요</p>
          <p class="action-count">39</p>
        </button>
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
}

.profile {
  width: 300px;
  height: 400px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  margin-left: 15%;
  margin-top: 5%;
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
  cursor:pointer;
  background:none;
  border:none;
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
</style>
