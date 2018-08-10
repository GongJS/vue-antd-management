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
    props: ['visible', 'orderInfo'],
    render () {
      const { visible, orderInfo } = this
      const formItemLayout = {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 16 }
        }
      }
      return (
        <a-modal
          visible={visible}
          title='结束订单'
          okText='Create'
          onCancel={() => { this.$emit('cancel') }}
          onOk={() => { this.$emit('create') }}
        >
          <a-form layout='vertical'>
            <a-form-item
              {...{ props: formItemLayout }}
              label='车辆编号'
            >
              {orderInfo.bike_sn}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='剩余电量'
            >
              {orderInfo.battery + '%'}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='行程开始时间'
            >
              {orderInfo.start_time}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='当前位置'
            >
              {orderInfo.location}
            </a-form-item>
          </a-form>
        </a-modal>
      )
    }
  }
)

export default {
  name: 'CityOpenForm',
  props: ['visible', 'orderInfo'],
  methods: {
    handleCancel  () {
      this.$emit('hideOpenOrder')
    },
    handleCreate  () {
      const form = this.formRef.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        form.resetFields()
        this.$emit('handleFinishOrder')
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
          orderInfo={this.orderInfo}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
</script>
