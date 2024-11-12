import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.enableCors({
    origin: [
      'http://localhost:5000',
      'https://port-next-catch-the-fly-m3ed3zhxf5f64d23.sel4.cloudtype.app/',
    ],
    credentials: true,
  });
}
bootstrap();
