export const AppConstants = {
    REST_URL_HOST : process.env.REACT_APP_NODE_BACKEND_URL,
    STATE_APPROVED: "approved",
    STATE_REQUESTED: "requested",
    STATE_DECLINED: "declined",
    DUMMY: "dummy",
    STORAGE_ITEM_URL: "/storageItems",
    STOCK_URL: "/stocks",
    INVENTORY_URL: "/inventory",
    PRODUCT_URL: "/products",
    ORDER_URL: "/orders",
    PURCHASE_REQ_URL: "/purchase-reqs",
    DONATION_URL: "/donations",
    DONATABLE_STOCKS_URL: "/stocks/donatable-stocks",
    ORDER_ITEM_URL: "/orderItems",
    PURCHASE_REQ_ITEM_URL: "/purchase-req-items",
    SUPPLIER_URL: "/suppliers",
    ORDER_URL: "/orders",
    PURCHASE_REQUEST_URL: "/purchaseRequisitions",
    PRODUCT_REQUEST_URL: "/purchaseRequisitions",
    CUSTOMER_SIGNUP_URL : "/customer",
    CUSTOMER_UPDATE_URL : "/customer/update",
    CART_URL : "/cart"
};

export const OrderItemStates = {
    STATE_REQUESTED: "REQUESTED",
    STATE_CONFIRMED: "CONFIRMED",
    STATE_DECLINED: "DECLINED",
};
export const PurchaseReqItemStates = {
    STATE_REQUESTED: "REQUESTED",
    STATE_CONFIRMED: "CONFIRMED",
    STATE_DECLINED: "DECLINED",
};

export const PurchaseReqStates = {
    STATE_REQUESTED: "REQUESTED",
    STATE_CONFIRMED: "CONFIRMED",
    STATE_DECLINED: "DECLINED",
    STATE_RECIEVED: "RECIEVED",
};

export const OrderStates = {
    STATE_REQUESTED: "REQUESTED",
    STATE_CONFIRMED: "CONFIRMED",
    STATE_DECLINED: "DECLINED",
    STATE_DELIVERED: "DELIVERED",
};


export const Colors = {
    primary: "#0087c1",
    hoverColor: "#0000000a"
};


export const Dimensions = {
    drawerWidth : 240
};