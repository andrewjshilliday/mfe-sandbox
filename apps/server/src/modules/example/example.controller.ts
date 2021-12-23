import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

interface Example {
  property: string;
}

@Controller('example')
export class ExampleController {
  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Example> {
    return { property: req.user.userId };
  }
}
