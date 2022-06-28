import { styled } from '../../stitches.config';
import { FiDownload } from 'react-icons/fi';

export const Container = styled('section', {
    display: 'flex',
    justifyContent: 'space-between',

    '@sm': {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
    },
});

export const Wrapper = styled('div', {
    '@sm': {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
});

export const AvatarWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '.75rem',
});

export const Welcome = styled('span', {
    fontSize: '2rem',
    lineHeight: '2rem',

    '@sm': {
        fontSize: '1.5rem',
        textAlign: 'center',
    },
});

export const Title = styled('h1', {
    fontSize: '3rem',
    lineHeight: '3rem',

    span: {
        color: '$primary',
    },

    '@sm': {
        fontWeight: 'bold',
        fontSize: '2.5rem',
        lineHeight: '2.5rem',
        textAlign: 'center',
    },
});

export const Role = styled('span', {
    color: '$gray',
    fontSize: '2rem',

    '@sm': {
        textAlign: 'center',
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },
});

export const Socials = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: '1rem',
});

export const PersonalInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    color: '$gray',

    div: {
        flex: 1,
        width: '100%',
    },
});

export const ButtonsWrapper = styled('div', {
    display: 'flex',
    gap: '1rem',

    '@sm': {
        alignItems: 'center',
        justifyContent: 'center',
    },

    a: {
        display: 'flex',
    },
});

export const StyledDownloadIcon = styled(FiDownload, {
    marginLeft: '.5rem',
});
