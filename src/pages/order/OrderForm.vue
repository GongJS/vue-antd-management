<script>
import { Form, Input, Button, Card, Select, DatePicker } from 'ant-design-vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
const NormalLoginForm = {
  name: 'orderForm',
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-input': Input,
    'a-button': Button,
    'a-card': Card,
    'a-select': Select,
    'a-option': Option,
    'a-range-picker': RangePicker
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // 如果用户没有选择时间段，就给一个大范围的时间段搜索范围
          if (!values.order_time) {
            values.order_time = []
            values.order_time[0] = moment(new Date(1900, 0, 1, 0, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
            values.order_time[1] = moment(new Date(2100, 0, 1, 0, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
          }
          this.$emit('searchCityData', values)
        }
      })
    },
    handleReset () {
      this.form.resetFields()
    }
  },

  render () {
    const { getFieldDecorator } = this.form
    return (
      <a-card class="card-wrap">
        <a-form id='components-form-demo-normal-register' layout="inline" onSubmit={this.handleSubmit}>
          <a-form-item label='城市' >
            {getFieldDecorator('city', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="北京">北京</a-option>
                <a-option value="天津">天津</a-option>
                <a-option value="深圳">深圳</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item label='订单时间：'>
            {getFieldDecorator('order_time', {
            })(
              <a-range-picker></a-range-picker>
            )}
          </a-form-item>
          <a-form-item label='订单状态：'>
            {getFieldDecorator('status', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="进行中">进行中</a-option>
                <a-option value="结束行程">结束行程</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item>
            <a-button type='primary' htmlType='submit' style="margin:0 20px">查询</a-button>
            <a-button onClick={this.handleReset} >重置</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    )
  }
}

export default Form.create()(NormalLoginForm)
</script>
<style>
  .card-wrap {
    margin-bottom: 10px;
  }

</style>
