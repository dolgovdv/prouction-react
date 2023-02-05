import React from 'react';
import {useTranslation} from "react-i18next";

type Props = {
    
};
export const AboutPage = (props: Props) => {
    const {t} = useTranslation(['about']);
    return (
        <div>
            {t('О приложении')}
        </div>
    );
};


