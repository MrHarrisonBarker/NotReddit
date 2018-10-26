import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { NavComponent } from '../nav/nav.component';
import {RouterModule} from '@angular/router';
import {ClipboardModule} from 'ngx-clipboard';
import {CrosspostComponent} from '../crosspost/crosspost.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Domain} from '../domain';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        providers: [Domain],
        imports: [ RouterModule , ClipboardModule , ReactiveFormsModule , FormsModule , HttpClientModule ],
        declarations: [ PostComponent , NavComponent , CrosspostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
