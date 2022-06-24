import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {JwtModule} from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UserModule, PassportModule.register( {session: true})],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}