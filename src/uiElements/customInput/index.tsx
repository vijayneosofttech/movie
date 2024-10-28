import React, {ReactNode, useState} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Pressable,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../styles/colors';
import {CustomText} from '../customText';
import {styles} from './style';

interface CustomInputProps {
  ref?: React.LegacyRef<View>;
  inputRef?: React.LegacyRef<TextInput>;
  placeholder?: string;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
  editable?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
  multiline?: boolean;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'creditCardExpiration'
    | 'creditCardExpirationMonth'
    | 'creditCardExpirationYear'
    | 'creditCardSecurityCode'
    | 'creditCardType'
    | 'creditCardName'
    | 'creditCardGivenName'
    | 'creditCardMiddleName'
    | 'creditCardFamilyName'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | 'birthdate'
    | 'birthdateDay'
    | 'birthdateMonth'
    | 'birthdateYear';
  textInputProps?: TextInputProps;
  showLengthCounter?: boolean;
  error?: string;

  customContainerStyle?: StyleProp<ViewStyle>;
  customInputContainerStyle?: StyleProp<ViewStyle>;
  customInputStyle?: StyleProp<TextStyle>;

  onChangeText?: (text: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

export const CustomInput = ({
  ref,
  inputRef,
  placeholder,
  value,
  keyboardType,
  returnKeyType,
  secureTextEntry,
  editable,
  autoCapitalize,
  maxLength,
  multiline,
  textContentType,
  textInputProps,
  showLengthCounter,
  error,

  onChangeText,

  onSubmitEditing,

  customContainerStyle,
  customInputContainerStyle,
  customInputStyle,
}: CustomInputProps): React.JSX.Element => {
  return (
    <View style={[styles?.customInput, customContainerStyle]} ref={ref}>
      {/* Input Container */}
      <View
        style={[
          styles?.inputContainer,
          {borderColor: error ? COLORS?.ERROR : COLORS?.WHITE + 35},
          customInputContainerStyle,
        ]}>
        {/* Input */}
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={COLORS?.GRAY}
          value={value}
          editable={editable}
          multiline={multiline}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize || 'sentences'}
          textContentType={textContentType}
          maxLength={maxLength}
          onChangeText={value => onChangeText && onChangeText(value)}
          onSubmitEditing={e => onSubmitEditing && onSubmitEditing(e)}
          style={[styles.input, customInputStyle]}
          {...textInputProps}
        />
      </View>

      <View style={styles?.lengthAndErrorContainer}>
        {/* Error */}
        {error ? (
          <CustomText customStyle={styles?.error}>{error}</CustomText>
        ) : (
          <View style={{flex: 1}}></View>
        )}

        {/* Length Counter */}
        {showLengthCounter && maxLength ? (
          <CustomText customStyle={styles?.lengthCounter}>
            {value?.length + ' / ' + maxLength}
          </CustomText>
        ) : null}
      </View>
    </View>
  );
};
