import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/global/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/global/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/global/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/global/create',
    method: 'post',
    data
  })
}
