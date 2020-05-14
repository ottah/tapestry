import * as React from 'react';
import {ThemeEditor} from '../ThemeEditor/ThemeEditor';
import {defaultTheme, ThemeProvider} from '@openfin/desktop-ui';

export const App: React.FC = () => {
    return (
        <ThemeProvider autoConnect theme={defaultTheme} updateBody>
            <div>
                <ThemeEditor {...defaultTheme} />
            </div>
        </ThemeProvider>
    );
};
