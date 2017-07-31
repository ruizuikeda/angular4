import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindTesteComponent } from './bind-teste.component';

describe('BindTesteComponent', () => {
  let component: BindTesteComponent;
  let fixture: ComponentFixture<BindTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
