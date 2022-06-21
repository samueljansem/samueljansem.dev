import { styled } from '../../stitches.config';

export const Container = styled('section', {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '2rem 0',
    flexWrap: 'wrap',

    '@sm': {
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    svg: {
        color: '$primary',
    },
});

export const Wrapper = styled('div', {
    width: '100%',
    display: 'flex',

    '@sm': {
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
});

export const SkillsArea = styled('article', {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '@sm': {
        marginRight: 0,
        marginBottom: '2rem',
    },
});

export const SkillAreaTitle = styled('h3', {
    marginBottom: '2rem',
    textAlign: 'start',
    width: '100%',

    '@sm': {
        fontSize: '1.5rem',
        textAlign: 'center',
    },
});

export const SkillsList = styled('ul', {
    listStyle: 'none',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    justifyContent: 'space-between',

    '@sm': {},
});

export const SkillItem = styled('li', {
    display: 'flex',

    marginBottom: '1rem',

    gap: '.5rem',

    div: {
        display: 'flex',
        flexDirection: 'column',

        strong: {
            fontSize: '1rem',
            lineHeight: '1.25rem',
        },

        span: {
            fontWeight: 400,
            fontSize: '0.75rem',
            color: '$gray',
        },
    },
});
