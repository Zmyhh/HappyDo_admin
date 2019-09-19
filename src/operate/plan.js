import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/plan/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/plan/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/plan/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/plan/create',
    method: 'post',
    data
  })
}
