import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }

    @Post('local/signIn')
    signInLocal(@Body() dto: AuthDto) {
        return this.authService.signInLocal(dto);
    }

    @Post('local/signUp')
    signUpLocal(@Body() dto: AuthDto) {
        return this.authService.signUpLocal(dto);
    }
}