import * as bcrypt from 'bcrypt';

const LoginConfig = {
  user: process.env.LOGIN_USER || 'user',
  pass: process.env.LOGIN_PASS || 'pass',
};

export class Hash {
  async password() {
    return await bcrypt.hash(LoginConfig.pass, 10);
  }

  user() {
    return LoginConfig.user;
  }
}
