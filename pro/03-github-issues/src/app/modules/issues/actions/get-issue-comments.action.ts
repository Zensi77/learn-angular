import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubIssue } from '../interfaces/github-issue.interface';

const baseUrl = environment.base_url;
const githubToken = environment.githubToken;

export const getIssueComments = async (id: string) => {
  await sleep(1500);

  try {
    const resp = await fetch(`${baseUrl}/issues/${id}/comments`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });

    if (!resp.ok) throw `Cannot get comments of issue with id ${id}`;

    const issue: GithubIssue[] = await resp.json();

    return issue;
  } catch (error) {
    throw 'Cannot get comments of issue: ' + error;
  }
};
