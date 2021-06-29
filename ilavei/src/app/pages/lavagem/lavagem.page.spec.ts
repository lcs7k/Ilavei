import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LavagemPage } from './lavagem.page';

describe('LavagemPage', () => {
  let component: LavagemPage;
  let fixture: ComponentFixture<LavagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LavagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
