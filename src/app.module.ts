import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PositionModule } from './modules/position/position.module';
import { TokenModule } from './modules/token/token.module';

@Module({
  imports: [UserModule, PositionModule, TokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
