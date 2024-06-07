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
import getSingleProductSlice from './apiSlice/Product/getSingleProductSlice';
import getRelatedProductSlice from './apiSlice/Product/getRelatedProductSlice';
import updateProfileSlice from './apiSlice/Profile/updateProfileSlice';
import updatePasswordSlice from './apiSlice/Profile/updatePasswordSlice';
import putFeedBackSlice from './apiSlice/Profile/putFeedBackSlice';
import getOrderHistorySlice from './apiSlice/Profile/getOrderHistorySlice';
import getMyPointSlice from './apiSlice/Profile/getMyPointSlice';
import registerSlice from './apiSlice/Authentication/registerSlice';
import forgotPasswordSlice from './apiSlice/Authentication/forgotPasswordSlice';
import verifyOtpSlice from './apiSlice/Authentication/verifyOtpSlice';
import resetPasswordSlice from './apiSlice/Authentication/resetPasswordSlice';
import verifyEmailSlice from './apiSlice/Authentication/verifyEmailSlice';
import makePaymentIntentSlice from './apiSlice/Order/makePaymentIntentSlice';
import getSubCategoryById  from './apiSlice/Category/getSubCategoryByIdSlice';
import makeOrderSlice from './apiSlice/Order/makeOrderSlice';
import getAllCouponSlice from './apiSlice/Points/getAllCouponSlice';

export const store = configureStore({
    reducer:{
        // authentication
        login :loginSlice,
        register: registerSlice,
        forgotPassword: forgotPasswordSlice,
        verifyOtp: verifyOtpSlice,
        resetPassword: resetPasswordSlice,
        verifyEmail: verifyEmailSlice,

        // order
        makeOrder: makeOrderSlice,
        getCoupons: getAllCouponSlice,


        // home
        banner: getBannerSlice,
        getOffer: getOfferSlice,


        // category
        getCategory : getCategorySlice,
        getSubCategory : getSubCategorySlice,
        getSubCategoryPerCategory: getSubCategoryById,

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
        getProduct: getSingleProductSlice,
        getRelatedProduct: getRelatedProductSlice,

        // profile,
        getProfile: getProfileSlice,
        updateProfile: updateProfileSlice,
        updatePassword: updatePasswordSlice,
        putFeedBack: putFeedBackSlice,
        getOrders: getOrderHistorySlice,
        getPoints: getMyPointSlice,

        // 
        makePayment: makePaymentIntentSlice,
    }
})