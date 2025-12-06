import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { TripDataService } from '../trip-data.service';
import { Trip } from '../models/trip';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, RouterModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = [];
  error?: string;

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data) => this.trips = data,
      error: (err) => this.error = 'Failed to load trips: ' + err.message
    });
  }

  addTrip(): void {
    this.router.navigate(['/add']);
  }
}
