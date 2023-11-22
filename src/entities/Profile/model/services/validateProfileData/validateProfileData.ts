import {type Profile} from 'entities/Profile'
import {ValidateProfileError} from 'entities/Profile/model/types/profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (profile == null) {
        return [ValidateProfileError.NOT_DATA]
    }
    const {age, username, first, lastname} = profile
    const errors: ValidateProfileError[] = []

    if (first == null || lastname == null) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (age == null || !Number.isInteger(age) || age < 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    if (username == null) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME)
    }
    return errors
}
