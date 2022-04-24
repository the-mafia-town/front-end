<template>
  <div class="container">
    <div class="time-container">
      <h2>Discussion will be end in <br><span class="time-counter">{{ time }}</span></h2>
    </div>
    <div v-for="playerData in playersData" class="player-container">
      <h3>{{ playerData.username }}</h3>
      <div class="line"></div>
      <div class="avatar">Avatar</div>
      <div class="line"></div>
      <h2 class="role">{{ playerData.role }}</h2>
    </div>

  </div>
</template>

<script>
import {VueElement} from "vue";
import {MessageType} from "./types";

export default {
  name: "GamePage",
  data() {
    return {
      socket: VueElement.prototype.$socket,
      //username: this.$route.params.username,
      username: "SAFA",
      playersData: [],
      time: 0
    }
  },
  mounted() {
    console.log("GamePage mounted method called")
    console.log("Username:", this.username)
    this.socket.on(MessageType.GAME_INFO, data => {
      this.playersData = data.matchedRoles
      console.log("Game info: ", data)
    })
    this.socket.on(MessageType.DISCUSSION_TIMER_INFO, timeInfo => {
      this.time = timeInfo
    })
  },
}
</script>

<style scoped>
.container {
  width: 1080px;
  height: 1080px;
  background-color: #2c3e50;
}

.time-container{
  padding: 20px;
  font-size: 20px;
  text-align: center;
}

.time-counter{
  font-size: 35px;
}
.player-container {
  width: 150px;
  height: 150px;
  background-color: white;
  margin: 25px;
  float: left;
}

h3 {
  text-align: center;
  color: black;
  font-weight: bold;
}

.line {
  width: inherit;
  height: 3px;
  background-color: black;
}

.avatar {
  width: inherit;
  height: 50%;
  text-align: center;
  color: black;
}

.role {
  text-align: center;
  color: black;
  font-weight: bold;
}
</style>