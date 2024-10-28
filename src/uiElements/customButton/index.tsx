import React, {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../styles/colors';
import {CustomText} from '../customText';
import {styles} from './style';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant: 'primary' | 'secondary';
  customContainerStyle?: ViewStyle | Array<StyleProp<ViewStyle>>;
  customButtonStyle?: ViewStyle | Array<StyleProp<ViewStyle>>;
  customTextStyle?: TextStyle | Array<StyleProp<TextStyle>>;
  disabled?: boolean;
  loading?: boolean;
}

export const CustomButton = ({
  title,
  onPress,
  variant,
  customContainerStyle,
  customButtonStyle,
  customTextStyle,
  disabled,
  loading,
}: CustomButtonProps): React.JSX.Element => {
  return (
    <Pressable
      style={[
        styles?.customButton,
        {
          opacity: disabled ? 0.5 : 1,
        },
        customContainerStyle,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <View
        style={[styles?.button, loading && {opacity: 0.5}, customButtonStyle]}>
        <CustomText
          textProps={{numberOfLines: 1}}
          customStyle={[styles?.text, customTextStyle]}
          removeCustomLineHeight={true}>
          {title}
        </CustomText>
      </View>

      {/* Loading */}
      {loading == true ? (
        <ActivityIndicator
          color={COLORS?.WHITE}
          size="small"
          style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
        />
      ) : null}
    </Pressable>
  );
};
