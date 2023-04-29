import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData'
import {type Profile, type ProfileSchema} from '../types/profile'
import {updateProfileData} from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    data: undefined,
    error: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            console.log('updateProfile', {...state}, action)
            state.form = {...state.form, ...action.payload}
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            /**
             * updateProfileData
             */
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                console.log('updateProfileData', state, action)
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

// Action creators are generated for each case reducer function
export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
