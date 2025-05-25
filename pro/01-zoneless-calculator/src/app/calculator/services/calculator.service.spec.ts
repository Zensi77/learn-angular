import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(CalculatorService);
  });

  beforeAll(() => {});
  afterAll(() => {});
  afterEach(() => {});

  it('should be created an default values', () => {
    expect(service).toBeTruthy();

    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should set resultText, subResultText to "0" when C is pressed', () => {
    service.lastOperator.set('-');
    service.resultText.set('123');
    service.subResultText.set('456');

    service.constructNumber('C');

    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should update resultText when number input', () => {
    service.constructNumber('1');
    expect(service.resultText()).toBe('1');

    service.constructNumber('2');
    expect(service.resultText()).toBe('12');
  });

  it('should handle operators correctly', () => {
    service.constructNumber('1');
    service.constructNumber('+');

    expect(service.lastOperator()).toBe('+');
    expect(service.subResultText()).toBe('1');
    expect(service.resultText()).toBe('0');
  });

  it('should calculate result correctly for operations', () => {
    service.constructNumber('2');
    service.constructNumber('+');
    service.constructNumber('3');
    service.constructNumber('=');

    expect(service.resultText()).toBe('5');

    service.constructNumber('4');
    service.constructNumber('*');
    service.constructNumber('2');
    service.constructNumber('=');
    expect(service.resultText()).toBe('8');

    service.constructNumber('8');
    service.constructNumber('/');
    service.constructNumber('2');
    service.constructNumber('=');
    expect(service.resultText()).toBe('4');

    service.constructNumber('5');
    service.constructNumber('-');
    service.constructNumber('3');
    service.constructNumber('=');
    expect(service.resultText()).toBe('2');
  });

  it('should handle decimal points correctly', () => {
    service.constructNumber('1');
    service.constructNumber('.');
    service.constructNumber('5');
    expect(service.resultText()).toBe('1.5');
  });

  it('should handle decimal points correctly start with 0', () => {
    service.constructNumber('0');
    service.constructNumber('.');
    service.constructNumber('.');
    service.constructNumber('5');
    expect(service.resultText()).toBe('0.5');
  });

  it('should handle sign change correctly', () => {
    service.constructNumber('5');
    service.constructNumber('+/-');
    expect(service.resultText()).toBe('-5');

    service.constructNumber('+/-');
    expect(service.resultText()).toBe('5');
  });

  it('should handle backspace correctly', () => {
    service.constructNumber('5');
    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('0');

    service.constructNumber('1');
    service.constructNumber('2');
    service.constructNumber('3');
    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('12');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('1');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('0');
  });

  it('should handle max length of resultText', () => {
    service.resultText.set('1234567890');
    service.constructNumber('1');
    expect(service.resultText()).toBe('1234567890');
  });
});
