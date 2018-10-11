import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosspostComponent } from './crosspost.component';

describe('CrosspostComponent', () => {
  let component: CrosspostComponent;
  let fixture: ComponentFixture<CrosspostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosspostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
