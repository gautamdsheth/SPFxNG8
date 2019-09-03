import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsolWebPartComponent } from './testsol-web-part.component';

describe('TestsolWebPartComponent', () => {
  let component: TestsolWebPartComponent;
  let fixture: ComponentFixture<TestsolWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsolWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsolWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
