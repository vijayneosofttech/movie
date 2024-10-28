import { BASE_URL } from '../redux/services/apiTypes';


// Get Image Source
export const getImageSource = (url: string = '') => {
  let path = '';
  if (url) {
    const str = url;
    const n = str?.includes('http');
    if (n) {
      path = url;
    } else {
      path = BASE_URL + '/' + url;
    }
    return {uri: path};
  }
};
