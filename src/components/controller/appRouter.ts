import Router from './router';

export class AppRouter extends Router {
  root: string;
  path: string;

  constructor() {
    super();
    this.root = this.url.origin;
    this.path = this.url.pathname;
  }

  routeHome() {
    window.history.pushState({}, '', this.root);
  }

  routeToGame(id: string) {
    const url = `${this.root}/game/${id}`;
    window.history.pushState({}, '', url);
  }

  getPath(): string {
    return window.location.pathname;
  }
}
