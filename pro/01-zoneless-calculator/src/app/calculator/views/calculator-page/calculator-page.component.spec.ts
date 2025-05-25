import { ComponentFixture, TestBed } from '@angular/core/testing';
import CalculatorPageComponent from './calculator-page.component';

describe('CalculatorService', () => {
  let fixture: ComponentFixture<CalculatorPageComponent>;
  let compiled: HTMLElement;
  let component: CalculatorPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorPageComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  beforeAll(() => {});
  afterAll(() => {});
  afterEach(() => {});

  it('should create the component', () => {
    console.log(fixture.nativeElement);

    expect(component).toBeTruthy();
  });

  it('should render calculator container', () => {
    expect(compiled.querySelector('app-calculator')).not.toBeNull();
  });

  it('should contain basic css classes', () => {
    const div = compiled.querySelector('div');

    const clasList = div?.classList.value.split(' ');

    const shouldHave =
      'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(
        ' '
      );

    shouldHave.forEach((cssClass) => {
      expect(clasList).toContain(cssClass);
    });
  });
});
