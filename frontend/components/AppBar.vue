<template>
  <div>
    <v-app-bar color="#F57C00" dense dark>

      <v-toolbar-title class="font-weight-bold">Pomodoro Timer</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom> </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        'タイマーの色を変更'
      ]
    };
  },
};
</script>
