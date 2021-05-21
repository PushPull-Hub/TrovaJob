import { Job } from 'src/app/models/job.model';

export class RealTimeDataBaseJobs extends Object {
  cities: cityname[];
  city: CityCard;
}

export class CityCard extends Object {
  id: number;
  city: cityname;
  imgUrl: string;
  jobOffertsAmount: number;
  jobOfferts: Job[];
}

type cityname = string;
