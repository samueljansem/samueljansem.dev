import { styled } from '../../stitches.config';

export const Container = styled('header', {
    margin: '0 auto',
    borderBottom: '1px solid $loContrast2',
    height: '5rem',

    transition: 'border 0.2s',
});

export const Content = styled('div', {
    height: '5rem',
    maxWidth: 1220,
    margin: '0 auto',
    padding: '0rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});
