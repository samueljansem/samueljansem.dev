import { createStitches, createTheme } from '@stitches/react';

export const { styled, globalCss, theme } = createStitches({
    theme: {
        fonts: {
            default: 'Poppins, sans-serif',
        },
        fontSizes: {
            md: '93.75%',
            sm: '87.5%',
        },
        fontWeights: {
            normal: 400,
            bold: 600,
        },
        colors: {
            primary: '#2176ff',
            hiContrast: '#121214',
            hiContrast2: '#29292e',
            loContrast: '#E6E6E6',
            loContrast2: '#AEAEAE',
            gray: '#999999',
        },
    },
    media: {
        md: '(min-width: 720px) and (max-width: 1080px)',
        sm: '(max-width: 720px)',
    },
});

export const darkTheme = createTheme({
    colors: {
        hiContrast: '#E6E6E6',
        hiContrast2: '#AEAEAE',
        loContrast: '#121214',
        loContrast2: '#29292e',
        gray: '#999999',
    },
});
