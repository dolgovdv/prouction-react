import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Profile} from '../../types/Profile'
import {type ThunkConfig} from 'app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api.get<Profile>('/profile')

            return response.data
        } catch (e) {
            // TODO: автоматическти сохраняемый перевод попадает в неправильную папку
            return rejectWithValue('error')
        }
    }
)
