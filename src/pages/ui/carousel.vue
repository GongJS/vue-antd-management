<template>
  <div>
    <a-card title="文字背景轮播" className="card-wrap">
      <a-carousel effect="fade">
        <div><h3>Ant Motion Banner - React</h3></div>
        <div><h3>Ant Motion Banner - Vue</h3></div>
        <div><h3>Ant Motion Banner - Angular</h3></div>
      </a-carousel>
    </a-card>
    <a-card title="图片轮播" class="slider-wrap">
      <a-carousel autoplay effect="fade">
        <div>
          <img src="../../../static/carousel-img/carousel-1.jpg" alt=""/>
        </div>
        <div>
          <img src="../../../static/carousel-img/carousel-2.jpg" alt="" />
        </div>
        <div>
          <img src="../../../static/carousel-img/carousel-3.jpg" alt="" />
        </div>
      </a-carousel>
    </a-card>
  </div>
</template>
<script>
import {Carousel, Card} from 'ant-design-vue'
export default {
  name: 'Carousel',
  components: {
    'a-card': Card,
    'a-carousel': Carousel
  }
}
</script>

<style scoped>
  @import './ui.less';
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  .slider-wrap .ant-carousel >>> .slick-slide{
    height: 240px!important;
    width: 100%;
  }
  .ant-carousel .slick-slide img {
    width: 100%;
  }
</style>
