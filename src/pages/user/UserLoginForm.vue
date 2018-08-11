<script>
import { Form, Input, Icon, Button, Checkbox, Card, message } from 'ant-design-vue'
const FormItem = Form.Item
const NormalLoginForm = {
  name: 'UserLogin',
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-input': Input,
    'a-icon': Icon,
    'a-button': Button,
    'a-checkbox': Checkbox,
    'a-card': Card
  },

  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          message.success(`${values.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${values.password}`)
        }
      })
    }
  },

  render () {
    const { getFieldDecorator } = this.form
    return (
      <a-card>
        <a-form id='components-form-demo-normal-login' onSubmit={this.handleSubmit} style="width: 600px" layout="inline">
          <a-form-item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }]
            })(
              <a-input prefix={<a-icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名' />
            )}
          </a-form-item>
          <a-form-item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <a-input prefix={<a-icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='请输入密码' />
            )}
          </a-form-item>
          <a-form-item>
            <a-button type='primary' htmlType='submit' class='login-form-button'>登录</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    )
  }
}

export default Form.create()(NormalLoginForm)
</script>
<style>

</style>
