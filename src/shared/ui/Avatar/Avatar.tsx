import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import {type CSSProperties, useMemo} from 'react'
interface AvatarProps {
    src: string
    alt: string
    className?: string
    size?: number
}

export const Avatar = ({className = '', alt, src, size}: AvatarProps): JSX.Element => {
    const styles = useMemo<CSSProperties>(() => ({width: size, height: size}), [size])
    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
            style={styles}
        />
    )
}
