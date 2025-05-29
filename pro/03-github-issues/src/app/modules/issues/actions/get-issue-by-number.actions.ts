import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubIssue } from '../interfaces/github-issue.interface';

const baseUrl = environment.base_url;
const githubToken = environment.githubToken;

export const getIssueByNumber = async (id: string) => {
  await sleep(1500);

  try {
    const resp = await fetch(`${baseUrl}/issues/${id}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });

    if (!resp.ok) throw `Cannot get issue with id ${id}`;

    const issue: GithubIssue = await resp.json();

    return issue;
  } catch (error) {
    throw 'Cannot get issue by number: ' + error;
  }
};
