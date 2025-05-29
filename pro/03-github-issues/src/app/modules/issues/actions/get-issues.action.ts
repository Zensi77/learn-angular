import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubIssue } from '../interfaces/github-issue.interface';

const baseUrl = environment.base_url;
const githubToken = environment.githubToken;

export const getIssues = async () => {
  await sleep(1500);

  try {
    const resp = await fetch(`${baseUrl}/issues`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });

    if (!resp.ok) throw 'Cannot get issues';

    const issues: GithubIssue[] = await resp.json();

    return issues;
  } catch (error) {
    throw 'Cannot get issues';
  }
};
