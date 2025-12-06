import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: TripListingComponent },
  { path: 'add', component: AddTripComponent },
  { path: 'edit/:tripCode', component: EditTripComponent },
  { path: '**', redirectTo: 'list' }
];

