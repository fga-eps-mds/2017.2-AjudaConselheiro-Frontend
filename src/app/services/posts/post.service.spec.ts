import { Http, HttpModule, ConnectionBackend,
  ResponseOptions, XHRBackend, Response,
  BaseRequestOptions, RequestOptions, RequestMethod} from '@angular/http';

import { TestBed, inject, async} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AlertService, UserService } from '../../services/index';
import { PostService } from './post.service';


describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        PostService,
        ConnectionBackend,
        AlertService,
        UserService
      ]
    });

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  // For getPosts()
  it('it should return null if there is no appToken',
    inject([PostService, MockBackend], (postService, mockBackend) => {

      const fakeData = { Post: 'post' };

      // Mocking HTTP connection for this test
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ body: fakeData });

        connection.mockRespond(new Response(options));
      });

      const response = postService.getPosts();
      expect(response).toBeUndefined();
  }));

  it('it should return fakeData if there is appToken',
  inject([PostService, MockBackend], (postService, mockBackend) => {

    localStorage.setItem('token', 'TOKEN');

    console.log('AQUI NO TESTE: ');
    console.log(localStorage.getItem('token'));

    const fakeData = { Post: 'post' };

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData });

      connection.mockRespond(new Response(options));
    });

    postService.getPosts().subscribe((result) => {
      console.log('No subscribe');
      console.log(result);
      expect(result).toEqual(fakeData);
     });
  }));
});
