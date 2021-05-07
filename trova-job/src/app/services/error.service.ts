import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomErrorObject } from '../models/error.model';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  errorOnSignUp: BehaviorSubject<CustomErrorObject> = new BehaviorSubject<CustomErrorObject>(
    null
  );
  errorOnSignIn: BehaviorSubject<CustomErrorObject> = new BehaviorSubject<CustomErrorObject>(
    null
  );

  constructor() {}
}
