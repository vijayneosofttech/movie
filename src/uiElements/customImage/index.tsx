import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from '@d11/react-native-fast-image';

interface CustomImageProps {
  testID?: string;
  source: number | Source | undefined;
  resizeMode?: ResizeMode;
  customContainerStyle?: StyleProp<ViewStyle>;
  customImageStyle?: StyleProp<ImageStyle>;
}

const CustomImage = ({
  testID,
  source,
  customImageStyle,
  resizeMode = 'contain',
  customContainerStyle,
}: CustomImageProps): React.JSX.Element => {
  return (
    <View style={customContainerStyle} testID={testID}>
      <FastImage
        source={source}
        resizeMode={resizeMode}
        style={customImageStyle}
      />
    </View>
  );
};

export default CustomImage;
