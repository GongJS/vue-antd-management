<template>
  <div>
    <city-form></city-form>
    <a-card style="marginTop:10">
      <a-button type="primary" @click="handleOpenCity">开通城市</a-button>
    </a-card>
    <city-table></city-table>
    <city-open-form :visible="isShowOpenCity" v-on:hideOpenCity="hideOpenCity"></city-open-form>
  </div>
</template>

<script>
import {Card, Button, Modal} from 'ant-design-vue'
import CityForm from './CityForm'
import CityTable from './CityTable'
import CityOpenForm from './cityOpenForm'

export default {
  name: 'City',
  components: {
    CityTable,
    CityForm,
    CityOpenForm,
    'a-button': Button,
    'a-card': Card,
    'a-modal': Modal
  },
  data () {
    return {
      isShowOpenCity: false
    }
  },
  methods: {
    handleOpenCity () {
      this.isShowOpenCity = true
    },
    hideOpenCity () {
      this.isShowOpenCity = false
    }
  }
}

</script>
<style>
  .card-wrap {
    margin-bottom: 10px;
  }

</style>
