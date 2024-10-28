import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {COMMON_STYLES, SCREEN_DIMENSIONS} from '../../styles/common';
import {FONTS} from '../../styles/fonts';
import {
  horizontalModerateScale,
  textScale,
  verticalModerateScale,
  verticalScale,
} from '../../styles/responsiveUnits';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalModerateScale(22),
    marginTop: verticalModerateScale(12),
  },
  activeSectionTitle: {
    fontSize: textScale(22),
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    color: COLORS.WHITE,
  },
  inActiveSectionTitle: {
    fontSize: textScale(18),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.WHITE + 50,
  },

  movieListContainerStyle: {
    gap: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
  },
  movieCardContainer: {
    width:
      (SCREEN_DIMENSIONS.WINDOW_WIDTH -
        COMMON_STYLES.SCREEN_HORIZONTAL_SPACING * 3) /
      2,
    borderRadius: verticalScale(12),
  },
  movieCover: {
    width: '100%',
    height: SCREEN_DIMENSIONS.WINDOW_HEIGHT / 3.5,
    borderRadius: verticalScale(12),
    backgroundColor: COLORS.GRAY,
  },
  movieTitle: {
    color: COLORS.WHITE,
    fontSize: textScale(14),
    marginTop: verticalModerateScale(12),
  },
});
