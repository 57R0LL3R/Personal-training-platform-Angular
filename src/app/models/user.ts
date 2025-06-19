import { Profile } from "./profile";

export interface User{
    Id:number,
    Username:string,
    Email:string
    Role:string,
    PasswordHash:string,
    Profile:Profile
    /*UserGoals:UserGoals[],
    Routines:Routine[],
    Activities:UserActivity[]*/
}