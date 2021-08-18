import theme from 'styled-theming';

export const primary = theme('mode', {
    light: '#EE9480',
    dark: '#818AA3',
});
export const secondary = theme('mode', {
    light: '#818AA3',
    dark: '#818AA3',
});
export const accent = theme('mode', {
    light: '#4CC9F0',
    dark: '#4CC9F0',
});
export const front = theme('mode', {
    light: '#010101',
    dark: '#FFFFFF',
});
export const back = theme('mode', {
    light: '#F8F8FF',
    dark: '#000000',
});

export const cursor = theme('cursor', {
    wait: 'wait',
    progress: 'progress',
    default: 'default',
});
