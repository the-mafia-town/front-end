<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "Town Of Modanisa",
    },
  },
});
</script>

<template>
  <div id="navbar">
    <p id="navbar__text">{{ text }}</p> 
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
@import "../assets/base.scss";

#navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.2rem;
  padding: 0;
  background-color: $primary;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  width: 70%;
  position: fixed;
  top: 0;
  left: 15%;
  border-radius: 0px 0px 60px 60px;
  transition: all 0.2s ease-in-out  ;

  &:hover {
    height: 3.4rem;
  }

  &__text {
    font-size: 1.8rem;
    letter-spacing: 2px;
    color: #fff;
    font-family: 'Orelega One', cursive;
    user-select: none;
  }
}

</style>