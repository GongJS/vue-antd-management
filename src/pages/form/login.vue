<script>
import { Form, Input, Icon, Button, Checkbox, Card, message } from 'ant-design-vue'
import axios from '../../axios/index'
const FormItem = Form.Item
const NormalLoginForm = {
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
          axios.login()
        }
      })
    }
  },

  render () {
    const { getFieldDecorator } = this.form
    return (
      <a-card title="表单-登录">
        <a-form id='components-form-demo-normal-login' onSubmit={this.handleSubmit} style="width: 300px">
          <a-form-item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <a-input prefix={<a-icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />
            )}
          </a-form-item>
          <a-form-item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(
              <a-input prefix={<a-icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />
            )}
          </a-form-item>
          <a-form-item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <a-checkbox>记住密码</a-checkbox>
            )}
            <a class='login-form-forgot' href=''>忘记密码？</a>
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
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>
