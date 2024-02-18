import { Injectable } from '@nestjs/common';
import { sharePnpm } from '@vision/share';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + sharePnpm;
  }
}
