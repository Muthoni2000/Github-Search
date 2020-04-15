 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderComponent } from './wonder.component';

describe('WonderComponent', () => {
  let component: WonderComponent;
  let fixture: ComponentFixture<WonderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
