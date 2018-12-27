import { BaseEntity } from "@app/base/base";

export interface Roles {
    parent: boolean;
    author?: boolean;
    admin?:  boolean;
  }

  export class User implements BaseEntity {
    id: string;
    email: string;
    roles: Roles;
    dateCreated: Date;

    constructor(authData: any) {
      this.email    = authData.email
      this.roles    = { parent: true }
    }
  }