import { Component, computed, Inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: false,

  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent implements OnInit {
  constructor(private userService: UserService) {}

  userId = signal<number>(1);
  currentUser = signal<User | undefined>(undefined);
  userWasFound = signal<boolean>(false);
  fullName = computed<string>(() => {
    if (!this.currentUser()) return 'No hay usuario';

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number): void {
    if (!id || id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.userService.getUserById(id).subscribe({
      next: (user) => {
        // next es el callback que se ejecuta cuando el observable emite un valor
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: (error) => {
        console.error(error);
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      },
    });
  }
}
