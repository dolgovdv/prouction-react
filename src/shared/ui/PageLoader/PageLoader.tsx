import {classNames} from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import {type FC} from 'react'
import {Loader} from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({className = ''}) => {
    return (
        <div className={classNames(cls.pageloader, {}, [className])}>
            <Loader />
        </div>
    )
}
