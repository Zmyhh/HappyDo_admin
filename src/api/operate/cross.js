import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/cross/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/cross/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/cross/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/cross/create',
    method: 'post',
    data
  })
}
