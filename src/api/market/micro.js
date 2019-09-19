import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/micro/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/micro/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/micro/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/micro/create',
    method: 'post',
    data
  })
}
