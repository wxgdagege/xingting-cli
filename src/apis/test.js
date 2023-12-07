import http from './request'

export const test1 = (params) => {
  return http.get('/api/searchAuthors', params)
}
