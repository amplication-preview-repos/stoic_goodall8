/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PropertyService } from "../property.service";
import { PropertyCreateInput } from "./PropertyCreateInput";
import { Property } from "./Property";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyWhereUniqueInput } from "./PropertyWhereUniqueInput";
import { PropertyUpdateInput } from "./PropertyUpdateInput";

export class PropertyControllerBase {
  constructor(protected readonly service: PropertyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Property })
  async createProperty(
    @common.Body() data: PropertyCreateInput
  ): Promise<Property> {
    return await this.service.createProperty({
      data: {
        ...data,

        idClass: data.idClass
          ? {
              connect: data.idClass,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        idClass: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Property] })
  @ApiNestedQuery(PropertyFindManyArgs)
  async properties(@common.Req() request: Request): Promise<Property[]> {
    const args = plainToClass(PropertyFindManyArgs, request.query);
    return this.service.properties({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        idClass: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async property(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    const result = await this.service.property({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        idClass: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProperty(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() data: PropertyUpdateInput
  ): Promise<Property | null> {
    try {
      return await this.service.updateProperty({
        where: params,
        data: {
          ...data,

          idClass: data.idClass
            ? {
                connect: data.idClass,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          idClass: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProperty(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    try {
      return await this.service.deleteProperty({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          idClass: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
