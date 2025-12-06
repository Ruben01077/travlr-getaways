import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { TripDataService } from '../trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {

  trip: Trip = {
    code: '',
    name: '',
    length: 0,
    start: new Date().toISOString().substring(0, 10),
    resort: '',
    perPerson: 0,
    image: '',
    description: ''
  };

  error?: string;

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.tripDataService.addTrip(this.trip).subscribe({
      next: () => this.router.navigate(['/list']),
      error: (err) => this.error = 'Failed to add trip: ' + err.message
    });
  }
}
