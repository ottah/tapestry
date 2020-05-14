import * as React from 'react';
import {ThemeEditor} from '../ThemeEditor/ThemeEditor';
import {defaultTheme, ThemeProvider, Header} from '@openfin/desktop-ui';
import Styles from './App.module.scss';

export const App: React.FC = () => {
    return (
        <ThemeProvider autoConnect theme={defaultTheme} updateBody>
            <div className={Styles['app']}>
                <Header
                    className={Styles['header']}
                    text="Tapestry"
                    onClose={() => window.close()}
                />
                <ThemeEditor {...defaultTheme} />
            </div>
        </ThemeProvider>
    );
};
