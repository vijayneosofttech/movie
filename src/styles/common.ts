import {Dimensions} from 'react-native';
import {
  horizontalModerateScale,
  verticalModerateScale,
} from './responsiveUnits';

export const WINDOW_DIMENSIONS = {
  WINDOW_WIDTH: Dimensions?.get('window')?.width,
  WINDOW_HEIGHT: Dimensions?.get('window')?.height,
};

export const SCREEN_DIMENSIONS = {
  WINDOW_WIDTH: Dimensions?.get('screen')?.width,
  WINDOW_HEIGHT: Dimensions?.get('screen')?.height,
};

export const COMMON_STYLES: {
  SCREEN_HORIZONTAL_SPACING: number;
  SCREEN_VERTICAL_SPACING: number;
} = {
  SCREEN_HORIZONTAL_SPACING: horizontalModerateScale(20),
  SCREEN_VERTICAL_SPACING: verticalModerateScale(20),
};
