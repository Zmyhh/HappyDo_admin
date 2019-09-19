import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/data/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/data/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/data/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/data/create',
    method: 'post',
    data
  })
}
