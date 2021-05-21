import { JobOffert } from 'src/app/models/job.model';

export class RealTimeDataBaseJobs extends Object {
  cities: City[];
  jobs: Jobs;
}

export class City extends Object {
  id: number;
  city: string;
  imgUrl: string;
  jobOffertsAmount: number;
}

export type Jobs = {
  [cityName: string]: {
    offerts: JobOffert[];
  };
};
