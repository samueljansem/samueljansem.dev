import { styled } from '../../stitches.config';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { BsFillMoonFill, BsFillSunFill, BsMoon } from '../../styles/icons';

const StyledSwitch = styled(SwitchPrimitive.Root, {
    all: 'unset',
    width: '3rem',
    height: '1.5rem',
    backgroundColor: '$hiContrast',
    borderRadius: '9999px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.5rem',
    height: '1.5rem',
    border: 'solid 1px $loContrast2',
    backgroundColor: '$loContrast',
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(-1px)',
    willChange: 'transform',
    '&[data-state="checked"]': { transform: 'translateX(1.5rem)' },

    '&:hover': {
        filter: 'brightness(0.9)',
    },
});

const StyledSunIcon = styled(BsFillSunFill, {
    color: '$hiContrast',
});

const StyledMoonIcon = styled(BsFillMoonFill, {
    color: '$hiContrast',
});

export { StyledSwitch, StyledThumb, StyledSunIcon, StyledMoonIcon };
