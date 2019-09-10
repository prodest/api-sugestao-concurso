import * as bcrypt from 'bcrypt';

const LoginConfig = {
  user: process.env.LOGIN_USER,
  pass: process.env.LOGIN_PASS,
};

export class Hash {
  async password() {
    return await bcrypt.hash(LoginConfig.pass, 10);
  }

  user() {
    return LoginConfig.user;
  }
}
