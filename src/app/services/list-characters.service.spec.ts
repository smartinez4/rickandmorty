import { TestBed } from '@angular/core/testing';
import { ListCharactersService } from './list-characters.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ListCharactersService', () => {
  let service: ListCharactersService;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ListCharactersService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('loadCharacters', () => {
    it('should call http.get', () => {
      service.load().subscribe();

      http.expectOne({
        method: 'GET',
        url: service.listUrl,
      });
    });
  });
});
