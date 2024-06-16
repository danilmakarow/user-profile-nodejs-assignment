import { Controller, Get } from '@nestjs/common';

@Controller('position')
export class PositionController {
  constructor(private positionController: PositionController) {}

  @Get()
  getPositions() {
    return this.positionController.getPositions();
  }
}
