import Utils from '@/utils/utils'
const columns = [
  {
    title: '角色ID',
    dataIndex: 'id'
  }, {
    title: '角色名称',
    dataIndex: 'role_name'
  }, {
    title: '创建时间',
    dataIndex: 'create_time',
    customRender: Utils.formatTime
  }, {
    title: '使用状态',
    dataIndex: 'status',
    customRender (status) {
      // eslint-disable-next-line
      if (status == 1) {
        return '启用'
      } else {
        return '停用'
      }
    }
  }, {
    title: '授权时间',
    dataIndex: 'authorize_time',
    customRender: Utils.formatTime
  }, {
    title: '授权人',
    dataIndex: 'authorize_user_name'
  }
]
const dataSource = {
  columns
}
export default dataSource
