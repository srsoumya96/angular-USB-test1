import { InMemoryDbService } from 'angular-in-memory-web-api';

export class modelLogin implements InMemoryDbService {
  createDb() {
    let model = [
      { id: 1, name: 'Soumya', password: 'Admin123', guardianName: 'WIPRO', dob:'2020-01-01' },
      { id: 2, name: 'Rakesh', password: 'Admin123', guardianName: 'WIPRO', dob:'2020-01-01' },
      { id: 3, name: 'Tushar', password: 'Admin123', guardianName: 'WIPRO', dob:'2020-01-01' },
      { id: 4, name: 'Rakhsit', password: 'Admin123', guardianName: 'WIPRO', dob:'2020-01-01' }
    ];
    return {model};
  }
}