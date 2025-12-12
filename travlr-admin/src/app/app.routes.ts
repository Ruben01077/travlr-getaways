import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: TripListingComponent, canActivate: [authGuard] },
  { path: 'add', component: AddTripComponent, canActivate: [authGuard] },
  { path: 'edit/:tripCode', component: EditTripComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'list' }
];

