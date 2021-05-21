import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { CompanyJobRequest, Job } from '../models/job.model';
import { CityCard } from '../models/rtm-databse.model';

@Injectable({
  providedIn: 'root',
})
export class JobsOffertsService {
  private dataBasePath: string = '/data';
  private availableCitiesPath: string = '/data/cities';
  private cityPath: string = '/data/cities/city';

  data: AngularFireObject<any>;
  companiesJobsRequests: CompanyJobRequest[] = [];

  availableCities: AngularFireObject<CityCard[]>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.data = this.angularFireDatabase.object(this.dataBasePath);
    this.availableCities = this.angularFireDatabase.object(
      this.availableCitiesPath
    );
  }

  getTheDataBaseData(): Promise<Job[]> {
    return new Promise((resolve, reject) => {
      this.data.valueChanges().subscribe((data: Job[]) => {
        data && data.length ? resolve(data) : resolve(null);
      });
    });
  }

  getOfferts(): Promise<CompanyJobRequest[]> {
    return new Promise((resolve, reject) => {
      this.getTheDataBaseData().then((data: Job[]) => {
        if (data) {
          let offerts: CompanyJobRequest[] = [];
          data.map((job: Job) => {
            offerts.push(job.request);
          });
          resolve(offerts);
        } else {
          reject(
            'from UserService line 31 : the returned data array has no elements in it .'
          );
        }
      });
    });
  }

  getAvailableCities(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.availableCities.valueChanges().subscribe((data: CityCard[]) => {
        data ? resolve(data) : resolve(null);
      });
    });
  }
}
