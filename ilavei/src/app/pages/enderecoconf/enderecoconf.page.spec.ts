import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnderecoconfPage } from './enderecoconf.page';

describe('EnderecoconfPage', () => {
  let component: EnderecoconfPage;
  let fixture: ComponentFixture<EnderecoconfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoconfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnderecoconfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
