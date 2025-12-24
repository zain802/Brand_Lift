export const endpoints = {
    auth: {
        login: "auth/login",
        signup: "auth/signup",
    },
    user: {
        profile: "user/profile",
        update: "user/update",
    },
    products: {
        list: "products",
        details: (id) => `products/${id}`,
    }
};
