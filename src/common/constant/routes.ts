export class Routes {
  static PAGE_NOT_FOUND = "/page-not-found";
  static PAYMENT_PENDING = "/payment-pending";
  static ABOUT_US = "/about-us";
  static LEGAL = "/legal";
  static PRODUCTS = "/shop/";
  static DASHBOARD = "/home";
  static PRODUCT_DETAIL = "/shop/product/";
  static PRODUCT_REVIEW = "/shop/product-review";
  static FEATURED_PRODUCTS = "/shop/featured-product";
  static SUCCESS = "/checkout/success";

  static CART = "/checkout/cart";
  static CHECKOUT = "/checkout/address";
  static PAYMENT = "/checkout/payment";
  static CATEGORY = "/shop/category";
  static CONTACT_US = "/contact-us";
  static COLLECTION = "/shop/collection";
  static BRAND = "/shop/brand";

  static FAQ = "/faqs";

  static ACCOUNT_PHONE_LOGIN = "/auth/customer/register";

  /**
   * Account Routes
   */
  static ACCOUNT_PROFILE = "/account/profile";
  static ACCOUNT_ADDRESS = "/account/address";
  static ACCOUNT_ORDER_HISTORY = "/account/order-history";
  static ACCOUNT_ORDER_DETAIL = "/account/order-detail";
  static ACCOUNT_WALLET = "/account/wallet";
  static ACCOUNT_WISHLIST = "/account/wishlist";
  static ACCOUNT_OVERVIEW = "/account/overview";
  static ACCOUNT_BULK_ORDER_HISTORY = "/account/bulk-order-history";
  static ACCOUNT_BULK_ORDER_REVIEW = "/account/bulk-order-review";
  //  static ACCOUNT_DISCOUNT="/account/discount"
  static ACCOUNT_GIFT_CARD = "/account/gift-card";
  //  static ACCOUNT_GIFT_CARD_BUY= "/account/gift-card/buy"
  static ACCOUNT_PROMO_WALLET = "/account/promo-wallet";
  //  static ACCOUNT_CHAT="/account/chat"

  /**
   * keys to be used for mobile view header section validation
   */
  static ACCOUNT_KEY = "account";
  static PRODUCT_KEY = "product";
  static PRODUCT_REVIEW_KEY = "product-review";
  static SHOP_KEY = "shop";

  static ONDC_ORDER_TRACKING = "ONDC/tracking";

  static BULK_ORDER = "/bulk-order";
  static BULK_ORDER_HISTORY = "/account/bulk-order-history";
}
