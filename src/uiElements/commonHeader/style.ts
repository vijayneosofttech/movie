import {StyleSheet} from 'react-native';
import {COMMON_STYLES} from '../../styles/common';
import {
  horizontalModerateScale,
  textScale,
  verticalModerateScale,
} from '../../styles/responsiveUnits';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalModerateScale(18),
    paddingHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    gap: horizontalModerateScale(16),
    backgroundColor : COLORS.BLACK
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: textScale(17),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color : COLORS.WHITE
  },
  iconContainer: {
  },
});
