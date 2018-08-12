<template>
  <div class="card-wrap">
    <a-row :gutter="10">
      <a-col :span="5">
        <a-card
          v-for="(item, index) in imgs[0]"
          style="margin-bottom:10px"
          :key="index"
          >
             <img :src="'../../../static/gallery/' + item" alt="" slot="cover" @click="openGallery(item)"/>
             <a-card-meta
               title="Vue Admin"
               description="I Love Vue"
             />
        </a-card>
      </a-col>
      <a-col :span="5">
        <a-card
          v-for="(item, index) in imgs[1]"
          style="margin-bottom:10px"
          :key="index"
        >
          <img :src="'../../../static/gallery/' + item" alt="" slot="cover" @click="openGallery(item)"/>
          <a-card-meta
            title="Vue Admin"
            description="I Love Vue"
          />
        </a-card>
      </a-col>
      <a-col :span="5">
        <a-card
          v-for="(item, index) in imgs[2]"
          style="margin-bottom:10px"
          :key="index"
        >
          <img :src="'../../../static/gallery/' + item" alt="" slot="cover" @click="openGallery(item)"/>
          <a-card-meta
            title="Vue Admin"
            description="I Love Vue"
          />
        </a-card>
      </a-col>
      <a-col :span="5">
        <a-card
          v-for="(item, index) in imgs[3]"
          style="margin-bottom:10px"
          :key="index"
        >
          <img :src="'../../../static/gallery/' + item" alt="" slot="cover" @click="openGallery(item)"/>
          <a-card-meta
            title="Vue Admin"
            description="I Love Vue"
          />
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card
          v-for="(item, index) in imgs[4]"
          style="margin-bottom:10px"
          :key="index"
        >
          <img :src="'../../../static/gallery/' + item" alt="" slot="cover" @click="openGallery(item)"/>
          <a-card-meta
            title="Vue Admin"
            description="I Love Vue"
          />
        </a-card>
      </a-col>
    </a-row>
    <a-modal
      :width=300
      :height=500
      :visible="visible"
      title="图片画廊"
      @cancel = "hideModal"
      :footer="null"
      >
      <img :src="currentImg" alt="" style="width:100%"/>
    </a-modal>
  </div>
</template>
<script>
import {Modal, Card, Row, Col} from 'ant-design-vue'

export default {
  name: 'Gallery',
  components: {
    'a-card-meta': Card.Meta,
    'a-card': Card,
    'a-modal': Modal,
    'a-row': Row,
    'a-col': Col
  },
  data () {
    return {
      visible: false,
      imgs: [
        ['1.png', '2.png', '3.png', '4.png', '5.png'],
        ['6.png', '7.png', '8.png', '9.png', '10.png'],
        ['11.png', '12.png', '13.png', '14.png', '15.png'],
        ['16.png', '17.png', '18.png', '19.png', '20.png'],
        ['21.png', '22.png', '23.png', '24.png', '25.png']
      ],
      currentImg: '../../../static/gallery/'
    }
  },
  methods: {
    openGallery (item) {
      let imgUrl = '../../../static/gallery/'
      this.visible = !this.visible
      this.currentImg = imgUrl + item
    },
    hideModal () {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped lang="less">
  @import './ui.less';
</style>
