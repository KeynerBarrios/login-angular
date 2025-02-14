import { Routes } from '@angular/router';

export const routes: Routes = [


    {
        path: '',
        loadComponent:() => import('./auth/layouts/authLayout/authLayout.component').then(m => m.AuthLayoutComponent),
    }


];
