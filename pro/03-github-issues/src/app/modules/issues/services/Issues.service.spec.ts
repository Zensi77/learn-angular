import { TestBed } from '@angular/core/testing';
import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { IssuesService } from './Issues.service';
import { State } from '../interfaces/github-issue.interface';

describe('Issues Service', () => {
  let service: IssuesService;
  const queryClient = new QueryClient();

  beforeEach(() => {
    TestBed.configureTestingModule({
      teardown: { destroyAfterEach: false },
      providers: [provideQueryClient(queryClient)],
    });
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load labels', async () => {
    const { data } = await service.labelsQuery.refetch();
    expect(data?.length).toBe(30);
    expect(data).toBeInstanceOf(Array);
  });

  it('should set selected state', async () => {
    service.setSelectedState(State.Closed);
    expect(service.selectedState()).toBe(State.Closed);

    const { data } = await service.issuesQuery.refetch();

    data?.forEach((issue) => {
      expect(issue.state).toBe(State.Closed);
    });
  });

  it('should set selected labels', async () => {
    service.toggleLabel('Accessibility');
    expect(service.selectedLabels()).toContain('Accessibility');

    service.toggleLabel('Accessibility');
    expect(service.selectedLabels()).not.toContain('Accessibility');
  });

  it('should set labell and get issues by label', async () => {
    service.toggleLabel('Accessibility');

    const { data } = await service.issuesQuery.refetch();

    data?.forEach((issue) => {
      const hasLabel = issue.labels.some(
        (label) => label.name === 'Accessibility'
      );
      expect(hasLabel).toBeTruthy();
    });
  });
});
