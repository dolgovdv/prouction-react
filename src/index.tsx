import {render} from 'react-dom'
import App from './app/App'
import {ThemeProvider} from 'app/providers/ThemeProvider'
import {BrowserRouter} from 'react-router-dom'
import 'shared/config/i18n/i18n'
import {ErrorBoundary} from 'app/providers/ErrorBoundary'
import './app/styles/index.scss'
import {StoreProvider} from 'app/providers/StoreProvider/ui/StoreProvider'

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
