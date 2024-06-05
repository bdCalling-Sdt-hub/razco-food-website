import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './apiSlice/Authentication/loginSlice';
import getCategorySlice from './apiSlice/Category/getCategorySlice';
import getBannerSlice from './apiSlice/Home/getBannerSlice';
import getOfferSlice from './apiSlice/getOfferSlice';
import getShopSlice from './apiSlice/Shop/getShopSlice';
import getAboutSlice from './apiSlice/getAboutSlice';
import getContactUsSlice from './apiSlice/getContactUs';
import getFaqSlice from './apiSlice/getFaqSlice';
import getPrivacyPolicySlice from './apiSlice/getPrivacySlice';
import getTermsAndConditionSlice from './apiSlice/getTermsAndConditionSlice';
import getCartSlice from './apiSlice/getCartSlice';
import getWishSlice from './apiSlice/getWishSlice';
import getProductListSlice from './apiSlice/Product/getProductListSlice';
import getSubCategorySlice from './apiSlice/Category/getSubCategorySlice';
import makeWishSlice from './apiSlice/Wish/makeWishSlice';
import makeCartSlice from './apiSlice/Cart/makeCartSlice';
import removeCartSlice from './apiSlice/Cart/removeCartSlice';
import getProfileSlice from './apiSlice/Profile/getProfileSlice';

export const store = configureStore({
    reducer:{
        // authentication
        login :loginSlice,

        // home
        banner: getBannerSlice,
        getOffer: getOfferSlice,


        // category
        getCategory : getCategorySlice,
        getSubCategory : getSubCategorySlice,

        getShop: getShopSlice,
        getAbout: getAboutSlice,
        getContact: getContactUsSlice,
        getFaq: getFaqSlice,
        getPrivacyPolicy: getPrivacyPolicySlice,
        getTerms: getTermsAndConditionSlice,

        // cart
        makeCart: makeCartSlice,
        getCart: getCartSlice,
        removeCart: removeCartSlice,

        // wish
        getWish: getWishSlice,
        makeWish: makeWishSlice,


        // products
        getProducts: getProductListSlice,

        // profile,
        getProfile: getProfileSlice,

    }
})