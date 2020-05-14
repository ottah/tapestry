import * as React from 'react';

import Styles from './Toolbar.module.scss';

export const Toolbar: React.FC = () => {
    const [autoUpdate, setAutoUpdate] = React.useState<boolean>(true);
    const [toggleOutput, setToggleOutput] = React.useState<boolean>(false);

    return (
        <div className={Styles.toolbar}>

        </div>
    );
};