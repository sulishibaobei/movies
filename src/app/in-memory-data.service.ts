import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let recent = [
            { id: 1, image: './assets/images/t1.jpg', title: 'Pellentesque vitae pulvinar tortor nullam interdum metus a imperdiet', author: 'John Maniya', view: '2,114,200 views', time: '7:20' },
            { id: 2, image: './assets/images/t2.jpg', title: 'Interdum pellentesque vitae pulvinar tortor nullam metus a imperdiet', author: 'John Maniya', view: '4,200 views', time: '2.30' },
            { id: 3, image: './assets/images/t3.jpg', title: 'Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor', author: 'John Maniya', view: '71,174 views', time: '4.30' }
        ];
        return { recent };
    }

}