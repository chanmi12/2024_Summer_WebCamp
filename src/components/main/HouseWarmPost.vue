<template>
  <div class="container">
    <div class="post-container">
      <div class="top-section">
        <button class="housePicButton" @click="goToHouseWarm">
          <p class="mainTitle">오늘의 추천 집들이 구경해보세요🧐</p>
        </button>
        <button class="moreButton" @click="goToHouseWarm">
          <p class="more"> 더보기 </p>
        </button>
      </div>
      <div class="posts-section">
        <div v-for="(item, index) in items" :key="index" class="post">
          <div class="post-top-section">
          <img :src="item.postImg" alt="post img" class="postImg"/>
          <img :src="item.bookmarked ? '/img/colorBookmark.png' : '/img/bookmark.png'" alt="bookmark" class="bookmark" @click="toggleBookmark(index)"/>
          </div>
          <div class="post-bottom-section">
          <p class="postTitle">{{ item.title }}</p>
          </div>
        </div>
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
        { postImg: '/img/housewarmPic/housewarming9.jpeg', title: '따스한 햇빛이 들어오는 방', name: '보리하우스', bookmarked: false },
        { postImg: '/img/housewarmPic/housewarming2.jpeg', title: '감성적인 인테리어의 방', name: '수니', bookmarked: false },
        { postImg: '/img/housewarmPic/housewarming3.jpeg', title: '바쁜 삶 속에서 편안한 휴식을 취하게 하는 인테리어', name: '내일의하우스', bookmarked: false },
        { postImg: '/img/housewarmPic/housewarming4.jpeg', title: '제주도의 따스한 햇빛이 들어오는 통창 거실', name: '내일도제주', bookmarked: false },
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
      this.$router.push('/housePicture');
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
/* Existing styles */
.container {
  padding: 0 220px;
  box-sizing: border-box;
  margin-top: 3%;
  margin-bottom: 5%;
}

.post-container {
  width: 100%;
}

.top-section {
  width: 100%;
  margin-bottom: -2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.housePicButton {
  background: none;
  border: none;
  cursor: pointer;
}

.moreButton {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 30px;
}

.mainTitle {
  font-size: 24px;
  font-weight: bold;
}

.more {
  font-size: 16px;
  font-weight: bold;
  color: #00CCFF;
}

.posts-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  transition: transform 0.3s ease;
}

.posts-section .post {
  width: 280px;
  height: 280px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.post-top-section{
  width: 100%;
  height: 180px;
}
.post-bottom-section{
  width: 100%;
  height: 100px;
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

.bookmark {
  position: absolute;
  bottom: 110px;
  right: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.postTitle {
  font-size: 16px;
  font-weight: 500;
}
</style>
