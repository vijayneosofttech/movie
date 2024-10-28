import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {FONTS} from '../../styles/fonts';
import {textScale} from '../../styles/responsiveUnits';

export const styles = StyleSheet.create({
  noDataFound: {
    alignItems: 'center',
  },
  description: {
    fontFamily: FONTS?.POPPINS_REGULAR,
    fontSize: textScale(15),
    color: COLORS?.WHITE + '65',
    textAlign: 'center',
  },
});
