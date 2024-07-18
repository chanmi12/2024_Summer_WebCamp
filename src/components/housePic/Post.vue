<template>
  <div class="post-container">
    <div v-for="(item, index) in items" :key="index" class="post">
      <div class="top-section">
        <img :src="item.postImg" alt="post img" class="postImg"/>
        <img :src="item.bookmarked ? '/img/colorBookmark.png' : '/img/bookmark.png'"
             @click="toggleBookmark(index)"
             alt="bookmark"
             class="bookmarkButton"/>
      </div>
      <div class="bottom-section">
        <div class="postTitle">
          <p class="title">{{item.title}}</p>
        </div>
        <div class="profile">
          <img :src="item.profileImg" alt="profile img" class="profileImage"/>
          <p class="name">{{item.name}}</p>
        </div>
        <div class="bookmark">
          <p class="bookmarkNum">스크랩 {{item.bookmarkCount}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { reactive } from "vue";

export default {
  name: 'Post',
  setup() {
    const state = reactive({
      items: [
        { postImg: '/img/housewarmPic/housewarming1.jpeg', title: '따스한 햇빛이 들어오는 방', profileImg: 'img/profile/profile1.jpeg', name: '내일의 집', bookmarked: false, bookmarkCount: 39 },
        { postImg: '/img/housewarmPic/housewarming2.jpeg', title: '감성적인 인테리어의 방', profileImg: 'img/profile/profile2.jpeg', name: '수니', bookmarked: false, bookmarkCount: 52 },
        { postImg: '/img/housewarmPic/housewarming3.jpeg', title: '바쁜 삶 속에서 편안한 휴식을 취하게 하는 인테리어', profileImg: 'img/profile/profile3.jpeg', name: '내일의하우스', bookmarked: false, bookmarkCount: 27 },
        { postImg: '/img/housewarmPic/housewarming4.jpeg', title: '제주도의 따스한 햇빛이 들어오는 통창 거실', profileImg: 'img/profile/profile4.jpeg', name: '내일도제주', bookmarked: false, bookmarkCount: 29 },
        { postImg: '/img/housewarmPic/housewarming5.jpeg', title: '강아지도 편안하게 쉴 수 있는 집 꾸미기!', profileImg: 'img/profile/profile5.jpeg', name: '내일디자인', bookmarked: false, bookmarkCount: 57 },
        { postImg: '/img/housewarmPic/housewarming6.jpeg', title: '가성비와 가심비를 모두 잡은 아늑한 보금자리', profileImg: 'img/profile/profile6.jpeg', name: 'tomorrow', bookmarked: false, bookmarkCount: 163 },
        { postImg: '/img/housewarmPic/housewarming7.jpeg', title: '따뜻하고 편안한 빈티지 가구들로 채운 공간', profileImg: 'img/profile/profile7.jpeg', name: '찬미', bookmarked: false, bookmarkCount: 164 },
        { postImg: '/img/housewarmPic/housewarming8.jpeg', title: '올드했던 공간을 싹 뒤집어, 넓고 쾌적하게 만들었어요!', profileImg: 'img/profile/profile8.jpeg', name: '호두과자', bookmarked: false, bookmarkCount: 37 },
        { postImg: '/img/housewarmPic/housewarming9.jpeg', title: '모노톤으로 집꾸미기!', profileImg: 'img/profile/profile9.jpeg', name: '보리하우스', bookmarked: false, bookmarkCount: 30 },
      ]
    });

    const toggleBookmark = (index) => {
      const item = state.items[index];
      item.bookmarked = !item.bookmarked;
      item.bookmarkCount += item.bookmarked ? 1 : -1;
    };

    return {
      items: state.items,
      toggleBookmark
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nanum+Gothic&display=swap');

.post-container {
  width: 100%;
  padding: 0 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  margin-top: 3%;
}

.post {
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: none;
}

.top-section {
  position: relative;
  width: 350px;
  height: 250px;
}

.bottom-section {
  width: 350px;
  height: 150px;
}

.postImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.bookmarkButton {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.postTitle {
  width: 100%;
  height: 30px;
}

.title {
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  text-align: center;
}

.profile {
  width: 350px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profileImage {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.name {
  font-size: 14px;
  font-weight: 450;
  margin-left: 3%;
}

.bookmark {
  width: 350px;
  height: 50px;
}

.bookmarkNum {
  font-size: 13px;
  color: #999999;
  text-align: center;
}
</style>
