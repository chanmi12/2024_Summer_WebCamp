<template>
  <div class="top">
    <div class="home">
      <h1 class="title" @click="goToMain">내일의 집</h1>
    </div>
    <div class="myPage">
      <button class="myPage" @click="goToMyPage">
        <img src="/img/myPage.png" alt="myPage icon" class="pageIcon"/>
      </button>
    </div>
    <div class="writeButtonContainer">
      <button class="writeButton" @click="toggleMenu">
        <span class="buttonText">글쓰기</span>
      </button>
      <div v-if="showMenu" class="menu">
        <button @click="writePost('집사진')">
          <img src="/img/picture.png" alt="picture icon" class="icon" /> 집사진 글쓰기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    goToMain() {
      this.$router.push('/');
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    writePost(type) {
      console.log("Writing post of type:", type);
    },
    goToMyPage() {
      this.$router.push('/myPage');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');

.top {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 250px;
}

.home {
  width: 300px;
}

.title {
  font-family: 'Gamja Flower', cursive;
  cursor: pointer;
}

.myPage {
  position: relative;
  margin-left: 52%;
}

.myPage button {
  background: none;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 0;
  overflow: hidden;
}

.myPage button:hover {
  border: 2px solid #00CCFF;
}

.pageIcon {
  width: 40px;
  height: 40px;
  display: block;
}

.writeButtonContainer {
  position: relative;
}

.writeButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  max-width: 160px;
  height: 48px;
  padding: 12px;
  border-radius: 8px;
  background: #00CCFF;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.menu {
  position: absolute;
  top: 60px;
  right: 0;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.menu button {
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;
}

.menu button:hover {
  background-color: #ddd;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.buttonText {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
