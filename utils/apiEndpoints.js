export const endpoints = {
    auth: {
        login: "v1/auth/login",
        signup: "v1/auth/signup",
    },
    user: {
        profile: "user/profile",
        update: "user/update",
    },
    products: {
        list: "products",
        details: (id) => `products/${id}`,
    },
    workspaces: "v1/workspaces/"
};
