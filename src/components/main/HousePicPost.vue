<template>
  <div class="post-container">
    <div class="top-section">
      <button class="houseWarmButton" @click="goToHouseWarm">
        <p class="title">이런 사진 찾고 있나요?</p>
      </button>
      <button class="moreButton" @click="goToHouseWarm">
        <p class="more"> 더보기 </p>
      </button>
    </div>
    <div class="posts-section">
      <div v-for="(item, index) in items" :key="index" class="post">
        <img :src="item.postImg" alt="post img" class="postImg"/>
        <div class="profile">
          <img :src="item.profileImg" alt="profile img" class="profileImg"/>
          <p class="name">{{ item.name }}</p>
        </div>
        <img :src="item.bookmarked ? '/img/colorBookmark.png' : '/img/bookmark.png'" alt="bookmark" class="bookmark" @click="toggleBookmark(index)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: 'HousePicPost',
  setup() {
    const state = reactive({
      items: [
        { postImg: '/img/housePicture/house1.jpeg', profileImg: 'img/profile/profile9.jpeg', name: '보리하우스', bookmarked: false },
        { postImg: '/img/housePicture/house2.jpeg', profileImg: 'img/profile/profile2.jpeg', name: '수니', bookmarked: false },
        { postImg: '/img/housePicture/house3.jpeg', profileImg: 'img/profile/profile3.jpeg', name: '내일의하우스', bookmarked: false },
        { postImg: '/img/housePicture/house4.jpeg', profileImg: 'img/profile/profile4.jpeg', name: '내일도제주', bookmarked: false },
        { postImg: '/img/housePicture/house5.jpeg', profileImg: 'img/profile/profile5.jpeg', name: '내일디자인', bookmarked: false },
        { postImg: '/img/housePicture/house6.jpg', profileImg: 'img/profile/profile6.jpeg', name: 'tomorrow', bookmarked: false }
      ]
    });
    const toggleBookmark = (index) => {
      state.items[index].bookmarked = !state.items[index].bookmarked;
    };

    return {
      items: state.items,
      toggleBookmark
    };
  },
  methods: {
    goToHouseWarm() {
      this.$router.push('/housewarming');
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.post-container {
  width: 100%;
  padding: 0 240px;
  box-sizing: border-box;
  margin-top: 3%;
}

.top-section {
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;
}


.posts-section .postImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.posts-section .postImg:hover {
  transform: scale(1.1);
}

.houseWarmButton{
  background: none;
  border: none;
  cursor: pointer;
}
.moreButton{
  background: none;
  border:none;
  cursor: pointer;
}

.title {
  font-size: 24px;
  font-weight: bold;
}
.more{
  font-size: 16px;
  font-weight: bold;
  color: #00CCFF;
}

.posts-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
}

.post {
  width: 180px;
  height: 250px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.postImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.profile {
  position: absolute;
  bottom: 5px;
  left: 10px;
  display: flex;
  align-items: center;
  padding: 5px;
}

.profileImg {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
}

.name {
  font-size: 13px;
  color: white;
}

.bookmark {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
