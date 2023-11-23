import { createRouter, createWebHistory } from 'vue-router'
import GetUserView from "../views/GetUser.vue"
import AddUserView from "../views/AddUser.vue"
import ManageView from "../views/Management.vue"

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect:"/AddUser"
        },
        {
            path: "/AddUser",
            name: "AddUser",
            component: AddUserView,
        },
        {
            path: "/GetUser",
            name: "GetUser",
            component:GetUserView,
        },
        {
            path: "/Management",
            name: "Management",
            component:ManageView, 
        }
    ], // `routes: routes` 的缩写
});

export default router