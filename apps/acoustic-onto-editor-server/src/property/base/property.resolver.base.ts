/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Property } from "./Property";
import { PropertyCountArgs } from "./PropertyCountArgs";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyFindUniqueArgs } from "./PropertyFindUniqueArgs";
import { CreatePropertyArgs } from "./CreatePropertyArgs";
import { UpdatePropertyArgs } from "./UpdatePropertyArgs";
import { DeletePropertyArgs } from "./DeletePropertyArgs";
import { ClassModel } from "../../classModel/base/ClassModel";
import { PropertyService } from "../property.service";
@graphql.Resolver(() => Property)
export class PropertyResolverBase {
  constructor(protected readonly service: PropertyService) {}

  async _propertiesMeta(
    @graphql.Args() args: PropertyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Property])
  async properties(
    @graphql.Args() args: PropertyFindManyArgs
  ): Promise<Property[]> {
    return this.service.properties(args);
  }

  @graphql.Query(() => Property, { nullable: true })
  async property(
    @graphql.Args() args: PropertyFindUniqueArgs
  ): Promise<Property | null> {
    const result = await this.service.property(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Property)
  async createProperty(
    @graphql.Args() args: CreatePropertyArgs
  ): Promise<Property> {
    return await this.service.createProperty({
      ...args,
      data: {
        ...args.data,

        idClass: args.data.idClass
          ? {
              connect: args.data.idClass,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Property)
  async updateProperty(
    @graphql.Args() args: UpdatePropertyArgs
  ): Promise<Property | null> {
    try {
      return await this.service.updateProperty({
        ...args,
        data: {
          ...args.data,

          idClass: args.data.idClass
            ? {
                connect: args.data.idClass,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Property)
  async deleteProperty(
    @graphql.Args() args: DeletePropertyArgs
  ): Promise<Property | null> {
    try {
      return await this.service.deleteProperty(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => ClassModel, {
    nullable: true,
    name: "idClass",
  })
  async getIdClass(
    @graphql.Parent() parent: Property
  ): Promise<ClassModel | null> {
    const result = await this.service.getIdClass(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
