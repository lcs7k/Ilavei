import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsteticaPage } from './estetica.page';

describe('EsteticaPage', () => {
  let component: EsteticaPage;
  let fixture: ComponentFixture<EsteticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsteticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsteticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
