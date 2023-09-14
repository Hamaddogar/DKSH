import { dummy } from '../../utils/HELPER';

export const initialState_Base = {
    loading: false,
    allDevelopers: [],
    allJobs: [],
    settings: {},
    selectedProfile: dummy,
    loadingV2: false,
    currentUser: null,
    signUpUser: null,
    loginError: false,
    signUpError: false,
    forgotSuccess: false,
    forgotError: false,
    resetSuccess: false,
    resetError: false,
    resetToken: false,

    // filters for users
    activeTab: 'All',
    priceFilter: [0, 1000],
    servicesFilter: 'All',
    servicesFilterOptions: ['All', 'UI Design', 'UX Design'],
    ratingFilter: 0,
    availableToWorkFilter: true,
    proTallentFilter: false,

    // filters for users
    activeTabJOB: 'All',
    priceFilterJOB: [0, 1000],
    servicesFilterJOB: 'All',
    servicesFilterOptionsJOB: ['All', 'UI Design', 'UX Design'],
    ratingFilterJOB: 0,

    //
    openLoginBoxDesk: false,
};
