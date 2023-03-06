import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import type React from 'react'
import {useRef, useState, type FC, useEffect, useCallback} from 'react'
import {Portal} from 'shared/ui/Portal/Portal'
import {useTheme} from 'app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = ({
    className = '',
    isOpen = false,
    onClose,
    lazy = false,
    children,
}) => {
    const {theme} = useTheme()
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback((): void => {
        if (onClose != null) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                setIsClosing(false)
                onClose()
            }, ANIMATION_DELAY)
        }
    }, [onClose])
    const onKeyDown = useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler]
    )
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current as ReturnType<typeof setTimeout>)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div
                className={classNames(cls.modal, {[cls.opened]: isOpen, [cls.closed]: isClosing}, [
                    className,
                    theme ?? '',
                ])}
            >
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
