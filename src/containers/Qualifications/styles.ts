import { styled } from '../../stitches.config';

export const Container = styled('section', {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
});

export const Head = styled('div', {
    display: 'flex',
    gap: '.5rem',

    svg: {
        color: '$primary',
    },

    marginBottom: '2rem',
});

export const Wrapper = styled('article', {
    width: 'calc(50% - 3rem)',

    '@sm': {
        width: '100%',
        marginBottom: '2rem',
    },
});

export const QualificationItem = styled('div', {
    fontSize: '1rem',
    marginBottom: '2rem',
});

export const QualificationWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray',
    fontSize: '0.8rem',
    gap: '.5rem',

    '@sm': {
        flexWrap: 'wrap',
    },

    'span + span': {
        display: 'flex',
        alignItems: 'center',
        gap: '.25rem',
        whiteSpace: 'nowrap',
    },
});
