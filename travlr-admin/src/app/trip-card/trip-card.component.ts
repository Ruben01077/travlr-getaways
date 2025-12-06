import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {

  @Input({ required: true }) trip!: Trip;

  constructor(private router: Router) {}

  editTrip(): void {
    this.router.navigate(['/edit', this.trip.code]);
  }
}
