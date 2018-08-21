<script>
import { Form, Button, Select, Modal, Input, Radio, DatePicker, message } from 'ant-design-vue'
import axios from '@/axios/'
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const TextArea = Input.TextArea
const CollectionCreateForm = Form.create()(
  {
    components: {
      'a-form': Form,
      'a-form-item': FormItem,
      'a-button': Button,
      'a-select': Select,
      'a-option': Option,
      'a-input': Input,
      'a-modal': Modal,
      'a-radio': Radio,
      'a-radio-group': RadioGroup,
      'a-date-picker': DatePicker,
      'a-text-area': TextArea
    },

    props: ['visible', 'selectData', 'title', 'userInfo'],
    render () {
      const { visible, form, title } = this
      const { getFieldDecorator } = form
      const userInfo = this.userInfo || {state: '咸鱼一条', sex: '男', birthday: '2000-01-01', address: ''}
      const formItemLayout = {
        labelCol: {
          xs: { span: 8 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 16 },
          sm: { span: 20 }
        }
      }
      const rowObject = {
        minRows: 4, maxRows: 6
      }
      return (
        <a-modal
          visible={visible}
          title={title}
          okText='Create'
          onCancel={() => { this.$emit('cancel') }}
          onOk={() => { this.$emit('create') }}
        >
          <a-form layout='vertical'>
            <a-form-item
              {...{ props: formItemLayout }}
              label='用户名:'
            >
              {title === '用户详情' ? userInfo.username
                : getFieldDecorator('username', {
                  initialValue: userInfo.username,
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
              label='性别：'
            >
              {
                title === '用户详情' ? <p> {userInfo.sex}</p>
                  : getFieldDecorator('sex', {
                    initialValue: userInfo.sex
                  })(
                    <a-radio-group>
                      <a-radio value="男">男</a-radio>
                      <a-radio value="女">女</a-radio>
                    </a-radio-group>
                  )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='状态'
            >
              { title === '用户详情' ? userInfo.state
                : getFieldDecorator('state', {
                  initialValue: userInfo.state
                })(
                  <a-select>
                    <a-option value="咸鱼一条">咸鱼一条</a-option>
                    <a-option value="风华浪子">风华浪子</a-option>
                    <a-option value="北大才子一枚">北大才子一枚</a-option>
                    <a-option value="百度FE">百度FE</a-option>
                    <a-option value="创业者">创业者</a-option>
                  </a-select>
                )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='生日：'
            >
              { title === '用户详情' ? userInfo.birthday
                : getFieldDecorator('birthday', {
                  initialValue: moment(userInfo.birthday)
                })(
                  <a-date-picker
                    showTime
                    format="YYYY-MM-DD"
                  />
                )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='联系地址'
            >
              {title === '用户详情' ? userInfo.address
                : getFieldDecorator('address', {
                  initialValue: userInfo.address
                })(
                  <a-text-area autosize={rowObject}/>
                )}
            </a-form-item>
          </a-form>
        </a-modal>
      )
    }
  }
)

export default {
  name: 'userForm',
  props: ['visible', 'userInfo', 'title'],
  methods: {
    handleCancel  () {
      const form = this.formRef.form
      this.$emit('hideForm', 'noUpdate')
      form.resetFields()
    },
    handleCreate  () {
      const form = this.formRef.form
      let self = this.$http
      let _this = this
      form.validateFields(async (err, values) => {
        if (err) {
          return
        }
        console.log(555, _this.userInfo.id)
        let params = {
          username: values.username,
          sex: values.sex,
          state: values.state,
          birthday: values.birthday,
          address: values.address,
          id: _this.title === '创建员工' ? null : _this.userInfo.id
        }
        let options = {
          url: _this.title === '创建员工' ? '/api/createPersonnelTable' : '/api/updatePersonnelTable',
          method: 'post'
        }
        const result = await axios.getData(self, options, params)
        if (result.id || result.length) {
          message.success('提交成功')
          form.resetFields()
          _this.$emit('hideForm', 'update')
        }
      })
    },
    saveFormRef  (formRef) {
      this.formRef = formRef
    }
  },

  render () {
    return (
      <div>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.visible}
          userInfo={this.userInfo}
          title={this.title}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
</script>
