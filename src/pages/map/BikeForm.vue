<script>
import { Form, Button, Card, Select, DatePicker } from 'ant-design-vue'
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
const NormalLoginForm = {
  order: 'orderForm',
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-button': Button,
    'a-card': Card,
    'a-select': Select,
    'a-option': Option,
    'a-range-picker': RangePicker
  },
  data () {
    return {
    }
  },

  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
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

          <a-form-item label='订单时间：'>
            {getFieldDecorator('mode', {
            })(
              <a-range-picker></a-range-picker>
            )}
          </a-form-item>
          <a-form-item label='订单状态：'>
            {getFieldDecorator('op_mode', {
              initialValue: '1'
            })(
              <a-select style="width:100px;">
                <a-option value="1">全部</a-option>
                <a-option value="2">进行中</a-option>
                <a-option value="3">结束行程</a-option>
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
