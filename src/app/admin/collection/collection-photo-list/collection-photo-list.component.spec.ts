import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPhotoListComponent } from './collection-photo-list.component';

describe('CollectionPhotoListComponent', () => {
  let component: CollectionPhotoListComponent;
  let fixture: ComponentFixture<CollectionPhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionPhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
