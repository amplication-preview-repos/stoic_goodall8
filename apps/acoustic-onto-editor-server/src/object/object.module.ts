import { Module } from "@nestjs/common";
import { ObjectModuleBase } from "./base/object.module.base";
import { ObjectService } from "./object.service";
import { ObjectController } from "./object.controller";
import { ObjectResolver } from "./object.resolver";

@Module({
  imports: [ObjectModuleBase],
  controllers: [ObjectController],
  providers: [ObjectService, ObjectResolver],
  exports: [ObjectService],
})
export class ObjectModule {}
