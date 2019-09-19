import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/case/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/case/delete',
    method: 'post',
    data
  })
}

export function detail(query) {
  return request({
    url: '/case/detail',
    method: 'get',
    params: query
  })
}

export function update(data) {
  return request({
    url: '/case/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/case/create',
    method: 'post',
    data
  })
}
