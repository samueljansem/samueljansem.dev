import { styled } from '../../stitches.config';

export const Content = styled('main', {
    maxWidth: 1220,
    margin: '0 auto',
    padding: '2rem 2rem',

    '@sm': {
        maxWidth: '100vw',
    },
});
