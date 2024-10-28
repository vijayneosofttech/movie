import {StyleSheet} from 'react-native';
import {
  horizontalModerateScale,
  textScale,
  verticalModerateScale,
} from '../../styles/responsiveUnits';
import {FONTS} from '../../styles/fonts';
import {COLORS} from '../../styles/colors';

export const styles = StyleSheet.create({
  customInput: {},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    columnGap: horizontalModerateScale(10),
    borderRadius: verticalModerateScale(10),
  },
  leftComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: horizontalModerateScale(24),
  },
  input: {
    flex: 1,
    fontFamily: FONTS?.POPPINS_REGULAR,
    fontSize: textScale(15),
    color: COLORS?.WHITE,
    paddingVertical: verticalModerateScale(14),
    paddingHorizontal: horizontalModerateScale(24),
    borderRadius: verticalModerateScale(10),
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  rightComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: horizontalModerateScale(24),
  },
  lengthAndErrorContainer: {
    flexDirection: 'row',
    gap: verticalModerateScale(20),
    marginTop: verticalModerateScale(5),
  },
  error: {
    flex: 1,
    fontFamily: FONTS?.POPPINS_REGULAR,
    fontSize: textScale(12),
    color: COLORS?.ERROR,
  },
  lengthCounter: {
    fontFamily: FONTS?.POPPINS_REGULAR,
    fontSize: textScale(12),
    color: COLORS?.BLACK + 50,
  },
});
