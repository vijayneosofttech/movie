import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../../uiElements/customText';
import {styles} from './style';

interface NoDataFoundProps {
  description?: string;
}

export const NoDataFound = ({
  description,
}: NoDataFoundProps): React.JSX.Element => {
  return (
    <View style={styles.noDataFound}>
      <CustomText
        children={description || 'No data found.'}
        customStyle={styles?.description}
      />
    </View>
  );
};
