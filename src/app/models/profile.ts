import { User } from "./user";

export interface Profile{
    Id:string,
    Age:number,
    Height:number,
    Weight:number,
    Gender:string,
    UserId:string,
    User:User
}
   