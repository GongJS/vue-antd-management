<script>
import { Form, Button, Select, Modal } from 'ant-design-vue'
import axios from '@/axios/'
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
              {getFieldDecorator('name', {
                initialValue: '北京'
              })(
                <a-select>
                  <a-option value="北京">北京</a-option>
                  <a-option value="天津">天津</a-option>
                  <a-option value="深圳">深圳</a-option>
                </a-select>
              )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='运营模式'
            >
              {getFieldDecorator('op_mode', {
                initialValue: '加盟'
              })(
                <a-select>
                  <a-option value="加盟">加盟</a-option>
                  <a-option value="自营">自营</a-option>
                </a-select>
              )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='用车模式'
            >
              {getFieldDecorator('mode', {
                initialValue: '停车点'
              })(
                <a-select>
                  <a-option value="停车点">停车点</a-option>
                  <a-option value="禁停区">禁停区</a-option>
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
      let self = this.$http
      form.validateFields(async (err, values) => {
        if (err) {
          return
        }
        let options = {
          url: '/api/createCityTable',
          method: 'post'
        }
        let params = {
          name: values.name,
          mode: values.mode,
          op_mode: values.op_mode
        }
        const result = await axios.getData(self, options, params)
        form.resetFields()
        this.$emit('hideOpenCity', 'update')
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
<style>
  .ant-form-item-label label {
    color: rgba(0, 0, 0, 0.85);
    float: right;
    line-height: 32px;
    margin-right: 10px;
  }
</style>
