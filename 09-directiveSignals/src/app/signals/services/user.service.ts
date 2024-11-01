import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SingleResponse, User } from '../interfaces/user-request.interface';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  private baseURL = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.http.get<SingleResponse>(`${this.baseURL}/${id}`).pipe(
      map((response) => {
        console.log(response.data);
        return response.data;
      }),
      tap((user) => console.log(user))
    );
  }
}
