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
            {getFieldDecorator('name', {
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
          <a-form-item label='用车模式：'>
            {getFieldDecorator('mode', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="停车点">停车点</a-option>
                <a-option value="禁停区">禁停区</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item label='营运模式：'>
            {getFieldDecorator('op_mode', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="自营">自营</a-option>
                <a-option value="加盟">加盟</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item label='加盟商授权状态：'>
            {getFieldDecorator('status', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="已授权">已授权</a-option>
                <a-option value="未授权">未授权</a-option>
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
