import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {COLORS} from '../../styles/colors';
import {CommonHeader} from '../../uiElements/commonHeader';
import {CustomButton} from '../../uiElements/customButton';
import CustomImage from '../../uiElements/customImage';
import {CustomText} from '../../uiElements/customText';
import {styles} from './style';
import {navigate} from '../../navigation/NavigationService';
import {SCREENS} from '../../utilities/screens';
import Video from 'react-native-video';

export interface MovieDetailProps {
  cover: string;
  title: string;
  overview: string;
}

export type MovieDetailParamList = {
  MovieDetail: MovieDetailProps;
};

export type RootRouteProps<RouteName extends keyof MovieDetailParamList> =
  RouteProp<MovieDetailParamList, RouteName>;

export const MovieDetail = (): React.JSX.Element => {
  const {cover, overview, title} =
    useRoute<RootRouteProps<'MovieDetail'>>().params;

  const [isPlaying, setIsPLaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const onPressWatchNow = () => {
    setIsPLaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      StatusBar.setHidden(true);
      setTimeout(() => {
        setIsFullscreen(true);
      }, 2000);
    } else {
      StatusBar.setHidden(false);
      StatusBar.setBackgroundColor(COLORS.BLACK);
    }
  }, [isPlaying]);

  return (
    <View style={styles.mainContainer}>
      <CommonHeader title={title || ''} showBackButton={true} />
      <ScrollView>
        {isPlaying ? (
          <Video
            testID="video"
            source={{
              uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
            }}
            style={styles.movieCover}
            controls={true}
            fullscreen={isFullscreen}
          />
        ) : (
          <CustomImage
            testID="movie-cover"
            source={{
              uri: 'https://image.tmdb.org/t/p/w500/' + cover,
            }}
            customImageStyle={styles.movieCover}
          />
        )}
        <CustomText customStyle={styles.movieTitle}>{title}</CustomText>
        <CustomText customStyle={styles.movieDesc}>{overview}</CustomText>
      </ScrollView>
      <CustomButton
        title={isPlaying ? 'Go Back' : 'Watch Now'}
        onPress={onPressWatchNow}
        variant={'primary'}
        customContainerStyle={styles.watchNowButtonContainer}
      />
    </View>
  );
};
