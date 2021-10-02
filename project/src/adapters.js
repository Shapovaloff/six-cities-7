export const adaptOffer = (offer) => {
  const adaptedOffer = {
    ...offer,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    host: {
      ...offer.host,
      isPro: offer.host.is_pro,
      avatarUrl: offer.host.avatar_url,
    },
  };

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

export const adaptReview = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const adaptUserInfo = (userInfo) => {
  const adaptedUserInfo = {
    ...userInfo,
    avatarUrl: userInfo.avatar_url,
    isPro: userInfo.is_pro,
  };

  delete adaptedUserInfo.token;
  delete adaptedUserInfo.avatar_url;
  delete adaptedUserInfo.is_pro;

  return adaptedUserInfo;
};
