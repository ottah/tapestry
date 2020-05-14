import * as React from 'react';
import {Theme, initializeThemeSelector, defaultTheme, Button, setTheme} from '@openfin/desktop-ui';
import {SketchPicker} from 'react-color';

import Styles from './ThemeEditor.module.scss';

export const ThemeEditor: React.FC<Theme> = (props) => {
    const {name} = props;
    const [editorTheme, setEditorTheme] = React.useState<Theme>(defaultTheme);
    const [autoUpdate, setAutoUpdate] = React.useState<boolean>(true);
    const [toggleOutput, setToggleOutput] = React.useState<boolean>(false);
    const defaultThemeColors = Object.entries(editorTheme.color);

    const handlePropertyUpdate = (color: Color) => {
        setEditorTheme({...editorTheme, color: {...editorTheme.color, [color.name]: color.value}});
        console.log(color, editorTheme);
    }

    const handleTextUpdate = (color: Color) => {
        setEditorTheme({
            ...editorTheme,
            text: {
                // @ts-ignore
                ...editorTheme.text!,
                [color.name]: {
                    color: color.value
                }
            }
        } as Theme);
    }

    React.useEffect(() => {
        if(autoUpdate)
        {
            setTheme(editorTheme);
        }
    }, [autoUpdate, editorTheme]);

    React.useEffect(() => {
        initializeThemeSelector({});
    });

    return (
        <div className={Styles['editor']}>
            <Button onClick={() => setAutoUpdate(!autoUpdate)}>{autoUpdate ? '[*] auto update' : '[ ] auto update'}</Button>
            <Button onClick={() => setTheme(editorTheme)}>Set theme</Button>
            <Button onClick={() => setToggleOutput(!toggleOutput)}>JSON</Button>
            {toggleOutput && <textarea readOnly className={Styles['output']}
            value={JSON.stringify(editorTheme, undefined, 3)} />}
            {
                defaultThemeColors.map(([name, value]) => {
                    return <ColorView key={name} {...{name, value}} onChange={handlePropertyUpdate} />
                })
            }

        {
            // @ts-ignore
            <ColorView name="primary" value={editorTheme.text.primary.color} onChange={handleTextUpdate} />}

        {
            // @ts-ignore
            <ColorView name="secondary" value={editorTheme.text.primary.color} onChange={handleTextUpdate} />}

        {
            // @ts-ignore
            <ColorView name="links" value={editorTheme.text.primary.color} onChange={handleTextUpdate} />}

        </div>
    );
};


interface Color {
    name: string;
    value: string;
}

interface ColorViewProps extends Color {
    onChange: (color: Color) => void;
}

enum ColorMode {
    text = 'text',
    hex = 'color'
}

const ColorView: React.FC<ColorViewProps> = (props) => {
    const {name, value, onChange} = props;
    const [mode, setMode] = React.useState<boolean>(true);

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        onChange({name, value});
    }

    return (
        <div className={Styles['color-view']}>
            <div className={Styles['key']} onClick={() => setMode(!mode)}>{name}</div>
            <input onChange={handleChange} type={mode ? ColorMode.hex : ColorMode.text} value={value}/>
        </div>
    );
};
