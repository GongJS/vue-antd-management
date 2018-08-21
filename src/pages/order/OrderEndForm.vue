<script>
import { Form, Button, Select, Modal } from 'ant-design-vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
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
              <p>{orderInfo.bike_sn}</p>
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='订单编号'
            >
              <p>{orderInfo.order_sn}</p>
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='行程开始时间'
            >
              <p>{moment(orderInfo.start_time).utcOffset(-0).format('YYYY-MM-DD HH:mm:ss')}</p>
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='行程结束时间'
            >
              <p>{orderInfo.end_time}</p>
            </a-form-item>
          </a-form>
        </a-modal>
      )
    }
  }
)

export default {
  name: 'orderEndForm',
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
