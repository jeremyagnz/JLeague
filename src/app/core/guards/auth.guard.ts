import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const loggedIn = auth.isLoggedIn();
  console.log('authGuard -> loggedIn:', loggedIn);

  if (loggedIn) {
    return true;
  } else {
    console.log('authGuard -> redirigiendo a /login');
    return router.parseUrl('/login');
  }
};
