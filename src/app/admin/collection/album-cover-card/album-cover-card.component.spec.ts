import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCoverCardComponent } from './album-cover-card.component';

describe('AlbumCoverCardComponent', () => {
  let component: AlbumCoverCardComponent;
  let fixture: ComponentFixture<AlbumCoverCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumCoverCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
