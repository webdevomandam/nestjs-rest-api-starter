import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Endpoint to create new user resource.' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Successfully created user.',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Endpoint to get all users.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully get all users.',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Endpoint to get user by the given id.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully get specific user.',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Endpoint to update specified properties of user by the given id.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully updated user.',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove user.' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Successfully soft delete user.',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
