import { useTheme } from 'next-themes';

const ThemeValue = () =>  {
    let {theme} = useTheme()
    return theme;
}

export default ThemeValue;