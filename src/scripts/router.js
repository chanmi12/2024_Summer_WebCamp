import Main from "@/pages/Main";
import HousePicture from "@/pages/HousePicture";
import MyPage from "@/pages/MyPage";
import Housewarming from "@/pages/Housewarming";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: Main},
    {path: '/housePicture', component: HousePicture},
    {path: '/myPage', component: MyPage},
    {path: '/housewarming', component: Housewarming}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;