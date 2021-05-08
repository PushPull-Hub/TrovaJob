import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { CompanyJobRequest, Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobsOffertsService {
  private dataBasePath: string = '/jobs';
  jobs: AngularFireObject<any>;
  companiesJobsRequests: CompanyJobRequest[] = [];

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.jobs = this.angularFireDatabase.object(this.dataBasePath);
  }

  getJobs(): Promise<Job[]> {
    return new Promise((resolve, reject) => {
      this.jobs.valueChanges().subscribe((data: Job[]) => {
        data && data.length
          ? resolve(data)
          : reject('from JobsOffertsService line 21 : error on loading data. ');
      });
    });
  }

  getOfferts(): Promise<CompanyJobRequest[]> {
    return new Promise((resolve, reject) => {
      this.getJobs().then((data: Job[]) => {
        if (data && data.length) {
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
}
