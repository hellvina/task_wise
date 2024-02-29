import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {path: '', component: Index},
    {path: 'register', component: Register},
    {path: 'login', component: Login},
    {path: 'dashboard', component: Dashboard}
];
