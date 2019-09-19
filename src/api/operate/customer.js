import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/customer/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/customer/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/customer/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/customer/create',
    method: 'post',
    data
  })
}
