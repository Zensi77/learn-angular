import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user?: User;

  constructor(private http: HttpClient) {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user); // Genera un clon profundo del objeto
  }

  login(emai: string, password: string): Observable<User> {
    return this.http.get<User>(`${environments.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('user', JSON.stringify(user)))
    );
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('user')) return of(false);

    const token = JSON.parse(localStorage.getItem('user') || '{}');

    return this.http
      .get<User>(`${environments.baseUrl}/users/${token.id}`)
      .pipe(
        tap((user) => (this.user = user)),
        map((user) => !!user), // !!user es lo mismo que user ? true : false
        catchError(() => of(false))
      );
  }

  logOut(): void {
    this.user = undefined;
    localStorage.removeItem('user');
  }
}
