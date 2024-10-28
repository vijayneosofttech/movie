import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {NoDataFound} from '../../components/NoDataFound';
import {navigate} from '../../navigation/NavigationService';
import {searchMovie, searchTvShow} from '../../redux/slices/searchSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {COLORS} from '../../styles/colors';
import {CommonHeader} from '../../uiElements/commonHeader';
import CustomImage from '../../uiElements/customImage';
import {CustomInput} from '../../uiElements/customInput';
import {CustomText} from '../../uiElements/customText';
import {SCREENS} from '../../utilities/screens';
import {styles} from './style';

interface SearchProps {}
interface MovieCardItemProps {
  cover: string;
  title: string;
  overview: string;
}

const MovieCard = ({cover, title, overview}: MovieCardItemProps) => {
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

export const Search = ({}: SearchProps): React.JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeSection, setActiveSection] = useState<'movies' | 'tvshows'>(
    'movies',
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {searchLoading, search} = useSelector(
    (state: RootState) => ({
      searchLoading: state.search.searchLoading,
      search: state.search.search,
    }),
    shallowEqual,
  );

  useEffect(() => {
    if (activeSection === 'movies') {
      if (searchQuery.trim() == '') {
        dispatch(searchMovie(''));
      } else {
        dispatch(searchMovie(searchQuery.trim()));
      }
    } else {
      if (searchQuery.trim() == '') {
        dispatch(searchTvShow(''));
      } else {
        dispatch(searchTvShow(searchQuery));
      }
    }
  }, [activeSection, searchQuery]);

  useEffect(() => {
    StatusBar.setBackgroundColor(COLORS.BLACK);
  }, []);

  const renderSearchItem = useCallback(
    ({
      item,
      index,
    }: {
      item: {
        poster_path: string;
        title: string;
        overview: string;
        name: string;
      };
      index: number;
    }) => (
      <MovieCard
        key={'feed-post-media-' + index}
        cover={item.poster_path}
        title={activeSection === 'movies' ? item.title : item.name}
        overview={item.overview}
      />
    ),
    [activeSection],
  );

  return (
    <View style={styles.mainContainer}>
      <CommonHeader title="Search" showBackButton={true} />
      <View style={styles.contentContainer}>
        <CustomInput
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search here.."
        />

        <View style={styles.sectionContainer}>
          <TouchableOpacity onPress={() => setActiveSection('movies')}>
            <CustomText
              customStyle={
                activeSection === 'movies'
                  ? styles.activeSectionTitle
                  : styles.inActiveSectionTitle
              }>
              {'Movies'}
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveSection('tvshows')}>
            <CustomText
              customStyle={
                activeSection === 'tvshows'
                  ? styles.activeSectionTitle
                  : styles.inActiveSectionTitle
              }>
              {'TV Shows'}
            </CustomText>
          </TouchableOpacity>
        </View>

        <FlatList
          data={search.results || []}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          renderItem={renderSearchItem}
          keyExtractor={(item, index) => `search-list--${index}`}
          contentContainerStyle={styles.movieListContainerStyle}
          columnWrapperStyle={styles.movieListContainerStyle}
          ListHeaderComponent={<View />}
          ListFooterComponent={<View />}
          ListEmptyComponent={<NoDataFound />}
          refreshControl={<RefreshControl refreshing={searchLoading} />}
        />
      </View>
    </View>
  );
};
