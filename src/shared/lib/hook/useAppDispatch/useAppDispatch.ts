import {useDispatch} from 'react-redux'
import {type AppDispatch} from 'app/providers/StoreProvider'

// TODO: вернуть правильный тип
export const useAppDispatch = (): any => useDispatch<AppDispatch>()
