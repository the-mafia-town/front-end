<template>
  <div class="home-page">
    <TheNavbar :text="`Welcome ${username}!`" />
    <button class="menu-button" @click="createGame">Host A Game</button>
    <button class="menu-button" @click="onJoinGameClicked">Join a game</button>
  </div>
</template>

<script>
import { VueElement } from "vue";
import { MessageType } from "../constants/events";
import TheNavbar from "../components/TheNavbar.vue";
import { mapState } from "pinia";
import { userStore } from "../store/UserStore";


export default {
  name: "HomePage",
  data() {
    return {
      socket: VueElement.prototype.$socket
    }
  },
  components: {
    TheNavbar
  },
  computed: {
    ...mapState(userStore, ["username"])
  },
  methods: {
    async createGame() {
      console.log("Socket taken:", this.socket.id)
      this.socket.emit(MessageType.CREATE_GAME, {"username": this.username, "socketId": this.socket.id});
      await this.$router.push({
        name: "Lobby",
        params: {"username": this.username, "isCreator": true, "socketId": this.socket.id}
      })
    },
    async onJoinGameClicked() {
      this.socket.emit(MessageType.JOIN, {"username": this.username, "socketId": this.socket.id})
      await this.$router.push({name: "Lobby", params: {username: this.username, "isCreator": false}})
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/base.scss";

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

p {
  padding: 20px;
  text-align: center;
  font-size: 40px;
}

</style>