import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from '../logger.service';
import { AuthenticationService } from './authentication.service';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    if (this.router.url === "home")
      return true;

    if (this.authenticationService.isAuthenticated()) {
      return true;
    }
    return true;
    // log.debug('Not authenticated, redirecting...');
    // this.router.navigate(['/login'], { replaceUrl: true });
    // return false;
  }

}
