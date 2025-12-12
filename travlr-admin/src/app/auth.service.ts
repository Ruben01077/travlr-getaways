import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, { username, password })
      .pipe(
        tap(res => {
          localStorage.setItem('travlr-token', res.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('travlr-token');
  }

  get token(): string | null {
    return localStorage.getItem('travlr-token');
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }
}