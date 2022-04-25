<template>
  <TheNavbar :text="`${username }'s Lobby`" />
  <div class="lobby">
    <div class="lobby__chat">
      <div class="lobby__chat-players">
        <h1 class="lobby__chat-players-header">Players</h1>
        <div class="lobby__chat-players-list">
          <div
            class="lobby__chat-players-list-item" 
            v-for="(player, index) in players"
            :key="player+index" 
          > 
          {{ player }}
          </div>
        </div>
      </div>
      <div class="lobby__chat__container">
        <h1 class="lobby__chat__container-header">Chat</h1>
        <div class="lobby__chat__container__body">
          <div class="message">
            <p v-for="message in chats"> 
            <span class="message-sender"> {{ message.sender }}: </span>
             <span class="message-body"> {{ message.message }} </span>
            </p>
          </div>
          <input
            class="lobby__chat__container__body-input" 
            v-model="chatInput" 
            placeholder="Enter a message..."
            @keyup.enter="sendMessage"
          />
        </div>
      </div>
    </div>
    <button 
      class="menu-button" 
      @click="startGameHandler">
      START GAME
    </button>
  </div>
</template>

<script>
import { VueElement } from "vue";
import { MessageType } from "../constants/events";
import TheNavbar from "../components/TheNavbar.vue";
import { mapState } from "pinia";
import { userStore } from "../store/UserStore";

export default {
  name: "LobbyPage",
  data() {
    return {
      socket: VueElement.prototype.$socket,
      gameInfo: null,
      chatInput: "",
      isCreator: this.$route.params.isCreator,
      chats: [],
      players: ["Safa", "Fatih"],
    }
  },
  components: {
    TheNavbar
  },
  computed: {
    ...mapState(userStore, ["username"])
  },
  methods: {
    startGameHandler() {
      this.socket.emit(MessageType.START_GAME)
      this.$router.push({name: "Game", params: {"gameInfo": this.gameInfo}})
    },
    sendMessage() {
      if (this.chatInput !== "") {
        this.socket.emit(MessageType.USER_SENT_MESSAGE, {"sender": this.username, "message": this.chatInput})
        this.chatInput = ""
      }
    }
  },
  mounted() {
    console.log("Is creator: ", this.isCreator)
    let ctx = this
    this.socket.on(MessageType.GAME_INFO, function (data) {
      console.log("Socket on game info called with data: ", data)
      ctx.$data.gameInfo = data
    })

    this.socket.on(MessageType.USER_MESSAGE_RECEIVED, args => {
      console.log(`Message: ${args["message"]} sent by ${args["sender"]}`)
      this.chats.push({"sender": args["sender"], "message": args["message"]})
    })

    this.socket.on(MessageType.USER_JOIN, message => {
      this.chats.push({"sender": "System", "message": message})
    })
  }
}

</script>

<style scoped lang="scss">
@import "../assets/base.scss";


.lobby {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__chat {
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 70vh;
    background-color: $background-light;
    border-radius: 30px;
  
  &__container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: $background-light;


      &-header {
        background-color: $accent;
        font-size: 1.5rem;
        font-family: $western-font; 
        padding: 15px;
        text-align: center;
        text-align: center;
        margin: 0;
        color: white;
        border-radius: 0px 30px 0 0;
      }
      &__body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .message {
          color: white;
          padding: 5px;
          &-sender {
            font-size: 1rem;
            font-weight: bold;
          }
          &-body {
            font-size: 1rem;  
          }
        }
  
        &-input {
          align-self: flex-end;
          justify-self: flex-end;
          width: 95.5%;
          padding: 10px;
          font-size: 1.2rem;
          border-radius: 0px 0px 30px 0px;
          border: none;
          outline: none;
          background: $accent;
          color: white;
          margin-top: auto;
          &::placeholder {
            color: rgba(255, 255, 255, 0.486);
          }
        }

      }  
  }

  &-players {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 70vh;
      background-color: $primary;
      border-radius: 30px 30px 0px 30px;

      &-header {
        background-color: $primary-darker;
        font-size: 1.5rem;
        font-family: $western-font; 
        padding: 15px;
        text-align: center;
        width: 100%;
        text-align: center;
        margin: 0;
        color: white;
        border-radius: 30px 0px 0 0;
      }

      &-list {
        background-color: $primary;
        text-align: center;
        padding: 5px;

        &-item {
          font-size: 1.4rem;
          text-align: center; 
          text-align: center;
          background-color: $background;
          color: white;
          font-weight: bold;
          margin: 5px;
          padding: 5px;
        }
      }
    }
  }
}


.message-box-input {
  width: 100%;
  height: 50px;
  border: none;
  background-color: black;
  color: #f2f2f2;
  font-size: 25px;
  padding: 10px;
  border-radius: 15px;
}

</style>