import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';
import { COMMON_STYLES, SCREEN_DIMENSIONS } from '../../styles/common';
import { FONTS } from '../../styles/fonts';
import { textScale, verticalModerateScale } from '../../styles/responsiveUnits';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.BLACK,
    flex:1
  },
  sectionTitle: {
    fontSize: textScale(22),
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    marginHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    marginBottom: verticalModerateScale(12),
    marginTop: verticalModerateScale(22),
    color: COLORS.WHITE,
  },
  movieCover: {
    width : SCREEN_DIMENSIONS.WINDOW_WIDTH ,
    height: SCREEN_DIMENSIONS.WINDOW_WIDTH,
    backgroundColor: COLORS.GRAY+20,
    alignSelf : 'center'
  },
  movieTitle: {
    fontSize: textScale(20),
    fontFamily : FONTS.POPPINS_MEDIUM,
    color: COLORS.WHITE,
    marginHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    marginTop : verticalModerateScale(12)
  },
  movieDesc: {
    fontSize: textScale(16),
    color: COLORS.GRAY,
    marginHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    marginTop : verticalModerateScale(12)
  },
  watchNowButtonContainer: {
    marginHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    marginBottom :COMMON_STYLES.SCREEN_VERTICAL_SPACING
  }
});
