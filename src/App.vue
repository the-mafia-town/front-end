<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
});
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "assets/base.scss";

body {
  width: 1080px;
  margin: 0 auto;
  background-color: $background;
}

.enterButton {
  display: block;
  margin: 0 auto;
  padding: 15px;
}
</style>
