import { InMemoryDbService } from 'angular-in-memory-web-api';

export class modelLogin implements InMemoryDbService {
  createDb() {
    let model = [
      { id: 1, name: 'Soumya', userName: 'Admin', password: 'Admin123', emailId: 'test@wipro.com', dob:'2020-01-01' },
      { id: 2, name: 'Rakesh', userName: 'Admin', password: 'Admin123', emailId: 'test@wipro.com', dob:'2020-01-01' },
      { id: 3, name: 'Tushar', userName: 'Admin', password: 'Admin123', emailId: 'test@wipro.com', dob:'2020-01-01' },
      { id: 4, name: 'Rakhsit', userName: 'Admin', password: 'Admin123', emailId: 'test@wipro.com', dob:'2020-01-01' }
    ];
    return {model};
  }
}