import request from '@/utils/request'

// 新建数据
export function createData(data) {
  return request({
    url: '/api/v1/cmdb/resource',
    method: 'post',
    data
  })
}

// 数据列表
export function getDataList(modelId, params) {
  return request({
    url: `/api/v1/cmdb/resource/data/${modelId}`,
    method: 'get',
    params
  })
}

// 删除数据
export function deleteData(modelId) {
  return request({
    url: `/api/v1/cmdb/resource/data/${modelId}`,
    method: 'delete'
  })
}

// 编辑数据
export function editData(modelId, data) {
  return request({
    url: `/api/v1/cmdb/resource/data/${modelId}`,
    method: 'put',
    data
  })
}

// 数据详情
export function dataDetails(id) {
  return request({
    url: `/api/v1/cmdb/resource/detail/${id}`,
    method: 'get'
  })
}

// 创建云账户
export function createCloudAccount(data) {
  return request({
    url: `/api/v1/cmdb/resource/cloud-account`,
    method: 'post',
    data
  })
}

// 云账户列表
export function cloudAccountList(params) {
  return request({
    url: `/api/v1/cmdb/resource/cloud-account`,
    method: 'get',
    params
  })
}

// 删除云账户
export function deleteCloudAccount(id) {
  return request({
    url: `/api/v1/cmdb/resource/cloud-account/${id}`,
    method: 'delete'
  })
}

// 新建云资源同步
export function createCloudDiscovery(data) {
  return request({
    url: `/api/v1/cmdb/resource/cloud-discovery`,
    method: 'post',
    data
  })
}

// 云资源同步列表
export function cloudDiscoveryList(params) {
  return request({
    url: `/api/v1/cmdb/resource/cloud-discovery`,
    method: 'get',
    params
  })
}

// 编辑云资源同步
export function editCloudDiscovery(id, data) {
  return request({
    url: `/api/v1/cmdb/resource/cloud-discovery/${id}`,
    method: 'put',
    data
  })
}

// 删除云资源同步
export function deleteCloudDiscovery(id) {
  return request({
    url: `/api/v1/cmdb/resource/cloud-discovery/${id}`,
    method: 'delete'
  })
}