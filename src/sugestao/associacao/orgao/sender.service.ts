import {
  Injectable,
  HttpService,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
@Injectable()
export class sender {
  constructor(private readonly httpService: HttpService) {}
  envia_dados(url: string, dados: any) {
    const basicAuth = `Basic ${Buffer.from(
      process.env.SENHA_PUSH || `user:123`,
    ).toString('base64')}`;
    const options = {
      headers: {
        Authorization: basicAuth,
      },
    };
    try {
      return this.httpService
        .post(url, dados, options)
        .toPromise()
        .then(res => res.status);
    } catch (erro) {
      throw new HttpException(
        'Erro, api não respondeu, ' + erro,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
