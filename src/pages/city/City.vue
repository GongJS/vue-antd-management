<template>
  <div>
    <city-form></city-form>
    <a-card style="marginTop:10">
      <a-button type="primary" @click="handleOpenCity">开通城市</a-button>
    </a-card>
    <city-table></city-table>
    <city-open-form :visible="isShowOpenCity" v-on:hideOpenCity="hideOpenCity"></city-open-form>
    <a-base-form :formList="formList" v-on:hideOpenCity="hideOpenCity"></a-base-form>
  </div>
</template>

<script>
import {Card, Button, Modal} from 'ant-design-vue'
import CityForm from './CityForm'
import CityTable from './CityTable'
import CityOpenForm from './cityOpenForm'
import BaseForm from './../../components/BaseForm/BaseForm'
const formList = [
  {
    type: 'SELECT',
    label: '城市',
    field: 'city',
    placeholder: '全部',
    initialValue: '1',
    width: 80,
    list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
  }
]
export default {
  name: 'City',
  components: {
    CityTable,
    CityForm,
    CityOpenForm,
    'a-button': Button,
    'a-card': Card,
    'a-modal': Modal,
    'a-base-form': BaseForm
  },
  data () {
    return {
      isShowOpenCity: false,
      formList: formList
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
