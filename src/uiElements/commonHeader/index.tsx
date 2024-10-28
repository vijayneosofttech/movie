import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {horizontalModerateScale} from '../../styles/responsiveUnits';
import {ICON_PATHS} from '../../utilities/iconPaths';
import {CustomText} from '../customText';
import {styles} from './style';
import {back} from '../../navigation/NavigationService';
import {COLORS} from '../../styles/colors';

interface CommonHeaderProps {
  title: string;
  showBackButton: boolean;
}

export const CommonHeader = ({
  title,
  showBackButton,
}: CommonHeaderProps): React.JSX.Element => {
  const onPressBack = () => {
    back();
  };

  return (
    <View style={[styles.mainContainer]}>
      <View style={styles.iconContainer}>
        {showBackButton ? (
          <TouchableOpacity
            onPress={onPressBack}
            style={{
              paddingVertical: horizontalModerateScale(4),
            }}>
            <ICON_PATHS.LEFT_ARROW fill={COLORS.WHITE} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.titleContainer}>
        <CustomText customStyle={styles.title} textProps={{numberOfLines: 1}}>
          {title}
        </CustomText>
      </View>
    </View>
  );
};
