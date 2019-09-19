import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/home/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/home/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/home/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/home/create',
    method: 'post',
    data
  })
}
