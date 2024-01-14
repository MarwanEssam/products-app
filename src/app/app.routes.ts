import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
