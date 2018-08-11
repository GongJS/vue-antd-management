<script>
import { Form, Button, Select, Modal } from 'ant-design-vue'
const FormItem = Form.Item
const Option = Select.Option

const CollectionCreateForm = Form.create()(
  {
    components: {
      'a-form': Form,
      'a-form-item': FormItem,
      'a-button': Button,
      'a-select': Select,
      'a-option': Option,
      'a-modal': Modal
    },
    props: ['visible'],
    render () {
      const { visible, form } = this
      const { getFieldDecorator } = form
      const formItemLayout = {
        labelCol: {
          xs: { span: 8 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 8 },
          sm: { span: 8 }
        }
      }
      return (
        <a-modal
          visible={visible}
          title='开通城市'
          okText='Create'
          onCancel={() => { this.$emit('cancel') }}
          onOk={() => { this.$emit('create') }}
        >
          <a-form layout='vertical'>
            <a-form-item
              {...{ props: formItemLayout }}
              label='选择城市'
            >
              {getFieldDecorator('city', {
                initialValue: '2'
              })(
                <a-select>
                  <a-option value="1">北京</a-option>
                  <a-option value="2">天津</a-option>
                  <a-option value="3">深圳</a-option>
                </a-select>
              )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='运营模式'
            >
              {getFieldDecorator('op_mode', {
                initialValue: '2'
              })(
                <a-select>
                  <a-option value="1">加盟</a-option>
                  <a-option value="2">自营</a-option>
                </a-select>
              )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='用车模式'
            >
              {getFieldDecorator('mode', {
                initialValue: '2'
              })(
                <a-select>
                  <a-option value="1">指定停车点</a-option>
                  <a-option value="2">禁停区</a-option>
                </a-select>
              )}
            </a-form-item>
          </a-form>
        </a-modal>
      )
    }
  }
)

export default {
  name: 'CityOpenForm',
  props: ['visible'],
  methods: {
    handleCancel  () {
      this.$emit('hideOpenCity')
    },
    handleCreate  () {
      const form = this.formRef.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        form.resetFields()
        this.$emit('hideOpenCity')
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
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
</script>
