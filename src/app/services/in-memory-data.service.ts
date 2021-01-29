import { InMemoryDbService } from 'angular-in-memory-web-api';
import data from '../../assets/db.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = data;
    return {articles};
  }
}
