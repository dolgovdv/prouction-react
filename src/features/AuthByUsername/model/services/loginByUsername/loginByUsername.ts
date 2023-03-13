import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {type User, userActions} from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            // TODO: разобраться с ошибкой
            // if (!response.data) {
            //     throw new Error()
            // }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e)
            // TODO: автоматическти сохраняемый перевод попадает в неправильную папку
            return thunkAPI.rejectWithValue(i18n.t('Неправильно введен логин или пароль.'))
        }
    }
)
