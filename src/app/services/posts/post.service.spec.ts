import { Http, HttpModule, ConnectionBackend,
  ResponseOptions, XHRBackend, Response,
  BaseRequestOptions, RequestOptions, RequestMethod} from '@angular/http';

import { TestBed, inject, async} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { UserService, AlertService, ProfileService,
  AuthenticationService, PostService} from './../../services/index';
import { Post } from '../../models/index';


describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        HttpClientModule
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
        UserService,
        ProfileService,
        AuthenticationService
      ]
    });

    // This section till the end of the function is responsible for mocking
    // the needed localstorage functions, since the service uses them.
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
  it('getPosts() should return null if there is no appToken',
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

  it('getPosts()  should return fakeData if there is appToken',
    inject([PostService, MockBackend], (postService, mockBackend) => {

    // Setting fake data to prep getPosts()
    localStorage.setItem('token', 'TOKEN');
    const fakeData = { Post: 'post' };

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData });

      connection.mockRespond(new Response(options));
    });

    // Makes the request
    postService.getPosts().subscribe((result) => {
      expect(result).toEqual(fakeData);
     });
  }));

  // For savePosts()
  it('savePosts()  should return nothing if there isn\'t a valid logged user',
    inject([PostService, MockBackend], (postService, mockBackend) => {

    const fakeData = { Post: 'Saved!' };
    const saveFakeData = 'Some Data';

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData });

      connection.mockRespond(new Response(options));
    });

    // Makes the request
    let response = postService.savePost(saveFakeData);
    const emptyObs = new Observable<Post>();
    expect(response).toEqual(emptyObs);

    // Testing now a user with no cod attribute
    const fakeUser = { userName: 'Gustavo' };
    localStorage.setItem('userData', JSON.stringify(fakeUser));

    // Making the request for no cod user
    response = postService.savePost(saveFakeData);
    expect(response).toEqual(emptyObs);

  }));

  it('savePosts() should return fakeData if there is a valid logged user',
    inject([PostService, MockBackend], (postService, mockBackend) => {

    // Setting up the data needed for savePosts()
    const fakeData = { Post: 'Saved!' };
    const fakeUser = { userName: 'Gustavo', cod: 35 };
    const saveFakeData = 'Some Data';
    localStorage.setItem('userData', JSON.stringify(fakeUser));

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData });

      connection.mockRespond(new Response(options));
    });

    // Makes the request
    postService.savePost(saveFakeData).subscribe((result) => {
      expect(result).toEqual(fakeData);
    });
  }));

  it('updatePosts() should return fakeData if there is a valid logged user',
    inject([PostService, MockBackend], (postService, mockBackend) => {

    // Setting up the data needed for savePosts()
    const fakeData = { Post: 'Updated!' };
    const fakeUser = { userName: 'Gustavo', cod: 35 };
    const saveFakeData = 'Some Data';
    localStorage.setItem('userData', JSON.stringify(fakeUser));

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData });

      connection.mockRespond(new Response(options));
    });

    // Makes the request
    postService.updatePost(saveFakeData).subscribe((result) => {
      expect(result).toEqual(fakeData);
    });
  }));
});
