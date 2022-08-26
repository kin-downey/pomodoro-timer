<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#616161" dark v-bind="attrs" v-on="on" class="mt-8">
          タイマーの色を変更
        </v-btn>
      </template>

      <v-card>
        <v-card-title>タイマーの色を変更</v-card-title>
        <v-card-subtitle>下から色を選択してください</v-card-subtitle>
        <v-row class="justify-center mt-4">
          <v-btn class="white--text font-weight-bold" :color="color" @click="set_timer_color">色を決定</v-btn>
        </v-row>
        <v-row justify="space-around" class="my-4">
          <v-color-picker
            class="ma-2"
            show-swatches
            swatches-max-height="300px"
            v-model="color"
            input="set_color"
          ></v-color-picker>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: "",
    dialog: false,
    swatches: [
      ["#FF0000", "#AA0000", "#550000"],
      ["#FFFF00", "#AAAA00", "#555500"],
      ["#00FF00", "#00AA00", "#005500"],
      ["#00FFFF", "#00AAAA", "#005555"],
      ["#0000FF", "#0000AA", "#000055"],
    ],
  }),
  methods: {
    set_timer_color() {
      this.$store.dispatch("set_timer_color", this.color);
      this.dialog = false;
    },
  },
};
</script>
