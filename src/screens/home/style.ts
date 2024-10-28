import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';
import { COMMON_STYLES, SCREEN_DIMENSIONS } from '../../styles/common';
import { FONTS } from '../../styles/fonts';
import { textScale, verticalModerateScale, verticalScale } from '../../styles/responsiveUnits';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor : COLORS.BLACK
  },
  sectionTitle: {
    fontSize: textScale(22),
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    marginHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    marginBottom: verticalModerateScale(12),
    marginTop: verticalModerateScale(22),
    color: COLORS.WHITE,
  },

  movieListContainerStyle: {
    gap: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
  },
  movieCardContainer: {
    width : SCREEN_DIMENSIONS.WINDOW_WIDTH/2.5,
    borderRadius : verticalScale(12)
  },
  movieCover: {
    width: '100%',
    height: SCREEN_DIMENSIONS.WINDOW_HEIGHT / 3.5,
    borderRadius: verticalScale(12),
    backgroundColor : COLORS.GRAY
  },
  movieTitle: {
    color: COLORS.WHITE,
    fontSize: textScale(14),
    marginTop : verticalModerateScale(12)
  },
});
