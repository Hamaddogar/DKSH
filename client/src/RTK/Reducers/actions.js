export const ACTIONS = {
    SELECTED_PROFILE: (state, { payload }) => {
        state.selectedProfile = payload;
    },
    ACTIVE_TAB_Filter: (state, { payload }) => {
        state.activeTab = payload;
    },
    PRICE_Filter: (state, { payload }) => {
        state.priceFilter = payload;
    },
    SERVICE_Filter: (state, { payload }) => {
        state.servicesFilter = payload;
    },
    RATING_Filter: (state, { payload }) => {
        state.ratingFilter = payload;
    },
    AVALIABLE_TO_WORK_Filter: (state, { payload }) => {
        state.availableToWorkFilter = payload;
    },
    PRO_TALLENT_Filter: (state, { payload }) => {
        state.proTallentFilter = payload;
    },
    SERVICE_Filter_Options: (state, { payload }) => {
        state.servicesFilterOptions = payload;
    },
    RESET_Filter: (state, { payload }) => {
        state.activeTab = 'All';
        state.priceFilter = [0, 1000];
        state.servicesFilter = '';
        state.ratingFilter = 0;
        state.availableToWorkFilter = true;
        state.proTallentFilter = false;
    },

    ACTIVE_TAB_Filter_JOB: (state, { payload }) => {
        state.activeTabJOB = payload;
    },
    PRICE_Filter_JOB: (state, { payload }) => {
        state.priceFilterJOB = payload;
    },
    SERVICE_Filter_JOB: (state, { payload }) => {
        state.servicesFilterJOB = payload;
    },
    RATING_Filter_JOB: (state, { payload }) => {
        state.ratingFilterJOB = payload;
    },
    SERVICE_Filter_Options_JOB: (state, { payload }) => {
        state.servicesFilterOptionsJOB = payload;
    },
    RESET_Filter_JOB: (state, { payload }) => {
        state.activeTabJOB = 'All';
        state.priceFilterJOB = [0, 1000];
        state.servicesFilterJOB = '';
        state.ratingFilterJOB = 0;
    },

    LOGIN_BOX_HANDLE: (state, { payload }) => {
        if (payload) {
            state.openLoginBoxDesk = payload;
        } else {
            state.openLoginBoxDesk = payload;
            state.loadingV2 = payload;
            state.loginError = false;
            state.signUpError = false;
            state.forgotSuccess = false;
            state.forgotError = false;
            state.resetError = false;
            state.resetSuccess = false;
        }
    },
    LOGIN_WITH_GOOGLE_APPLE: (state, { payload }) => {
        state.currentUser = payload;
        state.loadingV2 = 'responded';
    },

    RESET_TOKEN: (state, { payload }) => {
        state.resetToken = payload;
        if (payload) {
            state.openLoginBoxDesk = 'reset';
        }
    },

    THEME_UPDATOR: (state, { payload }) => {
        state.settings.darkTheme = payload;
    },

    LOG_OUT: (state, { payload }) => {
        state.openLoginBoxDesk = null;
        state.loadingV2 = null;
        state.loginError = false;
        state.signUpError = false;
        state.forgotSuccess = false;
        state.forgotError = false;
        state.resetError = false;
        state.resetSuccess = false;
        state.currentUser = null;
        state.signUpUser = null;
        state.settings = {};
    },
};
