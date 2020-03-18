import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { PropsListComponent } from './props-list/props-list.component';
import { WishListComponent } from './wish-list/wish-list.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'members', component: MemberListComponent},
    { path: 'props', component: PropsListComponent},
    { path: 'wishlist', component: WishListComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
