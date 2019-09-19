import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/join/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/join/delete',
    method: 'post',
    data
  })
}

export function detail(query) {
  return request({
    url: '/join/detail',
    method: 'get',
    params: query
  })
}

export function update(data) {
  return request({
    url: '/join/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/join/create',
    method: 'post',
    data
  })
}
