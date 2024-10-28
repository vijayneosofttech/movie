import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';

import {horizontalModerateScale, textScale} from '../../styles/responsiveUnits';
import { FONTS } from '../../styles/fonts';

export const styles = StyleSheet.create({
  customText: {
    color: COLORS.BLACK,
    fontSize: textScale(12),
    fontFamily : FONTS.POPPINS_REGULAR
  },
});
