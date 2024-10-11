import { Platform } from 'react-native';

export const safeAreaPadding = Platform.OS === 'ios' ? 60 : 45;

export const rootColor = '#fdf0d5';
export const accentColor = '#669bbc';
export const positiveColor = '#8AC926';
export const negativeColor = '#FF595E';