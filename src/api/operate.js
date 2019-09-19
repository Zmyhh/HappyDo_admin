import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/operate/list',
    method: 'get',
    params: query
  })
}

export function Delete(data) {
  return request({
    url: '/operate/delete',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/operate/update',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/operate/create',
    method: 'post',
    data
  })
}
