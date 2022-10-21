export const selectIsLoggedIn = state => state.auth.isAuth;

export const selectUser = state => state.auth.user;

export const isRefreshUser = state => state.auth.isRefreshing;
