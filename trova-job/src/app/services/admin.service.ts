import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { JobsOffertsService } from './jobs-offerts.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private jobsOffertsService: JobsOffertsService) {}

  getUsers(): void {}

  updateUser(userId: string) {}

  deleteUser(userId: string): void {}

  getJobs(): Promise<Job[]> {
    return this.jobsOffertsService.getJobs();
  }

  updateJob(jobId: string): void {}

  deleteJob(jobId: string): void {}
}
