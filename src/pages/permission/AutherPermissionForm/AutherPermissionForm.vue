<script>
import { Form, Button, Select, Modal, Input } from 'ant-design-vue'
import Transfer from './Transfer'
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
      'a-modal': Modal,
      'a-input': Input,
      'a-transfer': Transfer
    },
    props: ['visibleAutherPermissionForm', 'changeTransfer'],
    render () {
      const { getFieldDecorator } = this.form
      const { visibleAutherPermissionForm, changeTransfer } = this
      let listeners = {
        changeTransfer: changeTransfer
      }
      const formItemLayout = {
        labelCol: {
          xs: { span: 4 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 18 },
          sm: { span: 16 }
        }
      }
      return (
        <a-modal
          visible={visibleAutherPermissionForm}
          title='用户授权'
          okText='Create'
          onCancel={() => { this.$emit('cancel') }}
          onOk={() => { this.$emit('create') }}
        >
          <a-form layout='vertical'>
            <a-form-item class=""
              {...{ props: formItemLayout }}
              label='角色名称' >
              {getFieldDecorator('role_name', {
                initialValue: '管理人员'
              })(
                <a-input disabled></a-input >
              )}
            </a-form-item>
            <a-form-item>
              <a-transfer {...{on: listeners}}/>
            </a-form-item>
          </a-form>
        </a-modal>
      )
    }
  }
)

export default {
  name: 'autherPermissionForm',
  props: ['visibleAutherPermissionForm'],
  data () {
    return {
      targetKeys: [],
      direction: '',
      moveKeys: []
    }
  },
  methods: {
    changeTransfer (targetKeys, direction, moveKeys) {
      this.targetKeys = targetKeys
      this.direction = direction
      this.moveKeys = moveKeys
    },
    handleCancel  () {
      this.$emit('hideForm')
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
          visibleAutherPermissionForm={this.visibleAutherPermissionForm}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          changeTransfer={this.changeTransfer}
        />
      </div>
    )
  }
}
</script>
<style>

</style>
