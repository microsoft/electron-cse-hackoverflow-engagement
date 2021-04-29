# generate issues

This script was used to generate the _update fiddle_ issues.

Committing to source control for future reference.

## running the script

> this will only work for maintainers of the electron-cse-hackoverflow-engagement repo.
>
> this script is not easily-reversable. Make sure you know what you are doing before running it!

1. Generate a [GitHub Personal Access Token](https://github.com/settings/tokens/new) and grant it repo access
2. Add the token to an environment variable called `gh_pat` within an **.env** file
3. Run the script using node v16: `node index.js`

Reach out to @Ethan-Arrowood (msft internal: @etarrowo) for more information.
