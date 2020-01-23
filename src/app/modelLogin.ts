import { InMemoryDbService } from 'angular-in-memory-web-api';

export class modelLogin implements InMemoryDbService {
  createDb() {
    let model = [
      { id: 1, name: 'Soumya' },
      { id: 2, name: 'Rakesh' },
      { id: 3, name: 'Tushar' },
      { id: 4, name: 'Rakhsit' }
    ];
    return {model};
  }
}