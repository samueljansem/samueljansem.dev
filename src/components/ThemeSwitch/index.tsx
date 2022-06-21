import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledSwitch, StyledThumb, StyledMoonIcon, StyledSunIcon } from './styles';

export function ThemeSwitch() {
    const { theme, applyTheme, getPreferredTheme } = useContext(ThemeContext);

    const onCheckedChange = (checked: boolean) => applyTheme(checked ? 'dark' : 'light');

    return (
        <StyledSwitch
            onCheckedChange={onCheckedChange}
            defaultChecked={getPreferredTheme() === 'dark' ? true : false}>
            <StyledThumb>{theme === 'dark' ? <StyledSunIcon /> : <StyledMoonIcon />}</StyledThumb>
        </StyledSwitch>
    );
}
