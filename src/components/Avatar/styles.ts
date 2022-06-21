import { styled } from '../../stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const StyledAvatar = styled(AvatarPrimitive.Root, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: '13rem',
    height: '13rem',
    borderRadius: '100%',
    backgroundColor: '$hiContrast',

    border: '4px solid $loContrast',
    outline: '4px solid $primary',

    transition: 'border 0.2s',

    '@md': {
        width: '12rem',
        height: '12rem',
    },

    '@sm': {
        width: '9rem',
        height: '9rem',
    },
});

export const StyledImage = styled(AvatarPrimitive.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const StyledFallback = styled(AvatarPrimitive.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: '$primary',
    fontSize: 16,
    lineHeight: 1,
    fontWeight: 500,
});
