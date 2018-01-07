import { isWeb } from '@/utils/env'
import { LOADING } from '@/interfaces/indicator'
import axios from 'axios'
const base_url = process.env.API_URL

export function GET() {

}

export function POST(url, params = {}, loading = true) {

    if (isWeb()) {
        url = base_url + url
        return new Promise((resolve, reject) => {
            loading && LOADING('show')
            axios.post(url, params).then(res => {
                LOADING('hide')
                resolve(res)
            }).catch(err => {
                LOADING('hide')
                reject(err)
            })
        })
    } else {
        // todo 其它环境的实现
    }
}

export default {
    GET,
    POST
}