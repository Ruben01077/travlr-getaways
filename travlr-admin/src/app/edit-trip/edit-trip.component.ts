import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { TripDataService } from '../trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {

  trip: Trip = {
  code: '',
  name: '',
  length: 0,
  start: '',
  resort: '',
  perPerson: 0,
  image: '',
  description: ''
};
  error?: string;
  private tripCode!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
  this.tripCode = this.route.snapshot.paramMap.get('tripCode') || '';

  if (!this.tripCode) {
    this.error = 'No trip code provided.';
    return;
  }

  this.tripDataService.getTrip(this.tripCode).subscribe({
    next: (trip) => {
      console.log('Loaded trip in EditTripComponent:', trip);

      
      if (trip.start) {
        const startStr = trip.start.toString().substring(0, 10);
        (trip as any).start = startStr;
      }

      this.trip = trip;
    },
    error: (err) => {
      console.error('Error loading trip in EditTripComponent:', err);
      this.error = 'Failed to load trip: ' + err.message;
    }
  });
}


  onSubmit(form: NgForm): void {
  if (form.invalid) return;

  this.tripDataService.updateTrip(this.tripCode, this.trip).subscribe({
    next: () => this.router.navigate(['/list']),
    error: (err) => this.error = 'Failed to update trip: ' + err.message
  });
}


  onDelete(): void {
    if (!confirm('Are you sure you want to delete this trip?')) return;

    this.tripDataService.deleteTrip(this.tripCode).subscribe({
      next: () => this.router.navigate(['/list']),
      error: (err) => this.error = 'Failed to delete trip: ' + err.message
    });
  }
}
