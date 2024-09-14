import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/minioStorage',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/minioStorage/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/minioStorage',
    method: 'put',
    data
  })
}

export function downloadFile(id) {
  return request({
    url: 'api/minioStorage/downloadFile',
    method: 'post',
    data: id
  })
}

export default { add, edit, del, downloadFile }
