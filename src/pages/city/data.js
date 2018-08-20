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
    dataIndex: 'mode'
  }, {
    title: '营运模式',
    key: 'op_mode',
    dataIndex: 'op_mode'
  }, {
    title: '授权加盟商',
    key: 'franchisee_name',
    dataIndex: 'franchisee_name'
  }, {
    title: '城市管理员',
    key: 'city_admins',
    dataIndex: 'city_admins'
  }, {
    title: '城市开通时间',
    key: 'open_time',
    dataIndex: 'open_time',
    customRender: Utils.formateDate
  }, {
    title: '操作时间',
    key: 'update_time',
    dataIndex: 'update_time',
    customRender: Utils.formateDate
  }, {
    title: '操作人',
    key: 'sys_user_name',
    dataIndex: 'sys_user_name'
  }, {
    title: '加盟商授权状态',
    key: 'status',
    dataIndex: 'status'
  }

]
export default columns
