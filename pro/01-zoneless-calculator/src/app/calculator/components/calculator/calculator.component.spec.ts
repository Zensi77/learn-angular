import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '@app/calculator/services/calculator.service';
import { By } from '@angular/platform-browser';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

class MockCalculatorService {
  resultText = jasmine.createSpy('resultText').and.returnValue('100.00');
  subResultText = jasmine.createSpy('subResultText').and.returnValue('50.00');
  lastOperator = jasmine.createSpy('lastOperator').and.returnValue('+');

  constructNumber = jasmine.createSpy('constructNumber');
}

describe('CalculatorComponent', () => {
  let fixture: ComponentFixture<CalculatorComponent>;
  let compiled: HTMLElement;
  let component: CalculatorComponent;
  let mockCalculatorService: MockCalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
      providers: [
        { provide: CalculatorService, useClass: MockCalculatorService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    mockCalculatorService = TestBed.inject(
      CalculatorService
    ) as unknown as MockCalculatorService;
  });

  beforeAll(() => {});
  afterAll(() => {});
  afterEach(() => {});

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the current getters return the expected values', () => {
    expect(component.resultText()).toBe('100.00');
    expect(component.subResultText()).toBe('50.00');
    expect(component.lastOperation()).toBe('+');
  });

  it('should display proper calculation values', () => {
    mockCalculatorService.resultText.and.returnValue('123');
    mockCalculatorService.subResultText.and.returnValue('456');
    mockCalculatorService.lastOperator.and.returnValue('-');

    fixture.detectChanges();

    expect(compiled.querySelector('span')?.innerText).toBe('456 -');
    expect(component.resultText()).toBe('123');
    expect(component.subResultText()).toBe('456');
    expect(component.lastOperation()).toBe('-');
  });

  it('should have 19 buttons', () => {
    expect(component.calculatorButtons()).toBeTruthy();
    expect(component.calculatorButtons().length).toBe(19);
  });

  it('should have 19 buttons with content projection', () => {
    // const buttonByDirective = fixture.debugElement.queryAll(
    //   By.directive(CalculatorButtonComponent)
    // );

    const buttons = compiled.querySelectorAll('calculator-button');

    expect(buttons[0].textContent?.trim()).toBe('C');
  });

  it('should handle keyboard events correctly', () => {
    const enterEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    document.dispatchEvent(enterEvent);
    expect(mockCalculatorService.constructNumber).toHaveBeenCalledWith('=');

    const escapeEvent = new KeyboardEvent('keyup', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);
    expect(mockCalculatorService.constructNumber).toHaveBeenCalledWith('C');
  });
});
