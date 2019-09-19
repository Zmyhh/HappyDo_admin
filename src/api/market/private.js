import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/private/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/private/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/private/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/private/create',
    method: 'post',
    data
  })
}
