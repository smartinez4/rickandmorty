import { of } from 'rxjs';

export class ListCharactersServiceMock {
  load() {
    return of({});
  }
}
