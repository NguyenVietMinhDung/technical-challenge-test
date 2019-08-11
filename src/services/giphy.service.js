const URL = 'https://api.giphy.com/v1/gifs/trending';
const API_KEY = 'uRx3z5haG5TmNXxAZtCUq1BgPOuo2Jil';
const LIMITATION = 20;

const getImages = offset => (
  fetch(`${URL}?api_key=${API_KEY}&limit=${LIMITATION}&offset=${offset}`)
    .then(res => res.json())
    .then(jsonRes => jsonRes.data.map(item => ({
      key: item.id,
      link: item.url,
      imgUrl: item.images.downsized.url,
      avatarUrl: item.user ? item.user.avatar_url : null,
      username: item.user ? item.user.username : null,
    })))
);

export default getImages;
