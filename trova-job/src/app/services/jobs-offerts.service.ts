import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { JobOffert } from '../models/job.model';
import { City, Jobs } from '../models/rtm-databse.model';

@Injectable({
  providedIn: 'root',
})
export class JobsOffertsService {
  private availableCitiesPath: string = '/data/cities';
  private jobsPath: string = '/data/jobs';

  availableCities: AngularFireObject<City[]>;
  jobs: AngularFireObject<Jobs>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.availableCities = this.angularFireDatabase.object(
      this.availableCitiesPath
    );
    this.jobs = this.angularFireDatabase.object(this.jobsPath);
  }

  getAvailableCities(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.availableCities.valueChanges().subscribe((data: City[]) => {
        data ? resolve(data) : resolve(null);
      });
    });
  }

  getjobOffertsByCityName(cityName: string) {
    return new Promise<any>((resolve, reject) => {
      this.jobs.query.once('value').then((snapshot) => {
        const jobs = snapshot.child(`${cityName}`).val();
        resolve(Array.from(jobs.offerts));
      });
    });
  }
}
