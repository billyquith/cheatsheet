Git
===

Create & Config
---------------

### Create

Create new repo:

```bash
git init
touch .gitignore
git add *
```

Clone repo from various sources:

- `git clone SOURCE_REPO NEW_REPO` :: Copy local repo.
- `git clone git://...` :: Copy remote git source.
- `git clone https://...` :: Copy remote git repo over HTTPS.

### Config

Set values:

- `git config --global user.name NAME` :: Set user name in config.
- `git config --global user.email EMAIL` :: Set user email address in config.
- `git config --global core.editor EDITOR` :: Set text editor. "EDITOR <file>" to open.

`--local`, `--global`, `--system` used to set local repo, user environment, system environment.

Show/edit values:

- `git config -l` :: List config. Option: `--local`.
- `git config --global --edit` :: Edit config in text editor.


TODO: `.gitignore` etc.


Changing
--------

### Differences

Show unstaged differences:

- `git status` :: Show which files changed.
- `git diff` :: Show unstaged file differences.

Stage changes for commit:

- `git add FILES...`      :: Stage specific files.
- `git add *`             :: Stage all files added & changed recursively.
- `git mv OLD NEW`        :: Stage move or rename.
- `git rm FILES...`       :: Stage file deletes.
- `git rm --cached files` :: Stop tracking, but keep files.


### Commiting

After staging changes we can commit them.

- `git commit`              :: Commit staged changes and use edit for message.
- `git commit -m 'MESSAGE'` :: Commit with message.
- `git commit --amend`      :: Apply staged changed to last commit and edit change message.

Then we can `git push` to a remote.


### History

Commit history log:

- `git log`                     :: List repo history.
- `git log -n ENTRIES`          :: Limit list to last ENTRIES.
- `git log FILE`                :: Show only changes that affect FILE.
- `git log --graph --decorate`  :: Show graphical graph of commits.

Repo changes:

- `git reflog`      :: Show changes made to local repo's HEAD.
- `git blame FILE`  :: Show who edited each FILE line last.


### Revert

Per file:

- `git checkout FILE`   :: Revert file to branch HEAD.

Per branch:

- `git reset --hard`    :: Revert *all local changes.


Remotes
-------

### Updating

Updating local repo without changing working files:

- `git fetch`         :: Fetch, but do not merge, changes from upstream.
- `git fetch REMOTE`  :: Fetch from specific remote.

Update local repo, changing working file:

- `git pull`          :: Fetch and merge changes from upstream.
- `git pull REMOTE`   :: Use specific remote.

Patching local files:

- `git apply PATCH.diff` :: Apply patch file.


### Publishing

- `git push`          :: Push committed changes upstream.
- `git push REMOTE`   :: Push to specific remote.


### Remotes

- `git remote add URL`  :: Add new remote.


```bash
```

