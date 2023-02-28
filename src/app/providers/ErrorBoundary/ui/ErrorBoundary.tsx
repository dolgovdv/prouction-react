import {type ErrorInfo, type ReactNode, Suspense} from 'react'
import React from 'react'
import {PageError} from 'widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(): {hasError: true} {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo)
    }

    render(): ReactNode {
        const {hasError} = this.state
        const {children} = this.props
        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback={''}>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
