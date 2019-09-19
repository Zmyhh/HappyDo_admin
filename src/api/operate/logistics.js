import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/logistics/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/logistics/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/logistics/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/logistics/create',
    method: 'post',
    data
  })
}
