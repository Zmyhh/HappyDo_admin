import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/about/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/about/delete',
    method: 'post',
    data
  })
}

export function detail(query) {
  return request({
    url: '/about/detail',
    method: 'get',
    params: query
  })
}

export function update(data) {
  return request({
    url: '/about/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/about/create',
    method: 'post',
    data
  })
}
