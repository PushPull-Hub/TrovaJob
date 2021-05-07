export class CustomErrorObject {
  isThereError: boolean;
  errorMessage: string;
  status?: number;

  constructor(isThereError: boolean, errorMessage: string, status?: number) {
    this.isThereError = isThereError;
    this.errorMessage = errorMessage;
    this.status = status;
  }
}
