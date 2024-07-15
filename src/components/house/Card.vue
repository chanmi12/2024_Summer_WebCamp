<template>
  <div class="card-container">
    <div v-for="(item, index) in items" :key="index" class="card">
      <div class="profile-section">
        <img :src="item.profileImg" alt="profile image" class="profile-img"/>
        <p class="nickname">{{ item.name }}</p>
      </div>
      <div class="house-section">
        <img :src="item.houseImg" alt="house image" class="house-img"/>
      </div>
      <div class="action-section">
        <button class="action-button" @click="toggleLike(index)">
          <img :src="item.liked ? '/img/colorHeart.png' : '/img/heart.png'" alt="like" class="action-icon"/>
          <span>{{ item.likeCount }}</span>
        </button>
        <button class="action-button" @click="toggleBookmark(index)">
          <img :src="item.bookmarked ? '/img/colorBookmark.png' : '/img/bookmark.png'" alt="bookmark" class="action-icon"/>
          <span>{{ item.bookmarkCount }}</span>
        </button>
        <button class="action-button">
          <img src="/img/chat.png" alt="comment" class="action-icon"/>
          <span>{{ item.commentCount }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Card',
  setup() {
    const state = reactive({
      items: [
        { profileImg: '/img/profile/profile1.jpeg', name: '짱구', houseImg: '/img/housePicture/house1.jpeg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 3 },
        { profileImg: '/img/profile/profile2.jpeg', name: '부럽이', houseImg: '/img/housePicture/house2.jpeg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 5 },
        { profileImg: '/img/profile/profile3.jpeg', name: '미니언즈', houseImg: '/img/housePicture/house3.jpeg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 2 },
        { profileImg: '/img/profile/profile4.jpeg', name: '버블', houseImg: '/img/housePicture/house4.jpeg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 4 },
        { profileImg: '/img/profile/profile5.jpeg', name: '포키', houseImg: '/img/housePicture/house5.jpeg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 1 },
        { profileImg: '/img/profile/profile6.jpeg', name: '흰둥이', houseImg: '/img/housePicture/house6.jpg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 6 },
        { profileImg: '/img/profile/profile7.jpeg', name: '떡잎마을방범대', houseImg: '/img/housePicture/house7.jpg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 7 },
        { profileImg: '/img/profile/profile8.jpeg', name: '주디', houseImg: '/img/housePicture/house8.jpg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 0 },
        { profileImg: '/img/profile/profile9.jpeg', name: '미첼이', houseImg: '/img/housePicture/house9.jpg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 8 },
        { profileImg: '/img/profile/profile10.jpeg', name: '나탈리', houseImg: '/img/housePicture/house10.jpg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 2 },
        { profileImg: '/img/profile/profile11.jpeg', name: '애플이', houseImg: '/img/housePicture/house11.jpg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 9 },
        { profileImg: '/img/profile/profile12.jpeg', name: '리처드', houseImg: '/img/housePicture/house12.jpeg', liked: false, likeCount: 0, bookmarked: false, bookmarkCount: 0, commentCount: 3 }
      ]
    });

    const toggleLike = (index) => {
      const item = state.items[index];
      item.liked = !item.liked;
      item.likeCount += item.liked ? 1 : -1;
    };

    const toggleBookmark = (index) => {
      const item = state.items[index];
      item.bookmarked = !item.bookmarked;
      item.bookmarkCount += item.bookmarked ? 1 : -1;
    };

    return {
      items: state.items,
      toggleLike,
      toggleBookmark
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
.card-container {
  width: 100%;
  padding: 0 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
}

.card {
  width: 300px;
  height: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: none;
}

.profile-section {
  display: flex;
  align-items: center;
  height: 50px;
}

.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.nickname {
  font-family: "Gowun Dodum", sans-serif;
  font-size: 16px;
}

.house-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  margin-top: 10px;
}

.house-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.action-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  margin-top: 10px;
}

.action-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
}

.action-icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.action-button span {
  font-size: 14px;
  color: #333;
}
</style>
