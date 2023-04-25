import {createAsyncThunk} from '@reduxjs/toolkit'
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm'
import {type Profile} from '../../types/profile'
import {type ThunkConfig} from 'app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI
        const formData = getProfileForm(getState())
        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (e) {
            // TODO: автоматическти сохраняемый перевод попадает в неправильную папку
            return rejectWithValue('error')
        }
    }
)
