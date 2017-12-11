import { PostService } from './../../services/posts/post.service';
import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http, RequestOptions, ConnectionBackend, ResponseOptions } from '@angular/http';
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';


import { ChecklistProductionComponent } from './checklist-production.component';
import {
  UserService,
  AlertService,
  ProfileService,
  AuthenticationService
} from '../../services/index';

describe('ChecklistProductionComponent', () => {
  let component: ChecklistProductionComponent;
  let fixture: ComponentFixture<ChecklistProductionComponent>;
  let compiled: any;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistProductionComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([
        { path: 'checklist', component: ChecklistProductionComponent }
      ])
        , HttpModule],
      providers: [
        Http,
        ConnectionBackend,
        UserService,
        AlertService,
        ProfileService,
        AuthenticationService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ChecklistProductionComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnInit', () => {
    const service = fixture.debugElement.injector.get(PostService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getPostsSpy = spyOn(service, 'getPosts').and.returnValue(
      Observable.of(fakeRes)
    );

    fixture.detectChanges();

    component.ngOnInit();

    expect(service.getPosts).toHaveBeenCalled();
  });


  it('should onSubmit', () => {

    const consoleSpy = spyOn(console, 'warn').and.returnValue({});

    fixture.detectChanges();

    component.onSubmit();

    expect(console.warn).toHaveBeenCalled();
  });

  it('savePost() should savePost()(service) and test route checklist', fakeAsync(() => {
    location = TestBed.get(Location);

    const service = fixture.debugElement.injector.get(PostService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const savePostSpy = spyOn(service, 'savePost').and.returnValue(
      Observable.of(fakeRes)
    );

    fixture.detectChanges();

    component.savePost();
    tick();
    expect(location.path()).toBe('/checklist');
    expect(service.savePost).toHaveBeenCalled();
  }));
});
