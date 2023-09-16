const isDev = true;

const server = isDev ? 'http://localhost:8080/' : '/';

export const APIS = {
    all_dev: server + 'alluser',
    all_jobs: server + 'jobss',
    login: server + 'api/login',
    signup: server + 'signup',
    forgot: server + 'forgot',
    resetpassword: server + 'resetpassword',
    updateSettings: server + 'setting/update',
    getCountry: server + 'country',
};
