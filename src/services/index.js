import Ajax from '../libs/keact/Ajax'
import { apiUrl } from '../constants'

export const publicService = {
  getCommonData (params, fn) {
    Ajax.call(this, apiUrl + '/common/multiSet', 'post', params, fn)
  }
}
