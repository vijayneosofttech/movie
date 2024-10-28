import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ICON_PATHS} from '../../utilities/iconPaths';
import {CustomText} from '../customText';
import {styles} from './style';
import {COLORS} from '../../styles/colors';
import {SCREENS} from '../../utilities/screens';
import {navigate} from '../../navigation/NavigationService';

interface MainHeaderProps {}

export const MainHeader = ({}: MainHeaderProps): React.JSX.Element => {
  const onPressSearch = () => {
    navigate(SCREENS.SEARCH);
  };

  return (
    <View style={styles.mainHeader}>
      <CustomText customStyle={styles.title}>{'TMDB'}</CustomText>

      <TouchableOpacity onPress={onPressSearch}>
        <ICON_PATHS.SEARCH fill={COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  );
};
