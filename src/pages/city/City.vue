<template>
  <div>
    <city-form v-on:searchCityData="searchCityData"></city-form>
    <a-card style="margin-top:10px;">
      <a-button type="primary" @click="handleOpenCity">开通城市</a-button>
    </a-card>
    <city-table :searchParams="searchParams"></city-table>
    <city-open-form :visible="isShowOpenCity" v-on:hideOpenCity="hideOpenCity"></city-open-form>
  </div>
</template>

<script>
import {Card, Button} from 'ant-design-vue'
import CityForm from './CityForm'
import CityTable from './CityTable'
import CityOpenForm from './CityOpenForm'
import { mapState } from 'vuex'
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
    'a-card': Card
  },
  data () {
    return {
      isShowOpenCity: false,
      formList: formList,
      searchParams: {}
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin
    })
  },
  methods: {
    handleOpenCity () {
      this.isShowOpenCity = true
    },
    hideOpenCity () {
      this.isShowOpenCity = false
    },
    searchCityData (data) {
      this.searchParams = data
    }
  }
}

</script>
<style>
  .card-wrap {
    margin-bottom: 10px;
  }

</style>
