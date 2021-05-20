import { Job } from 'src/app/models/job.model';

export class CityCard {
  id: number;
  city: string;
  imgUrl: string;
  jobOfferts: Job[];
  jobOffertsAmount: number;

  constructor(jobOfferts: Job[]) {
    this.jobOffertsAmount = jobOfferts.length + 1;
  }
}
