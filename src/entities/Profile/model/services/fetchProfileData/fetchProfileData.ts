import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Profile} from 'entities/Profile'
import {type ThunkConfig} from 'app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api.get<Profile>('/profile')

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            // TODO: автоматическти сохраняемый перевод попадает в неправильную папку
            return rejectWithValue('error')
        }
    }
)
