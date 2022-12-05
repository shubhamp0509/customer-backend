import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const InitializeMiddleware = (app: INestApplication) => {
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
};

const InitializeSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Customer')
    .setDescription('The Customer API documentation.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-explorer', app, document);
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  InitializeSwagger(app);
  InitializeMiddleware(app);
  await app.listen(3000);
}
bootstrap();
