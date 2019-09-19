import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/broadcast/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/broadcast/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/broadcast/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/broadcast/create',
    method: 'post',
    data
  })
}
