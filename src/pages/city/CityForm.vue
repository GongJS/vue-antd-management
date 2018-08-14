<script>
import { Form, Input, Icon, Button, Card, Select } from 'ant-design-vue'
const FormItem = Form.Item
const Option = Select.Option
const NormalLoginForm = {
  name: 'cityForm',
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-input': Input,
    'a-icon': Icon,
    'a-button': Button,
    'a-card': Card,
    'a-select': Select,
    'a-option': Option
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
              initialValue: '1'
            })(
              <a-select style="width:100px;">
                <a-option value="1">全部</a-option>
                <a-option value="2">北京</a-option>
                <a-option value="3">天津</a-option>
                <a-option value="4">深圳</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item label='用车模式：'>
            {getFieldDecorator('mode', {
              initialValue: '1'
            })(
              <a-select style="width:100px;">
                <a-option value="1">全部</a-option>
                <a-option value="2">指定停车点模式</a-option>
                <a-option value="3">禁停区模式</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item label='营运模式：'>
            {getFieldDecorator('op_mode', {
              initialValue: '1'
            })(
              <a-select style="width:100px;">
                <a-option value="1">全部</a-option>
                <a-option value="2">自营</a-option>
                <a-option value="3">加盟</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item label='加盟商授权状态：'>
            {getFieldDecorator('franchisee_name', {
              initialValue: '1'
            })(
              <a-select style="width:100px;">
                <a-option value="1">全部</a-option>
                <a-option value="2">已授权</a-option>
                <a-option value="3">未授权</a-option>
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
