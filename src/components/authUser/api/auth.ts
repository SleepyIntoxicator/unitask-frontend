import axios from '@/base/api/axios';

interface IUserLoginData {
  login: string
  password: string
}

interface IUserAccountData {
  ID: number
  Login: string
  FullName: string
  Email: string
  CreatedAt: Date
}

export default {
  async login({ login, password }: IUserLoginData): void {
    return (await axios.post('/auth/login', { login, password })).data;
  },
  async me(): IUserAccountData {
    return (await axios.get('/me')).data;
  },
};
