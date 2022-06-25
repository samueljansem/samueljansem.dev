import { styled } from '../../stitches.config';

export const StyledDownloadButton = styled('a', {
    padding: '.5rem',
    minWidth: '3rem',
    height: '3rem',
    border: 0,
    borderRadius: '8px',

    fontSize: '1rem',

    background: '$primary',
    color: '#fff',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
        filter: 'brightness(0.8)',
    },

    variants: {
        outlined: {
            true: {
                background: 'transparent',
                color: '$primary',
                border: '2px solid $primary',
            },
        },
    },
});
