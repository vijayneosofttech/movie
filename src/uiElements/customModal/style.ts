import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {
  horizontalModerateScale,
  textScale,
  verticalModerateScale,
} from '../../styles/responsiveUnits';
import {FONTS} from '../../styles/fonts';

export const styles = StyleSheet.create({
  customModalBackdrop: {
    backgroundColor: COLORS.BLACK + 15,
    justifyContent: 'flex-end',
    flex: 1,
  },
  customModal: {
    paddingVertical: verticalModerateScale(30),
    paddingHorizontal: horizontalModerateScale(20),
    borderTopLeftRadius: horizontalModerateScale(20),
    borderTopRightRadius: horizontalModerateScale(20),
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalModerateScale(35),
  },
  headerTitle: {
    fontSize: textScale(20),
    fontFamily: FONTS.POPPINS_BOLD,
    flex: 1,
    textTransform: 'capitalize',
  },
  closeButtonContainer: {
    padding: horizontalModerateScale(4),
  },
});
