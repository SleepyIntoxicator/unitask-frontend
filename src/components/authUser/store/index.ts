import auth, { plugin as authPlugin } from '@/components/authUser/store/auth';

export default {
  modules: {
    auth,
  },
  plugins: [
    authPlugin,
  ],
};
