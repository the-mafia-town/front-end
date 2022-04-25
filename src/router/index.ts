import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import LobbyPage from '../pages/LobbyPage.vue'
import GamePage from '../pages/GamePage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Login', component: LoginPage },
        { path: '/home', name: 'Home', component: HomePage },
        { path: '/lobby', name: 'Lobby', component: LobbyPage },
        { path: '/game', name: 'Game', component: GamePage },
    ]
})
router.beforeEach((from, to) => {

})

export default router
