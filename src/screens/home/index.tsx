import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {NoDataFound} from '../../components/NoDataFound';
import {navigate} from '../../navigation/NavigationService';
import {fetchActionMovies} from '../../redux/slices/actionMoviesSlice';
import {fetchOnTheAirTv} from '../../redux/slices/onTheAirTvSlice';
import {fetchPopularMovies} from '../../redux/slices/popularMoviesSlice';
import {fetchPopularTv} from '../../redux/slices/popularTvSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {COLORS} from '../../styles/colors';
import CustomImage from '../../uiElements/customImage';
import {CustomText} from '../../uiElements/customText';
import {MainHeader} from '../../uiElements/mainHeader';
import {SCREENS} from '../../utilities/screens';
import {styles} from './style';

interface HomeProps {}
interface CarouselListProps {
  contentType: 'popularMovies' | 'popularTvShow' | 'actionMovie' | 'onTheAir';
}
interface CarouselListItemProps {
  cover: string;
  title: string;
  overview: string;
}

const MovieCard = ({cover, title, overview}: CarouselListItemProps) => {
  const onPressMovie = () => {
    navigate(SCREENS.MOVIE_DETAIL, {
      cover: cover,
      title: title,
      overview: overview,
    });
  };
  return (
    <TouchableOpacity style={styles.movieCardContainer} onPress={onPressMovie}>
      <CustomImage
        source={{uri: 'https://image.tmdb.org/t/p/w500' + cover}}
        customImageStyle={styles.movieCover}
        resizeMode="cover"
      />
      <CustomText
        customStyle={styles.movieTitle}
        textProps={{numberOfLines: 2}}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export const Carousel = ({
  contentType,
}: CarouselListProps): React.JSX.Element => {
  const {popularMovies, popularTv, actionMovies, onTheAirTv} = useSelector(
    (state: RootState) => ({
      popularMovies: state.popularMovies.popularMovies,
      popularTv: state.popularTv.popularTv,
      actionMovies: state.actionMovies.actionMovies,
      onTheAirTv: state.onTheAirTv.onTheAirTv,
    }),
    shallowEqual,
  );

  const renderFeedPostItem = useCallback(
    ({
      item,
      index,
    }: {
      item: {
        poster_path: string;
        title: string;
        overview: string;
      };
      index: number;
    }) => (
      <MovieCard
        key={'feed-post-media-' + index}
        cover={item.poster_path}
        title={item.title}
        overview={item.overview}
      />
    ),
    [],
  );

  return (
    <View>
      <FlatList
        data={
          contentType === 'popularMovies'
            ? popularMovies.results
            : contentType === 'popularTvShow'
            ? popularTv.results
            : contentType === 'actionMovie'
            ? actionMovies.results
            : contentType === 'onTheAir'
            ? onTheAirTv.results
            : []
        }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderFeedPostItem}
        keyExtractor={(item, index) => `feed-media-list--${index}`}
        contentContainerStyle={styles.movieListContainerStyle}
        ListHeaderComponent={<View />}
        ListFooterComponent={<View />}
        ListEmptyComponent={<NoDataFound />}
      />
    </View>
  );
};

export const Home = ({}: HomeProps): React.JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    popularMoviesLoading,
    actionMoviesLoading,
    onTheAirTvLoading,
    popularTvLoading,
  } = useSelector(
    (state: RootState) => ({
      popularMoviesLoading: state.popularMovies.popularMoviesLoading,
      popularTvLoading: state.popularMovies.popularTvLoading,
      actionMoviesLoading: state.popularMovies.actionMoviesLoading,
      onTheAirTvLoading: state.popularMovies.onTheAirTvLoading,
    }),
    shallowEqual,
  );

  const fetchHomeData = () => {
    dispatch(fetchPopularMovies());
    dispatch(fetchPopularTv());
    dispatch(fetchActionMovies());
    dispatch(fetchOnTheAirTv());
  };

  useEffect(() => {
    StatusBar.setBackgroundColor(COLORS.BLACK);
    fetchHomeData();
  }, []);

  return (
    <ScrollView
      style={[styles.mainContainer]}
      stickyHeaderIndices={[0]}
      refreshControl={
        <RefreshControl
          refreshing={
            popularMoviesLoading ||
            actionMoviesLoading ||
            onTheAirTvLoading ||
            popularTvLoading
          }
          onRefresh={() => {
            fetchHomeData();
          }}
        />
      }>
      <MainHeader />
      <CustomText customStyle={styles.sectionTitle}>
        {'Popular Movies'}
      </CustomText>
      <Carousel contentType="popularMovies" />

      <CustomText customStyle={styles.sectionTitle}>
        {'Popular Tv Shows'}
      </CustomText>
      <Carousel contentType="popularTvShow" />

      <CustomText customStyle={styles.sectionTitle}>
        {'Action Movies'}
      </CustomText>
      <Carousel contentType="actionMovie" />

      <CustomText customStyle={styles.sectionTitle}>
        {'On The Air Tv Shows'}
      </CustomText>
      <Carousel contentType="onTheAir" />
    </ScrollView>
  );
};
