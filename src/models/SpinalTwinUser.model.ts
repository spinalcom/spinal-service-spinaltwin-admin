export interface SpinalTwinUser {
    id?: string;
    name: string;
    firstname?: string;
    email?: string;
    password?: string;
    userProfileId?: string; 
    [key: string]: any;
  }