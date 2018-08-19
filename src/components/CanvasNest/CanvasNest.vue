<template>
    <div class="vue-canvas-nest-element" style="height: 100%; width: 100%; position: absolute; z-index: 1;">
    </div>
</template>
<script>
import CanvasNest from 'canvas-nest.js'
export default {
  name: 'canvasNest',
  props: {
    config: {
      type: Object,
      default () {
        return {
          color: '255,0,0',
          count: 99
        }
      }
    }
  },
  data () {
    return {
      cn: ''
    }
  },
  mounted () {
    const el = document.querySelector('.vue-canvas-nest-element')
    this.cn = new CanvasNest(el, this.config)
  },
  beforeDestroy () {
    this.cn.destroy()
  }
}
</script>
<style>
</style>
