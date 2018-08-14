<script>
import { Form, Button, Select, Modal, Input } from 'ant-design-vue'
import Tree from './TreeNodes'
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
      'a-tree': Tree
    },
    props: ['visibleSetPermissionForm', 'changeTreeNode'],
    render () {
      const { getFieldDecorator } = this.form
      const { visibleSetPermissionForm, changeTreeNode } = this
      let listeners = {
        changeTreeNode: changeTreeNode
      }
      const formItemLayout = {
        labelCol: {
          xs: { span: 4 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 18 },
          sm: { span: 18 }
        }
      }
      return (
        <a-modal
          visible={visibleSetPermissionForm}
          title='设置权限'
          okText='Create'
          onCancel={() => { this.$emit('cancel') }}
          onOk={() => { this.$emit('create') }}
        >
          <a-form layout='vertical'>
            <a-form-item class=""
              {...{ props: formItemLayout }}
              label='角色名称:' >
              {getFieldDecorator('role_name', {
                initialValue: '客服专员'
              })(
                <a-input disabled></a-input >
              )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='状态:' >
              {getFieldDecorator('state', {
                initialValue: '1'
              })(
                <a-select style="width:100px;">
                  <a-option value="1">启用</a-option>
                  <a-option value="2">关闭</a-option>
                </a-select>
              )}
            </a-form-item>
            <a-form-item>
              <a-tree {...{on: listeners}}/>
            </a-form-item>
          </a-form>
        </a-modal>
      )
    }
  }
)

export default {
  name: 'setPermissionForm',
  props: ['visibleSetPermissionForm', 'orderInfo'],
  data () {
    return {
      treeNodeData: []
    }
  },
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
    changeTreeNode (treeNodeData) {
      this.treeNodeData = treeNodeData
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
          visibleSetPermissionForm={this.visibleSetPermissionForm}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          changeTreeNode={this.changeTreeNode}
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
