// Dirty but for one property it's ok
// more general approach https://blog.briebug.com/blog/how-to-add-ngrx-store-slices-into-localstorage
export class LocalStorageService {
  static KEY = 'token';
  static setToken(token: string): void {
    window.localStorage.setItem(LocalStorageService.KEY, token);
  }
  static getToken(): string {
    return window.localStorage.getItem(LocalStorageService.KEY) || '';
  }
}