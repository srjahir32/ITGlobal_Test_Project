import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSmartListComponent } from './user-smart-list.component';

describe('UserSmartListComponent', () => {
  let component: UserSmartListComponent;
  let fixture: ComponentFixture<UserSmartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSmartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSmartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
