import request from '@/utils/request'

export function getTree() {
  return request({
    url: 'api/devops/app/productLine/getTree',
    method: 'post'
  })
}

export function queryPage(data) {
  return request({
    url: 'api/devops/app/productLine/queryPage',
    method: 'post',
    data: data
  })
}

export function create(data) {
  return request({
    url: 'api/devops/app/productLine/create',
    method: 'post',
    data: data
  })
}

export function modify(data) {
  return request({
    url: 'api/devops/app/productLine/modify',
    method: 'post',
    data: data
  })
}

export function remove(data) {
  return request({
    url: 'api/devops/app/productLine/remove',
    method: 'post',
    data: data
  })
}

