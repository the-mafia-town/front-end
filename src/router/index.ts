import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import HomePage from '../components/HomePage.vue'
import LobbyPage from '../components/LobbyPage.vue'
import GamePage from '../components/GamePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Login', component: LoginPage },
        { path: '/home', name: 'Home', component: HomePage },
        { path: '/lobby', name: 'Lobby', component: LobbyPage },
        { path: '/game', name: 'Game', component: GamePage },
    ]
})

export default router
