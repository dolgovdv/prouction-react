import {createAsyncThunk} from '@reduxjs/toolkit'
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm'
import {type Profile, ValidateProfileError} from '../../types/profile'
import {type ThunkConfig} from 'app/providers/StoreProvider'
import {validateProfileData} from '../validateProfileData/validateProfileData'

/**
 * Обновление данных профиля
 */
export const updateProfileData = createAsyncThunk<
    Profile,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const {extra, rejectWithValue, getState} = thunkAPI
    const formData = getProfileForm(getState())

    /**
     * Проверка ошибок
     */
    const errors = validateProfileData(formData)
    console.log(errors)
    if (errors.length !== 0) {
        return rejectWithValue(errors)
    }

    try {
        const response = await extra.api.put<Profile>('/profile', formData)
        return response.data
    } catch (e) {
        // TODO: автоматическти сохраняемый перевод попадает в неправильную папку
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
