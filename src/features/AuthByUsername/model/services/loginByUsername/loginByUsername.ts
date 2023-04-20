import {createAsyncThunk} from '@reduxjs/toolkit'
import {type User, userActions} from 'entities/User'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage'
import {type ThunkConfig} from 'app/providers/StoreProvider'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {extra, dispatch, rejectWithValue} = thunkAPI
        try {
            // const response = await axios.post<User>('http://localhost:8000/login', authData)

            const response = await extra.api.post<User>('/login', authData)

            // TODO: разобраться с ошибкой
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            extra.navigate('/profile')
            return response.data
        } catch (e) {
            // TODO: автоматическти сохраняемый перевод попадает в неправильную папку
            return rejectWithValue('error')
        }
    }
)
