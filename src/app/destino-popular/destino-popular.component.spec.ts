import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoPopularComponent } from './destino-popular.component';

describe('DestinoPopularComponent', () => {
  let component: DestinoPopularComponent;
  let fixture: ComponentFixture<DestinoPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
