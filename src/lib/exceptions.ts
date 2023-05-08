export class AuthRequiredError extends Error {
  constructor(message = 'Auth is required to class this page.') {
    super(message)
    this.message = 'AuthRequiredError'
  }
}
