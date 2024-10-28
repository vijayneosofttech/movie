import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;
const windowWidth = Dimensions?.get('window')?.width;
const windowHeight = Dimensions?.get('window')?.height;

// For Width
export const horizontalScale = (size: number) =>
  (windowWidth / guidelineBaseWidth) * size;

// For Height
export const verticalScale = (size: number) =>
  (windowHeight / guidelineBaseHeight) * size;

// For Margin (Horizontal), Padding (Horizontal) and Border Radius
export const horizontalModerateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

// For Margin (Vertical), Padding (Vertical) and Border Radius
export const verticalModerateScale = (size: number, factor: number = 0.5) =>
  size + (verticalScale(size) - size) * factor;

// For Font Size
export const textScale = (percent: number) => {
  return RFValue(percent, guidelineBaseHeight);
};
