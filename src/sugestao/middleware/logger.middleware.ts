import {
  Injectable,
  NestMiddleware,
  MiddlewareFunction,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as Auth from 'basic-auth';
import { Hash } from '../../config/login.config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly hashpassword: Hash;

  async resolve(...args: any[]): Promise<MiddlewareFunction | any> {
    return async (req, res, next) => {
      const user = Auth(req);

      const password = new Hash();
      const senhaHash = await password.password();
      const LoginUser = await password.user();
      const match = await bcrypt.compare(user.pass, senhaHash);

      if (!user || user.name !== LoginUser || !match) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Você não possui permissão para realizar esta operação',
          },
          403,
        );
      } else {
        next();
      }
    };
  }
}
