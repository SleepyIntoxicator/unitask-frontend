import auth from '@/components/authUser/api/auth';

function initialState(): never {
  return {
    user: null,
  };
}

export default {
  state: initialState(),
  getters: {
    isLoggedIn: state => !!state.user;
  },
  actions: {},
  mutations: {},
};

export function plugin (store) {
  // TODO: in KarrotFrontend here is checked may be user logged out and refresh auth tokens
  // TODO: datastore/auth.js:225 exp fun plugin (datastore)
  store.watch(state => state.user, async () => {})
}
