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

```bash
git clone SOURCE_REPO NEW_REPO    # copy local    
git clone git://...
git clone https://...
```

### Config

Set values:

```bash
git config --global user.name NAME
git config --global user.email EMAIL
git config --global core.editor EDITOR    # Set text editor. "EDITOR <file>" to open.
```

- `--local`, `--global`, `--system` used to set local repo, user environment, system environment.

Show/edit values:

```bash
git config -l                   # List config. Option: --local
git config --global --edit      # edit config in text editor
```

TODO: `.gitignore` etc.


Changing
--------

### Differences

Show unstaged differences:

```bash
git status        # show which files changed
git diff          # show unstaged file differences
```

Stage changes for commit:

```bash
git add FILES...      # stage specific files
git add *             # stage all files added & changed recursively
git mv OLD NEW        # stage move or rename
git rm FILES...       # stage file deletes
git rm --cached files # stop tracking, but keep files
```

### Commiting

After staging changes we can commit them.

```bash
git commit                # commit staged changes and use edit for message
git commit -m 'MESSAGE'   # commit with message
git commit --amend        # apply staged changed to last commit and edit change message
```

```bash
git push                  # push committed changes to remote
```

### History

Commit history log:

```bash
git log                     # list repo history
git log -n ENTRIES          # limit list to last ENTRIES
git log FILE                # show only changes that affect FILE
git log --graph --decorate  # show graphical graph of commits
```

```bash
git reflog                  # show changes made to local repo's HEAD
```

```bash
git blame FILE              # show who edited each FILE line last
```

### Revert

Per file:

```bash
git checkout FILE           # revert file to branch HEAD
```

Per branch:

```bash
git reset --hard            # revert *all local changes*
```

Remotes
-------

### Updating

Updating local repo without changing working files:

```bash
git fetch             # fetch, but do not merge, changes from upstream
git fetch REMOTE      # fetch from specific remote
```

Update local repo, changing working file:

```bash
git pull              # fetch and merge changes from upstream
git pull REMOTE       # use specific remote
```

Patching local files:

```bash
git apply PATCH.diff  # apply patch file
```

### Publishing

```bash
git push              # push committed changes upstream
git push REMOTE       # push to specific remote
```

### Remotes

```bash
git remote add URL      # add new remote
```


```bash
```

