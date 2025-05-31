import { environment } from '../../../../environments/environment.development';
import { GithubIssue } from '../interfaces/github-issue.interface';
import { getIssueByNumber } from './get-issue-by-number.actions';

const issueNumber = 1234;
const BASE_URL = environment.base_url;
const token = environment.githubToken;
const mockIssue = {
  id: 123,
  number: issueNumber,
  title: 'Sample Issue',
} as GithubIssue;

describe('Get Issue By Number Actions', () => {
  it('should fetch successfully', async () => {
    const reqURL = `${BASE_URL}/issues/${issueNumber}`;
    const issueResponse = new Response(JSON.stringify(mockIssue), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    // Espia el método fetch y simula una respuesta exitosa
    spyOn(window, 'fetch').and.resolveTo(issueResponse);

    const issue = await getIssueByNumber(issueNumber.toString());

    expect(window.fetch).toHaveBeenCalledWith(reqURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(issue).toEqual(mockIssue);
  });

  it('should fetch with error', async () => {
    const issueResponse = new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });

    spyOn(window, 'fetch').and.resolveTo(issueResponse);

    try {
      await getIssueByNumber(issueNumber.toString());
      expect(true).toBeFalse();
    } catch (error) {
      expect(error).toBe(`Cannot get issue by number: ${issueNumber}`);
    }
  });
});
