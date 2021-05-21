export class JobOffert {
  id: number;
  companyName: string;
  city: string;
  field: string;
  shareCapital: string;
  phoneNumber: number;
  request: CompanyJobRequest;
}

export class CompanyJobRequest extends Array {
  field: string;
  postRequested: string;
  salryRange: string;
  cvLoaderWebsite: string;
  description: string;
}
