import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/explosive/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/explosive/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/explosive/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/explosive/create',
    method: 'post',
    data
  })
}
