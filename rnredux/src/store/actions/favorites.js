export const addFavoriteRequest = repoName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repoName,
  },
});

export const addFavoriteSuccess = favorite => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: {
    favorite,
  },
});

export const addFavoriteError = message => ({
  type: 'ADD_FAVORITE_ERROR',
  payload: {
    message,
  },
});
