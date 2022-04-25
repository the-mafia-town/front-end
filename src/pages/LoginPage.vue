<template>
  <div id="login-page">
    <TheNavbar />
    <input 
      id="username" 
      v-model="username" 
      class="username-input" 
      placeholder="Enter your username..."
      @keyup.enter="login"
    />
    <button class="menu-button" @click="login">Enter</button>
  </div>
</template>

<script lang="ts">
import { userStore } from "../store/UserStore";
import { mapStores } from 'pinia';
import { defineComponent } from "@vue/runtime-core";
import TheNavbar from "../components/TheNavbar.vue";


export default defineComponent({
  name: "LoginPage",
  data: () => ({
      username: "" as string,
  }),
  computed: {
    ...mapStores(userStore)
  },
  components: {
    TheNavbar
  },
  methods: {
    login() {
      this.userStore.setUsername(this.username.trim());
      this.$router.push({name: 'Home'});
    }
  },
  mounted() {
    console.log("LoginPage mounted method called")
  }  
}); 
</script>

<style scoped lang="scss">
@import "../assets/base.scss";

#login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.username-input {
  border-radius: 30px;
  border: none;
  width: 30%;
  transition: all 0.3s ease-in-out;
  font-size: 1.3rem;
  letter-spacing: 1.5px;
  text-align: center;
  margin: 100px auto 20px;
  padding: 15px;
  font-family: 'Orelega One', cursive;

  &:focus {
    width: 45%;
    caret-color: $background;
    outline: none;
  }
}

</style>