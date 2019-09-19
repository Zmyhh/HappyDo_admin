import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/content/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/content/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/content/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/content/create',
    method: 'post',
    data
  })
}
