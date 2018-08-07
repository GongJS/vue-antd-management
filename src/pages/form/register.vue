<script>
import { Form, Input, inputNumber, Icon, Button, Checkbox, Card, Radio, Select, Switch, DatePicker, TimePicker, Upload } from 'ant-design-vue'
import moment from 'moment'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea
const NormalLoginForm = {
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-input': Input,
    'a-icon': Icon,
    'a-button': Button,
    'a-checkbox': Checkbox,
    'a-card': Card,
    'a-radio': Radio,
    'a-radio-group': RadioGroup,
    'a-select': Select,
    'a-option': Option,
    'a-switch': Switch,
    'a-date-picker': DatePicker,
    'a-input-number': inputNumber,
    'a-text-area': TextArea,
    'a-time-picker': TimePicker,
    'a-upload': Upload
  },
  data () {
    return {
      imageUrl: ''
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

    handleChange (e) {
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    }
  },

  render () {
    const { getFieldDecorator } = this.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const rowObject = {
      minRows: 4, maxRows: 6
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 8
        }
      }
    }
    return (
      <a-card title="表单-注册" class="card-wrap">
        <a-form id='components-form-demo-normal-register' onSubmit={this.handleSubmit} style="width: 700px;">
          <a-form-item
            {...{ props: formItemLayout }}
            label='用户名'
          >
            {getFieldDecorator('username', {
              rules: [{
                type: 'string', message: '该用户名有效'
              }, {
                required: true, message: '用户名不能为空'
              }]
            })(
              <a-input placeholder="请输入用户名" />
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='密码'
          >
            {getFieldDecorator('password', {
            })(
              <a-input type='password' placeholder="请输入密码"/>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='sex'
          >
            {getFieldDecorator('sex', {
              initialValue: '1'
            })(
              <a-radio-group>
                <a-radio value="1">男</a-radio>
                <a-radio value="2">女</a-radio>
              </a-radio-group>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='年龄'
          >
            {getFieldDecorator('age', {
              initialValue: 18
            })(
              <a-input-number type='number'/>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='当前状态'
          >
            {getFieldDecorator('state', {
              initialValue: '2'
            })(
              <a-select>
                <a-option value="1">咸鱼一条</a-option>
                <a-option value="2">风华浪子</a-option>
                <a-option value="3">北大才子一枚</a-option>
                <a-option value="4">百度FE</a-option>
                <a-option value="5">创业者</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='爱好'
          >
            {getFieldDecorator('interest', {
              initialValue: ['1', '2']
            })(
              <a-select mode="multiple">
                <a-option value="1">游泳</a-option>
                <a-option value="2">打篮球</a-option>
                <a-option value="3">踢足球</a-option>
                <a-option value="4">跑步</a-option>
                <a-option value="5">爬山</a-option>
                <a-option value="6">骑行</a-option>
                <a-option value="7">桌球</a-option>
                <a-option value="8">麦霸</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='是否已婚'
          >
            {getFieldDecorator('isMarried', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <a-switch/>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='生日'
          >
            {getFieldDecorator('birthday', {
              initialValue: moment('2018-08-08')
            })(
              <a-date-picker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='联系地址'
          >
            {getFieldDecorator('address', {
              initialValue: '北京市海淀区奥林匹克公园'
            })(
              <a-text-area autosize={rowObject}/>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='早起时间'
          >
            {getFieldDecorator('time', {
            })(
              <a-time-picker />
            )}
          </a-form-item>
          <a-form-item
            {...{ props: formItemLayout }}
            label='头像'
            extra='上传头像'
          >
            {getFieldDecorator('userimg', {
              valuePropName: 'fileList',
              getValueFromEvent: this.handleChange
            })(
              <a-upload
                name='avatar'
                class="avatar-uploader"
                listType="picture-card"
                action="//jsonplaceholder.typicode.com/posts/"
              >
                {this.imageUrl ? < img src={this.imageUrl} alt="" /> : <a-icon type="plus"/>}
              </a-upload>
            )}
          </a-form-item>
          <a-form-item
            {...{ props: offsetLayout }}
          >
            {getFieldDecorator('remmenber', {
              initialValue: true
            })(
              <a-checkbox>我已阅读过<span style={{color: '#ffdb29'}}>慕课协议</span></a-checkbox>
            )}
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
  #components-form-demo-normal-register .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-register .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-register .login-form-button {
    width: 100%;
  }
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
