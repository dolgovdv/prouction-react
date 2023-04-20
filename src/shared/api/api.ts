import axios from 'axios'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage'

export const $api = axios.create({
    baseURL: __API__,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    headers: {authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)},
})
