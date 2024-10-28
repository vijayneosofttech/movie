import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {textScale} from '../../styles/responsiveUnits';
import {styles} from './style';

interface CustomTextProps {
  textProps?: TextProps;
  customStyle?: TextStyle | Array<StyleProp<TextStyle>>;
  children?: ReactNode;
  removeCustomLineHeight?: boolean;
  onPress?: () => void;
}

export const CustomText = ({
  textProps,
  customStyle,
  children,
  removeCustomLineHeight = false,
  onPress,
}: CustomTextProps): React.JSX.Element => {
  const flattenedStyle = StyleSheet.flatten(customStyle);

  const customLineHeight =
    flattenedStyle && flattenedStyle?.fontSize
      ? flattenedStyle?.fontSize + textScale(4)
      : textScale(16);

  return (
    <Text
      {...textProps}
      style={[
        styles?.customText,

        {
          fontSize:
            flattenedStyle && flattenedStyle?.fontSize
              ? flattenedStyle?.fontSize
              : textScale(12),
        },

        !removeCustomLineHeight && {lineHeight: customLineHeight},

        customStyle,
      ]}
      allowFontScaling={false}
      onPress={onPress}>
      {children}
    </Text>
  );
};
