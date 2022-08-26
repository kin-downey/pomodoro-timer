<template>
  <div>
    <Timer/>
    <ColorPicker/>
  </div>
</template>

<script>
import Timer from '~/components/Timer.vue';
import ColorPicker from '~/components/ColorPicker'
export default {
  name: 'IndexPage',
  components:{
    Timer,
    ColorPicker,
  }
}
</script>