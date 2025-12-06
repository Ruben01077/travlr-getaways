import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  // Base URL for the API endpoint
  private baseUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) { }

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl);
  }

  public getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${tripCode}`);
  }

  public addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl, trip);
  }

  public updateTrip(tripCode: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.baseUrl}/${tripCode}`, trip);
  }

  public deleteTrip(tripCode: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${tripCode}`);
  }
}
