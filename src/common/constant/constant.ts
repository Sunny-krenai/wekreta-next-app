export class Constants {
  static firebaseUrl: string =
    "https://firebasestorage.googleapis.com/v0/b/images.krenai.com/o/";
  static krenaiImageUrl: string = "https://images.krenai.com/";
  static ccAvenueRedirectUrl: string =
    "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";
  static shareWhatsAppUrl: string = "https://web.whatsapp.com/send?text=";
  // static shareGmailUrl: string = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&su=Krenai_Referal&body=';
  static SHAREABLE_URL: string = "https://admin.krenai.work/auth/register";
  static HOT_DEALS = "hot deals";
  static TYPE_CATEGORY = "category";
  static TYPE_SUB_CATEGORY = "subCategory";
  static TYPE_SUB_SUB_CATEGORY = "subSubCategory";
  static CATEGORY_MASTER_TYPE = "CATEGORY";
  static PRODUCT_LIST_MASTER_TYPE = "PRODUCTLIST";
  static PRODUCT_DETAIL_MASTER_TYPE = "PRODUCTDETAIL";
  static STORE_FRONT_MASTER_TYPE = "STOREFRONT";
  static EMPTY_STRINGS = [null, undefined, "", "N/A", "n/a", " "];

  static SESSION_ID = "SessionId";

  public static SERVER_NOT_AVAILABLE =
    "Server is not able to process your request right now, Please try again later.";
  static ON_IMAGE = "onImage";
  static BELOW_IMAGE = "belowImage";
  static NO_IMAGE = "noImage";
  static NO_NAME = "noName";

  static LARGE_IMAGE = "largeImg";
  static MEDIUM_IMAGE = "mediumImg";
  static SMALL_IMAGE = "smallImg";

  static SQUARE_IMAGE = "square";
  static LANDSCAPE_4_3_IMAGE = "landscape_4_3";
  static LANDSCAPE_3_2_IMAGE = "landscape_3_2";
  static POTRAIT_3_4_IMAGE = "potrait_3_4";
  static POTRAIT_2_3_IMAGE = "potrait_2_3";

  static CONTENT_CENTER = "onImage";
  static CONTENT_LEFT = "belowImage";
  static CONTENT_RIGHT = "noImage";
  static JUSTIFY_CONTENT = "noName";

  static CUSTOMER = "Customer";
  static SUPPLIER = "Supplier";

  static KRENAI_IMAGE_BASE_URL = "https://images.krenai.com";

  static FEATURED = "Featured";
  static NAME_A_TO_Z = "Product - A to Z";
  static NAME_Z_TO_A = "Product - Z to A";
  static RELEASE_DATE = "Default";
  static LAST_FIRST = "Product - Last First";
  static NEWEST_FIRST = "Product - Newest First";
  static LOW_TO_HIGH = "Price - Low to High";
  static HIGH_TO_LOW = "Price - High to Low";
  static smallGridItemsPerPageArray: number[] = [8, 16, 40, 80];
  static mediumGridItemsPerPageArray: number[] = [6, 12, 30, 90];
  static largeGridItemsPerPageArray: number[] = [6, 12, 30, 90];

  /**
   * Paytm credeintials
   */

  /**
   * Database helper constants
   */
  static ID = "id";
  static MASTER_TYPE = "masterType";
  // static STORE_DOMAIN = "storeDomain";
  static STORE_UUID = "storeUuid";
  static ITEM_PER_PAGE = "itemsPerPage";
  static CURRENT_PAGE = "currentPage";
  static SORT_BY = "sortBy";
  static SORT_ORDER = "sortOrder";
  static SEARCH_BY = "searchBy";
  static SEARCH = "search";
  static STORE_ID = "storeId";
  static CREATED_DATE = "createdDate";
  static SELLING_PRICE = "sellingPrice";

  static ASCENDING = "asc";
  static DECENDING = "desc";
  static RATING = "rating";
  static STOREFRONT = "storefront";
  /**
   * Authentication constants
   */
  static TOKEN = "idToken";
  static REFRESH_TOKEN = "refreshToken";
  static FCM_TOKEN = "fcmToken";

  static SEARCH_TAG = "searchTag";
  static CATEGORY_NAME = "categoryName";
  static SUB_CATEGORY_NAME = "subCategoryName";
  static SUB_SUB_CATEGORY_NAME = "subSubCategoryName";
  static CUSTOMER_UUID = "customerUuid";
  static COLLECTION = "collection";

  static WEB = "WEBSITE";

  static CART = "cartId";
  static LAST_ACTION_INCART = "In Cart";
  static LAST_ACTION_CHECKOUT = "Checkout";
  // "/checkout/payment"
  public static HIDE_COMMON_COMPONENT = [
    "/auth/customer/login",
    "/auth/customer/register",
    "/ondc/tracking",
    "/payment-pending",
  ];
  public static HIDE_MENU = [
    "/auth/customer/login",
    "/auth/customer/register",
    "/checkout/cart",
    "/ondc/tracking",
    "/payment-pending",
  ];
  public static HIDE_COMMON_COMPONENT_CHECKOUT_ROUTES = [
    "/checkout/address",
    "/checkout/payment",
    "/checkout/success",
  ];
  public static HIDE_ACCOUNT_MENUE = ["/account/wishlist"];

  /**
   * customer registeration keys
   */
  static PHONE = "phone";
  static OTP = "otp";

  /**
   * Status keys
   */
  static RETURNED = "Returned";
  static ACCEPTED = "Accepted";

  static PICKED_UP = "Order-picked-up";

  static CANCELLED = "Cancelled";
  static DELIVERED = "Delivered";
  static INTRANSIT = "In- transit";
  static RTO_STATUS = "RTO Process";
  static ACTIVE_ORDER = 3;
  static ACCEPTED_ORDER = 4;
  static TRANSITE_ORDER = 5;
  static COMPLETED_ORDER = 6;
  static CANCELLED_ORDER = 7;
  static PICKED_UP_ORDER = 58;
  static PAYMENT_FAILED_ORDER = 49;
  static OUT_FOR_DELIVERY_ORDER = 57;
  static REFUND_REQUESTED = 10;
  static REFUND_APPROVED = 11;
  static REFUND_REJECTED = 12;
  static REFUND_PICKUP = 13;
  static REFUNDED = 14;
  static UNUSED_GIFTCARD = 32;

  static ALL_ORDER: number[] = [3, 4, 5, 6, 7, 49, 58, 57, 52, 53, 54, 55];
  static RTO_ORDERS: number[] = [52, 53, 54, 55];

  static ORDER_OUT_FOR_DELIVERY = "Out For Delivery";
  static ORDER_OUT_FOR_DELIVERY_ORDER = 57;

  /**
   * activity log
   */
  public static ACTIVE_STATE = "Active";
  public static ACCEPTED_STATUS = "Accepted";
  public static SHIPPED_STATUS = "Shipped";
  public static COMPLETED_STATUS = "Completed";
  public static CANCELLED_STATUS = "Cancelled";
  public static TRANSIT_STATUS = "Transit";
  public static DELIVERED_STATUS = "Delivered";
  public static READY_FOR_PICKUP_STATUS = "Ready For Pickup";
  //   public static RTO_STATUS="RTO Process";

  public static OUT_FOR_DELIVERY_STATUS = "Out For Delivery";

  static WEBHOOK = "Webhook";
  static SHIPPED = "Shipped";
  static ACTIVE = "ACTIVE";
  static REFUND_REQUESTED_STRING = "Refund Requested";
  static REFUND_APPROVED_STRING = "Refund Approved";
  static REFUND_REJECTED_STRING = "Refund Rejected";
  static REFUND_PICKUP_STRING = "Refund Pickup";
  static REFUNDED_STRING = "Refunded";
  //    static RETURNED="Returned";

  static GEOLOCATION = "geolocation";
  /**
   * Wishlist
   */
  static PRODUCT_ID = "productId";

  /**
   * shipping Address keys -> used in cart service
   */
  static SHIP_TO = "shipTo";
  static BILL_TO = "billTo";

  /**
   * coupon keys-> used in coupon service
   */
  static COUPON_ID = "couponId";
  static COUPON_CODE = "couponCode";
  /**
   * coupon type
   */
  static VALUE_PERCENT = "Percent";
  static VALUE_FLAT = "Fixed";
  static FREE_SHIPPING = "Free Shipping";
  static COUPON_VALIDATED_MESSAGE = "Coupon Successfully validated";

  /**
   * payment mode
   */
  static PAYMENT_MODE_WALLET = "WALLET";
  static PAYMENT_MODE_ONLINE = "ONLINE";
  static PAYMENT_MODE_COD = "COD";
  // static PAYMENT_MODE_PARTIAL = "PARTIAL";
  static PAYMENT_MODE_GIFT_CARD = "GIFT CARD";

  static PAYMENT_SOURCE_COD_ID = 4;
  static PAYMENT_SOURCE_WALLET_ID = 6;
  static PAYMENT_SOURCE_RAZORPAY_ID = 2;
  static PAYMENT_SOURCE_PAYTM_ID = 1;
  static PAYMENT_SOURCE_CCAVENUE_ID = 7;

  static PAYMENT_SOURCE_RAZORPAY = "RAZORPAY";
  static PAYMENT_SOURCE_PAYTM = "PAYTM";
  static PAYMENT_SOURCE_CCAVENUE = "CC AVENUE";
  static PAYMENT_SOURCE_COD = "COD";
  static PAYMENT_SOURCE_GIFT_CARD = "GIFT CARD";
  static PAYMENT_SOURCE_WALLET = "WALLET";

  static PAYTM_MERCHENT_ID = 1;
  static PAYTM_KEY = 2;
  static PAYTM_INDUSTRY_TYPE = 3;
  static PAYTM_WEBSITE = 4;

  static RAZORPAY_KEY_ID = 5;
  static RAZORPAY_KEY_SECRET_ID = 6;

  /**
   * wallet constants
   */
  static WALLET_CART_TYPE_ORDER = "ORDER";
  static CREDIT = "CREDIT";
  static WALLET_CART_TYPE_REFUND = "REFUND";

  /**
   * sections
   */
  static HEADER_SECTION = "Header";
  static BANNER_SECTION = "Banner";
  static CATEGORY_SECTION = "Category";
  static COLLECTION_SECTION = "Collection";
  static BRAND_SECTION = "Featured Brand";
  static FEATURED_PRODUCT_SECTION = "Featured Product";
  static DEALS_OF_THE_DAY_SECTION = "Deals Of The Day";
  static TOP_RATED_PRODUCTS_SECTION = "Top Rated Products";
  static TOP_SELLING_PRODUCTS_SECTION = "Top Selling Products";
  static RECENTLY_ADDED_PRODUCTS_SECTION = "Recently Added Products";
  static CATEGORY_WISE_PRODUCTS_SECTION = "Category Wise Products";
  static TRENDING_PRODUCTS_SECTION = "Trending Products";
  static INSTAGRAM_FEED_SECTION = "Instagram Feed";
  static PRODUCT_LISTING_SETTINGS_SECTION = "Product Listing Settings";
  static PRODUCT_DETAILS_SETTINGS_SECTION = "Product Details Settings";
  static COUPON_SECTION = "Coupon";
  static FOOTER_SECTION = "Footer";

  static LIGHT = "LIGHT";
  static DARK = "DARK";

  static IMAGE_FIT = "Image Fit";
  static COVER = "Cover";
  static CONTAIN = "Contain";

  static CUSTOMIZE_CATEGORY = "Customize Category";
  static SHOW_CATEGORY_BORDERS = "Show Borders";
  static DISPLAY_CATEGORY_NAME_ON_THE_IMAGE =
    "Display category name on the image";
  static DISPLAY_CATEGORY_NAME_BELOW_THE_IMAGE =
    "Display category name below the image";
  static DISPLAY_CATEGORY_NAME_ON_IMAGE_HOVER =
    "Display category name on image hover";
  static HIDE_CATEGORY_NAME = "Display category image only";
  static HIDE_CATEGORY_IMAGES = "Display category name only";

  static CUSTOMIZE_BRAND = "Customize Brand";
  static SHOW_BRAND_BORDERS = "Show Borders";
  static DISPLAY_BRAND_NAME_ON_THE_IMAGE = "Display brand name on the image";
  static DISPLAY_BRAND_NAME_BELOW_THE_IMAGE =
    "Display brand name below the image";
  static DISPLAY_BRAND_NAME_ON_IMAGE_HOVER =
    "Display brand name on image hover";
  static HIDE_BRAND_NAME = "Display brand image only";
  static HIDE_BRAND_IMAGES = "Display brand name only";

  static SUB_SECTION_TITLE_COLOR = "Title Color";
  static SUB_SECTION_DESCRIPTION_COLOR = "Description Color";
  static SUB_SECTION_LAYOUT_COLOR = "Layout Color";
  static SUB_SECTION_VALUE_BLACK = "BLACK";
  static SUB_SECTION_SITE_LOGO = "Site Logo";
  static SUB_SECTION_PROMOTIONAL_TEXT = "Promotional Text";
  static SUB_SECTION_TWITTER_URL = "TwitterUrl";
  static SUB_SECTION_INSTAGRAM_URL = "InstagramUrl";
  static SUB_SECTION_FACEBOOK_URL = "FacebookUrl";
  static SUB_SECTION_LINKEDIN_URL = "LinkedInUrl";

  static SUB_SECTION_TWITTER_LOGO = "TwitterLogo";
  static SUB_SECTION_INSTAGRAM_LOGO = "InstagramLogo";
  static SUB_SECTION_FACEBOOK_LOGO = "FacebookLogo";
  static SUB_SECTION_LINKEDIN_LOGO = "LinkedInLogo";

  static SUB_SECTION_FOOTER_WIDGETS = "Footer Widgets";
  static SUB_SECTION_FOOTER_THEME = "Footer Theme";
  static SUB_SECTION_FOOTER_LOGO = "Footer Logo";
  static SUB_SECTION_FOOTER_TAGLINE = "Footer Tagline";
  static SUB_SECTION_COPYRIGHT = "Copyright";
  static SUB_SECTION_LOGOURL = "logoUrl";
  static SUB_SECTION_CHAT_SUPPORT = "Chat Support";

  static NUM_SHOW = "1";
  static NUM_HIDE = "0";

  static DISPLAY_PRODUCT_NAME = "Product name";
  static DISPLAY_PRODUCT_PRICE = "Product price";
  static DISPLAY_PRICE = "Price";
  static DISPLAY_PRODUCT_OPTIONS_VARIENTS = "Product options/Varients";
  static DISPLAY_NUMBER_OF_ITEMS_IN_STOCK = "Number of items in stock";
  static DISPLAY_PRODUCT_QUANTITY = "Product quantity";
  static DISPLAY_SHARE_BUTTONS = "Share buttons";
  static DISPLAY_SPECIFICATION = "Specification";
  static DISPLAY_PRODUCT_DESCRIPTION = "Product description";
  static DISPLAY_SKU_CODE = "SKU Code";
  static DISPLAY_DISCOUNT = "Discount";
  static DISPLAY_DELIVERY_AVAILABILITY = "Delivery Availability";
  static DISPLAY_REVIEW_AND_RATING = "Review and rating";
  static DISPLAY_PRODUCT_SKU = "Product SKU";
  static DISPLAY_ADD_TO_CART = "“Add to cart” button";
  static DISPLAY_WISHLIST = "Wishlist";
  static DISPLAY_DISCOUNT_TAG = "Discount tag";
  static DISPLAY_RATING = "Rating";
  static DISPLAY_CATEGORY = "Category";
  static DISPLAY_VARIANTS = "Variants";
  static PRODUCT_CARD_DETAILS = "Product Card details";
  static PRODUCT_IMAGE_ASPECT_RATIO = "Image aspect ratio";
  static PRODUCT_IMAGE_SIZE = "Image size";
  static PRODUCT_IMAGE_FIT = "Image Fit";

  static PRODUCT_IMAGE_SQUARE = "Square";
  static PRODUCT_IMAGE_LANDSCAPE = "Landscape";
  static PRODUCT_IMAGE_PORTRAIT = "Portrait";

  static LARGE = "Large";
  static MEDIUM = "Medium";
  static SMALL = "Small";
  static EXTRA_LARGE = "Extra Large";

  static PRODUCT_CARD_ALIGN_LEFT = "Align content to the left";
  static PRODUCT_CARD_ALIGN_RIGHT = "Align content to the right";
  static PRODUCT_CARD_ALIGN_CENTER = "Center content";
  static PRODUCT_CARD_JUSTIFY_CONTENT = "Justify content";

  static DISPLAY_COLLECTION_TITLE = "Display collection title";
  static DISPLAY_COLLECTION_DESCRIPTION = "Display collection description";
  static DISPLAY_CTA = "Display CTA";
  static COLLECTION_CTA_VALUE = "CTA";

  public static DEFAULT_PRIMARY_COLOR = "#3bb77e";
  public static DEFAULT_TEXT_COLOR = "#ffffff";

  public static DEFAULT_TITLE_COLOR = "#fed100";
  public static DEFAULT_DESCRIPTION_COLOR = "#ffffff";

  static PRIMARY_COLOR = "Primary Color";
  static TEXT_COLOR = "Text Color";

  static ITEMS_PER_PAGE = "Items Per Page";

  static BANNER_IMAGE_URL = "Banner Image Url";
  static MOBILE_BANNER_IMAGE_URL = "Mobile Banner Image Url";
  static BANNER_POSITION = "Banner Position";
  static BANNER_CUSTOM_URL = "Banner Custom Url";

  public static DISABLE = "Disable";
  public static TOP = "Top";
  public static BOTTOM = "Bottom";

  static ONE = "ONE";
  static TWO = "TWO";
  static THREE = "THREE";
  static FOUR = "FOUR";

  /**
   * Instagram Feed
   */
  static INSTAGRAM_ALL_ITEMS = "All";
  static INSTAGRAM_FIRST_ITEMS = "First";
  static INSTAGRAM_FEED_OPEN = "How to Open";
  static INSTAGRAM_FEED_OPEN_POPUP = "On Popup";
  static INSTAGRAM_FEED_OPEN_REDIRECT = "Redirect to instagram";
  static INSTAGRAM_TESTER_TOKEN = "IG Tester Token";
  /**
   * sub sections
   */

  static TOP_SELLING = "Top Selling";
  static TRENDING_PRODUCTS = "Trending Products";
  static TOP_RATED = "Top Rated";
  static RECENTLY_ADDED = "Recently Added";

  /**
   * Banner Types
   */
  static BANNER_TYP_CATEGORY = "Category";
  static BANNER_TYP_CUSTOM_URL = "Custom URL";
  static BANNER_TYP_COLLECTION = "Collection";
  static BANNER_TYP_BRANDS = "Brands";
  static BANNER_TYP_NO_ACTION = "No Action";
  static BANNER_TYP_NONE = "None";

  /**
   * chat support
   */
  static QUERY_REPLIED = "Query Replied";
  static QUERY = "Query";

  /**
   * delivery type
   */
  static DELIVERY_TYPE_DELIVERY = "Delivery";
  static DELIVERY_TYPE_SELF_PICKUP = "Self Pickup";

  /**
   * legal titles
   */

  static TERMS_AND_CONDITIONS = "Terms & Conditions";
  static CANCLE_POLICY = "Cancel Policy ";
  static SHIPPING_POLICY = "Shipping Policy";
  static REFUND_POLICY = "Refund Policy";
  static PRIVACY_POLICY = "Privacy Policy";

  static FEMALE = "Female";
  static MALE = "Male";

  /**
   * dashboard section ids
   */
  static BANNER_SECTION_DIV_ID = "bannerSection";
  static CATEGORY_SECTION_DIV_ID = "categorySection";
  static COLLECTION_SECTION_DIV_ID = "collectionSection";
  static BRAND_SECTION_DIV_ID = "brandSection";
  static FEATURED_PRODUCT_SECTION_DIV_ID = "featuredSection";
  static DEALS_OF_THE_DAY_SECTION_DIV_ID = "dealsOfTheDaySection";
  static TOP_RATED_PRODUCTS_SECTION_DIV_ID = "topRatedSection";
  static TOP_SELLING_PRODUCTS_SECTION_DIV_ID = "topSellingSection Products";
  static RECENTLY_ADDED_PRODUCTS_SECTION_DIV_ID = "recentlyAddedSection";
  static CATEGORY_WISE_PRODUCTS_SECTION_DIV_ID = "categoryWiseProductsSection";
  static TRENDING_PRODUCTS_SECTION_DIV_ID = "trendingSection";
  static INSTAGRAM_FEED_SECTION_DIV_ID = "instaFeedSection";
  static COUPON_SECTION_DIV_ID = "couponSection";
  static WAVE_OFF = "WaveOff";
  static EXTRA_CHARGES = "Extra Charges";

  public static SLOT_DISABLED =
    "Admin has disabled the Delivery/Pickup Slots from backend, Please refresh the page to move forward.";

  public static ORDER_TYPE_ORDER = "ORDER";
  public static ORDER_TYPE_EXCHANGE = "EXCHANGE";

  public static BULK_ORDER_PLACE = 60;

  public static SIZE_CHART_PREFERENCE_BRAND = "brand";
  public static SIZE_CHART_PREFERENCE_CATEGORY = "category";

  public static EXCHNAGE_CART_REASONS: string[] = [
    "Defective Product",
    "Wrong Size or Type",
    "Change of Mind",
    "Damage during Shipping or Handling",
    "Gift or Duplicate Purchase",
    "Missing Parts or Components",
  ];

  public static COUNTRY_CODES: { id: string; itemName: string }[] = [
    { id: "AFG", itemName: "Afghanistan" },
    { id: "ALB", itemName: "Albania" },
    { id: "DZA", itemName: "Algeria" },
    { id: "ASM", itemName: "American Samoa" },
    { id: "AND", itemName: "Andorra" },
    { id: "AGO", itemName: "Angola" },
    { id: "AIA", itemName: "Anguilla" },
    { id: "ATA", itemName: "Antarctica" },
    { id: "ATG", itemName: "Antigua and Barbuda" },
    { id: "ARG", itemName: "Argentina" },
    { id: "ARM", itemName: "Armenia" },
    { id: "ABW", itemName: "Aruba" },
    { id: "AUS", itemName: "Australia" },
    { id: "AUT", itemName: "Austria" },
    { id: "AZE", itemName: "Azerbaijan" },
    { id: "BHS", itemName: "Bahamas (the)" },
    { id: "BHR", itemName: "Bahrain" },
    { id: "BGD", itemName: "Bangladesh" },
    { id: "BRB", itemName: "Barbados" },
    { id: "BLR", itemName: "Belarus" },
    { id: "BEL", itemName: "Belgium" },
    { id: "BLZ", itemName: "Belize" },
    { id: "BEN", itemName: "Benin" },
    { id: "BMU", itemName: "Bermuda" },
    { id: "BTN", itemName: "Bhutan" },
    { id: "BOL", itemName: "Bolivia (Plurinational State of)" },
    { id: "BES", itemName: "Bonaire, Sint Eustatius and Saba" },
    { id: "BIH", itemName: "Bosnia and Herzegovina" },
    { id: "BWA", itemName: "Botswana" },
    { id: "BVT", itemName: "Bouvet Island" },
    { id: "BRA", itemName: "Brazil" },
    { id: "IOT", itemName: "British Indian Ocean Territory (the)" },
    { id: "BRN", itemName: "Brunei Darussalam" },
    { id: "BGR", itemName: "Bulgaria" },
    { id: "BFA", itemName: "Burkina Faso" },
    { id: "BDI", itemName: "Burundi" },
    { id: "CPV", itemName: "Cabo Verde" },
    { id: "KHM", itemName: "Cambodia" },
    { id: "CMR", itemName: "Cameroon" },
    { id: "CAN", itemName: "Canada" },
    { id: "CYM", itemName: "Cayman Islands (the)" },
    { id: "CAF", itemName: "Central African Republic (the)" },
    { id: "TCD", itemName: "Chad" },
    { id: "CHL", itemName: "Chile" },
    { id: "CHN", itemName: "China" },
    { id: "CXR", itemName: "Christmas Island" },
    { id: "CCK", itemName: "Cocos (Keeling) Islands (the)" },
    { id: "COL", itemName: "Colombia" },
    { id: "COM", itemName: "Comoros (the)" },
    { id: "COD", itemName: "Congo (the Democratic Republic of the)" },
    { id: "COG", itemName: "Congo (the)" },
    { id: "COK", itemName: "Cook Islands (the)" },
    { id: "CRI", itemName: "Costa Rica" },
    { id: "HRV", itemName: "Croatia" },
    { id: "CUB", itemName: "Cuba" },
    { id: "CUW", itemName: "Curaçao" },
    { id: "CYP", itemName: "Cyprus" },
    { id: "CZE", itemName: "Czechia" },
    { id: "CIV", itemName: "Côte d'Ivoire" },
    { id: "DNK", itemName: "Denmark" },
    { id: "DJI", itemName: "Djibouti" },
    { id: "DMA", itemName: "Dominica" },
    { id: "DOM", itemName: "Dominican Republic (the)" },
    { id: "ECU", itemName: "Ecuador" },
    { id: "EGY", itemName: "Egypt" },
    { id: "SLV", itemName: "El Salvador" },
    { id: "GNQ", itemName: "Equatorial Guinea" },
    { id: "ERI", itemName: "Eritrea" },
    { id: "EST", itemName: "Estonia" },
    { id: "SWZ", itemName: "Eswatini" },
    { id: "ETH", itemName: "Ethiopia" },
    { id: "FLK", itemName: "Falkland Islands (the) [Malvinas]" },
    { id: "FRO", itemName: "Faroe Islands (the)" },
    { id: "FJI", itemName: "Fiji" },
    { id: "FIN", itemName: "Finland" },
    { id: "FRA", itemName: "France" },
    { id: "GUF", itemName: "French Guiana" },
    { id: "PYF", itemName: "French Polynesia" },
    { id: "ATF", itemName: "French Southern Territories (the)" },
    { id: "GAB", itemName: "Gabon" },
    { id: "GMB", itemName: "Gambia (the)" },
    { id: "GEO", itemName: "Georgia" },
    { id: "DEU", itemName: "Germany" },
    { id: "GHA", itemName: "Ghana" },
    { id: "GIB", itemName: "Gibraltar" },
    { id: "GRC", itemName: "Greece" },
    { id: "GRL", itemName: "Greenland" },
    { id: "GRD", itemName: "Grenada" },
    { id: "GLP", itemName: "Guadeloupe" },
    { id: "GUM", itemName: "Guam" },
    { id: "GTM", itemName: "Guatemala" },
    { id: "GGY", itemName: "Guernsey" },
    { id: "GIN", itemName: "Guinea" },
    { id: "GNB", itemName: "Guinea-Bissau" },
    { id: "GUY", itemName: "Guyana" },
    { id: "HTI", itemName: "Haiti" },
    { id: "HMD", itemName: "Heard Island and McDonald Islands" },
    { id: "VAT", itemName: "Holy See (the)" },
    { id: "HND", itemName: "Honduras" },
    { id: "HKG", itemName: "Hong Kong" },
    { id: "HUN", itemName: "Hungary" },
    { id: "ISL", itemName: "Iceland" },
    { id: "IND", itemName: "India" },
    { id: "IDN", itemName: "Indonesia" },
    { id: "IRN", itemName: "Iran (Islamic Republic of)" },
    { id: "IRQ", itemName: "Iraq" },
    { id: "IRL", itemName: "Ireland" },
    { id: "IMN", itemName: "Isle of Man" },
    { id: "ISR", itemName: "Israel" },
    { id: "ITA", itemName: "Italy" },
    { id: "JAM", itemName: "Jamaica" },
    { id: "JPN", itemName: "Japan" },
    { id: "JEY", itemName: "Jersey" },
    { id: "JOR", itemName: "Jordan" },
    { id: "KAZ", itemName: "Kazakhstan" },
    { id: "KEN", itemName: "Kenya" },
    { id: "KIR", itemName: "Kiribati" },
    { id: "PRK", itemName: "Korea (the Democratic People's Republic of)" },
    { id: "KOR", itemName: "Korea (the Republic of)" },
    { id: "KWT", itemName: "Kuwait" },
    { id: "KGZ", itemName: "Kyrgyzstan" },
    { id: "LAO", itemName: "Lao People's Democratic Republic (the)" },
    { id: "LVA", itemName: "Latvia" },
    { id: "LBN", itemName: "Lebanon" },
    { id: "LSO", itemName: "Lesotho" },
    { id: "LBR", itemName: "Liberia" },
    { id: "LBY", itemName: "Libya" },
    { id: "LIE", itemName: "Liechtenstein" },
    { id: "LTU", itemName: "Lithuania" },
    { id: "LUX", itemName: "Luxembourg" },
    { id: "MAC", itemName: "Macao" },
    { id: "MDG", itemName: "Madagascar" },
    { id: "MWI", itemName: "Malawi" },
    { id: "MYS", itemName: "Malaysia" },
    { id: "MDV", itemName: "Maldives" },
    { id: "MLI", itemName: "Mali" },
    { id: "MLT", itemName: "Malta" },
    { id: "MHL", itemName: "Marshall Islands (the)" },
    { id: "MTQ", itemName: "Martinique" },
    { id: "MRT", itemName: "Mauritania" },
    { id: "MUS", itemName: "Mauritius" },
    { id: "MYT", itemName: "Mayotte" },
    { id: "MEX", itemName: "Mexico" },
    { id: "FSM", itemName: "Micronesia (Federated States of)" },
    { id: "MDA", itemName: "Moldova (the Republic of)" },
    { id: "MCO", itemName: "Monaco" },
    { id: "MNG", itemName: "Mongolia" },
    { id: "MNE", itemName: "Montenegro" },
    { id: "MSR", itemName: "Montserrat" },
    { id: "MAR", itemName: "Morocco" },
    { id: "MOZ", itemName: "Mozambique" },
    { id: "MMR", itemName: "Myanmar" },
    { id: "NAM", itemName: "Namibia" },
    { id: "NRU", itemName: "Nauru" },
    { id: "NPL", itemName: "Nepal" },
    { id: "NLD", itemName: "Netherlands (the)" },
    { id: "NCL", itemName: "New Caledonia" },
    { id: "NZL", itemName: "New Zealand" },
    { id: "NIC", itemName: "Nicaragua" },
    { id: "NER", itemName: "Niger (the)" },
    { id: "NGA", itemName: "Nigeria" },
    { id: "NIU", itemName: "Niue" },
    { id: "NFK", itemName: "Norfolk Island" },
    { id: "MNP", itemName: "Northern Mariana Islands (the)" },
    { id: "NOR", itemName: "Norway" },
    { id: "OMN", itemName: "Oman" },
    { id: "PAK", itemName: "Pakistan" },
    { id: "PLW", itemName: "Palau" },
    { id: "PSE", itemName: "Palestine, State of" },
    { id: "PAN", itemName: "Panama" },
    { id: "PNG", itemName: "Papua New Guinea" },
    { id: "PRY", itemName: "Paraguay" },
    { id: "PER", itemName: "Peru" },
    { id: "PHL", itemName: "Philippines (the)" },
    { id: "PCN", itemName: "Pitcairn" },
    { id: "POL", itemName: "Poland" },
    { id: "PRT", itemName: "Portugal" },
    { id: "PRI", itemName: "Puerto Rico" },
    { id: "QAT", itemName: "Qatar" },
    { id: "MKD", itemName: "Republic of North Macedonia" },
    { id: "ROU", itemName: "Romania" },
    { id: "RUS", itemName: "Russian Federation (the)" },
    { id: "RWA", itemName: "Rwanda" },
    { id: "REU", itemName: "Réunion" },
    { id: "BLM", itemName: "Saint Barthélemy" },
    { id: "SHN", itemName: "Saint Helena, Ascension and Tristan da Cunha" },
    { id: "KNA", itemName: "Saint Kitts and Nevis" },
    { id: "LCA", itemName: "Saint Lucia" },
    { id: "MAF", itemName: "Saint Martin (French part)" },
    { id: "SPM", itemName: "Saint Pierre and Miquelon" },
    { id: "VCT", itemName: "Saint Vincent and the Grenadines" },
    { id: "WSM", itemName: "Samoa" },
    { id: "SMR", itemName: "San Marino" },
    { id: "STP", itemName: "Sao Tome and Principe" },
    { id: "SAU", itemName: "Saudi Arabia" },
    { id: "SEN", itemName: "Senegal" },
    { id: "SRB", itemName: "Serbia" },
    { id: "SYC", itemName: "Seychelles" },
    { id: "SLE", itemName: "Sierra Leone" },
    { id: "SGP", itemName: "Singapore" },
    { id: "SXM", itemName: "Sint Maarten (Dutch part)" },
    { id: "SVK", itemName: "Slovakia" },
    { id: "SVN", itemName: "Slovenia" },
    { id: "SLB", itemName: "Solomon Islands" },
    { id: "SOM", itemName: "Somalia" },
    { id: "ZAF", itemName: "South Africa" },
    { id: "SGS", itemName: "South Georgia and the South Sandwich Islands" },
    { id: "SSD", itemName: "South Sudan" },
    { id: "ESP", itemName: "Spain" },
    { id: "LKA", itemName: "Sri Lanka" },
    { id: "SDN", itemName: "Sudan (the)" },
    { id: "SUR", itemName: "Suriname" },
    { id: "SJM", itemName: "Svalbard and Jan Mayen" },
    { id: "SWE", itemName: "Sweden" },
    { id: "CHE", itemName: "Switzerland" },
    { id: "SYR", itemName: "Syrian Arab Republic" },
    { id: "TWN", itemName: "Taiwan (Province of China)" },
    { id: "TJK", itemName: "Tajikistan" },
    { id: "TZA", itemName: "Tanzania, United Republic of" },
    { id: "THA", itemName: "Thailand" },
    { id: "TLS", itemName: "Timor-Leste" },
    { id: "TGO", itemName: "Togo" },
    { id: "TKL", itemName: "Tokelau" },
    { id: "TON", itemName: "Tonga" },
    { id: "TTO", itemName: "Trinidad and Tobago" },
    { id: "TUN", itemName: "Tunisia" },
    { id: "TUR", itemName: "Turkey" },
    { id: "TKM", itemName: "Turkmenistan" },
    { id: "TCA", itemName: "Turks and Caicos Islands (the)" },
    { id: "TUV", itemName: "Tuvalu" },
    { id: "UGA", itemName: "Uganda" },
    { id: "UKR", itemName: "Ukraine" },
    { id: "ARE", itemName: "United Arab Emirates (the)" },
    {
      id: "GBR",
      itemName: "United Kingdom of Great Britain and Northern Ireland (the)",
    },
    { id: "UMI", itemName: "United States Minor Outlying Islands (the)" },
    { id: "USA", itemName: "United States of America (the)" },
    { id: "URY", itemName: "Uruguay" },
    { id: "UZB", itemName: "Uzbekistan" },
    { id: "VUT", itemName: "Vanuatu" },
    { id: "VEN", itemName: "Venezuela (Bolivarian Republic of)" },
    { id: "VNM", itemName: "Viet Nam" },
    { id: "VGB", itemName: "Virgin Islands (British)" },
    { id: "VIR", itemName: "Virgin Islands (U.S.)" },
    { id: "WLF", itemName: "Wallis and Futuna" },
    { id: "ESH", itemName: "Western Sahara" },
    { id: "YEM", itemName: "Yemen" },
    { id: "ZMB", itemName: "Zambia" },
    { id: "ZWE", itemName: "Zimbabwe" },
    { id: "ALA", itemName: "Åland Islands" },
  ];
}
