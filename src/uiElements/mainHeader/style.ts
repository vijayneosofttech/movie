import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {COMMON_STYLES} from '../../styles/common';
import {FONTS} from '../../styles/fonts';
import {textScale, verticalModerateScale} from '../../styles/responsiveUnits';

export const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalModerateScale(18),
    paddingHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    backgroundColor: COLORS.BLACK,
  },
  title: {
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.WHITE,
    fontSize: textScale(28),
  },
});
