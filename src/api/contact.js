import request from '@/utils/request'

export function list() {
  return request({
    url: '/bottom/list',
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: '/bottom/update',
    method: 'post',
    data
  })
}

