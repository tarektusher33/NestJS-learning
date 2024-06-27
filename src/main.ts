import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserInterceptor } from './Modules/user/user.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new UserInterceptor());
  await app.listen(3000);
}
bootstrap();
