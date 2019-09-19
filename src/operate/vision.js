import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/vision/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/vision/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/vision/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/vision/create',
    method: 'post',
    data
  })
}
