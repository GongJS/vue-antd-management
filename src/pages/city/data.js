import Utils from './../../utils/utils'
const columns = [
  {
    title: '城市ID',
    key: 'id',
    dataIndex: 'id'
  }, {
    title: '城市名称',
    key: 'name',
    dataIndex: 'name'
  }, {
    title: '用车模式',
    key: 'mode',
    dataIndex: 'mode',
    customRender (mode) {
      return mode === 1 ? '停车点' : '禁停区'
    }
  }, {
    title: '营运模式',
    key: 'op_mode',
    dataIndex: 'op_mode',
    customRender (mode) {
      return mode === 1 ? '自营' : '加盟'
    }
  }, {
    title: '授权加盟商',
    key: 'franchisee_name',
    dataIndex: 'franchisee_name'
  }, {
    title: '城市管理员',
    key: 'city_admins',
    dataIndex: 'city_admins',
    customRender (arr) {
      return arr.map((item) => {
        return item.user_name
      }).join(',')
    }
  }, {
    title: '城市开通时间',
    key: 'open_time',
    dataIndex: 'open_time'
  }, {
    title: '操作时间',
    key: 'update_time',
    dataIndex: 'update_time',
    customRender: Utils.formateDate
  }, {
    title: '操作人',
    key: 'sys_user_name',
    dataIndex: 'sys_user_name'
  }
]
const dataSource = {
  columns
}
export default dataSource
