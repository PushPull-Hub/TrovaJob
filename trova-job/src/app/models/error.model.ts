export class CustomErrorObject {
  isThereError: boolean;
  errorMessage: string;
  status?: number;

  constructor(errorMessage: string, status?: number) {
    this.isThereError = true;
    this.errorMessage = errorMessage;
    this.status = status;
  }
}
