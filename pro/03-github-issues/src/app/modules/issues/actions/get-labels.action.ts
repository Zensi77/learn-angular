import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GithubLabel } from '../interfaces/github-label.interface';

const baseUrl = environment.base_url;
const githubToken = environment.githubToken;

export const getLabels = async () => {
  await sleep(1500);

  try {
    const resp = await fetch(`${baseUrl}/labels`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });

    if (!resp.ok) throw 'Cannot get labels';

    const labels: GithubLabel[] = await resp.json();

    return labels;
  } catch (error) {
    throw 'Cannot get labels';
  }
};
