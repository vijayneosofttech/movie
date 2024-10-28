import {StyleSheet} from 'react-native';
import {
  horizontalModerateScale,
  textScale,
  verticalModerateScale,
} from '../../styles/responsiveUnits';

import {COLORS} from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

export const styles = StyleSheet.create({
  customButton: {
    borderRadius: 1000,
    paddingHorizontal: horizontalModerateScale(30),
    paddingVertical: verticalModerateScale(20),
   backgroundColor: COLORS?.PRIMARY
  },

  button: {
    gap: textScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: textScale(22),
    color: COLORS?.WHITE,
    textAlign: 'center',
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: '100%',
    height: '100%',
  },
});
