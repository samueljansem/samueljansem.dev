import { styled } from '../../stitches.config';

export const Title = styled('h2', {
    color: '$primary',
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    width: '100%',

    '@sm': {
        textAlign: 'center',
    },
});
