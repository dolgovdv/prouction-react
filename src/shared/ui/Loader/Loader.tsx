import {classNames} from 'shared/lib/classNames/classNames'
import './Loader.scss'
import {type FC} from 'react'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({className = ''}) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
