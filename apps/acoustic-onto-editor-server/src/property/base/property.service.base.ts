/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Property as PrismaProperty,
  ClassModel as PrismaClassModel,
} from "@prisma/client";

export class PropertyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PropertyCountArgs, "select">): Promise<number> {
    return this.prisma.property.count(args);
  }

  async properties(
    args: Prisma.PropertyFindManyArgs
  ): Promise<PrismaProperty[]> {
    return this.prisma.property.findMany(args);
  }
  async property(
    args: Prisma.PropertyFindUniqueArgs
  ): Promise<PrismaProperty | null> {
    return this.prisma.property.findUnique(args);
  }
  async createProperty(
    args: Prisma.PropertyCreateArgs
  ): Promise<PrismaProperty> {
    return this.prisma.property.create(args);
  }
  async updateProperty(
    args: Prisma.PropertyUpdateArgs
  ): Promise<PrismaProperty> {
    return this.prisma.property.update(args);
  }
  async deleteProperty(
    args: Prisma.PropertyDeleteArgs
  ): Promise<PrismaProperty> {
    return this.prisma.property.delete(args);
  }

  async getIdClass(parentId: string): Promise<PrismaClassModel | null> {
    return this.prisma.property
      .findUnique({
        where: { id: parentId },
      })
      .idClass();
  }
}
