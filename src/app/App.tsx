import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const MyComponent = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme,])}>
            <Navbar/>
            <button type={"button"} onClick={toggleTheme}>Theme</button>
            <AppRouter/>
        </div>
    );
};

export default MyComponent;
