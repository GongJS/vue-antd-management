<script>
import { Form, Button, Select, Modal, Input } from 'ant-design-vue'
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
      'a-input': Input
    },
    props: ['visibleCreatePermissionForm'],
    render () {
      const { getFieldDecorator } = this.form
      const { visibleCreatePermissionForm } = this
      const formItemLayout = {
        labelCol: {
          xs: { span: 6 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 18 },
          sm: { span: 18 }
        }
      }
      return (
        <a-modal
          visible={visibleCreatePermissionForm}
          title='创建角色'
          okText='Create'
          onCancel={() => { this.$emit('cancel') }}
          onOk={() => { this.$emit('create') }}
        >
          <a-form layout='vertical'>
            <a-form-item
              {...{ props: formItemLayout }}
              label='角色名称:' >
              {getFieldDecorator('role_name', {
                initialValue: ''
              })(
                <a-input placeholder="请输入角色名称"></a-input >
              )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='状态:' >
              {getFieldDecorator('state', {
                initialValue: '1'
              })(
                <a-select style="width:100px;">
                  <a-option value="1">开启</a-option>
                  <a-option value="2">关闭</a-option>
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
  name: 'createPermissionForm',
  props: ['visibleCreatePermissionForm'],
  methods: {
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
        this.$emit('hideForm')
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
          visibleCreatePermissionForm={this.visibleCreatePermissionForm}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
</script>
<style scoped>
  .ant-form-item-label label {
    color: rgba(0, 0, 0, 0.85);
    float: right;
    line-height: 32px;
    margin-right: 10px;
  }
</stylea>
