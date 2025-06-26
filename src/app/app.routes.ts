import { Routes } from '@angular/router';
import { ProfileModule } from './views/profile/profile';
import { Login } from './views/login/login';

export const routes: Routes = [
    {path:'profile',component:ProfileModule},
    {path:'login',component:Login}
];
