import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  addUser() {
    return this.userService.addUser();
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':/id')
  getUserById() {
    return this.userService.getUserById();
  }
}
