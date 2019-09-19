import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/video/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/video/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/video/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/video/create',
    method: 'post',
    data
  })
}
