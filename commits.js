const axios = require("axios");

async function countCommitsInDateRange(owner, startDate, endDate, accessToken) {
  const headers = { Authorization: `token ${accessToken}` };
  const params = { since: startDate, until: endDate };
  let totalCommits = 0;

  try {
    const repoListUrl = `https://api.github.com/users/${owner}/repos?type=all`;
    const response = await axios.get(repoListUrl, { headers });

    const repos = response.data;
    for (const repo of repos) {
      const repoName = repo.name;
      const commitsUrl = `https://api.github.com/repos/${owner}/${repoName}/commits`;
      const commitsResponse = await axios.get(commitsUrl, { headers, params });

      totalCommits += commitsResponse.data.length;
    }

    return totalCommits;
  } catch (error) {
    console.error(`Failed to fetch commits: ${error.message}`);
    return 0;
  }
}

// Usage example
const owner = "dmitryulasau";
const startDate = "2023-01-01T00:00:00Z";
const endDate = "2023-07-19T23:59:59Z";
const accessToken = "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";

countCommitsInDateRange(owner, startDate, endDate, accessToken)
  .then((totalCommits) => {
    console.log(`Total commits in all repositories: ${totalCommits}`);
  })
  .catch((error) => {
    console.error(error);
  });
