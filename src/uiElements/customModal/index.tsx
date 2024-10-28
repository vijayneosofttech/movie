import React, {ReactNode} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {CustomText} from '../customText';
import {COLORS} from '../../styles/colors';
import {horizontalScale, verticalScale} from '../../styles/responsiveUnits';
import {ICON_PATHS} from '../../utilities/iconPaths';

interface CustomModalProps {
  visible: boolean;
  children: ReactNode;
  title: string;
  onClickClose: () => void;
  theme?: 'dark' | 'light';
}

export const CustomModal = ({
  visible,
  children,
  title,
  onClickClose,
  theme = 'light',
}: CustomModalProps): React.JSX.Element => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        onClickClose();
      }}>
      <TouchableOpacity
        style={styles.customModalBackdrop}
        activeOpacity={1}
        onPress={() => onClickClose()}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.customModal,
            {
              backgroundColor: theme === 'light' ? COLORS?.WHITE : '#1F1F1F',
            },
          ]}>
          <View style={styles.headerContainer}>
            <CustomText
              customStyle={[
                styles.headerTitle,
                {color: theme === 'light' ? COLORS?.BLACK : COLORS?.WHITE},
              ]}
              textProps={{numberOfLines: 1}}>
              {title || ''}
            </CustomText>
            <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={() => onClickClose()}>
              <ICON_PATHS.CROSS
                stroke={theme === 'light' ? COLORS?.BLACK : COLORS?.WHITE}
                strokeWidth={2}
                width={horizontalScale(15)}
                height={verticalScale(15)}
              />
            </TouchableOpacity>
          </View>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
