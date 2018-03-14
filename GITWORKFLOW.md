# Git Workflow Guide

#### Git Flow

We use [Git flow - AVH](https://github.com/petervanderdoes/gitflow-avh). Note that this is NOT the original git flow repo (nvie) since it lacks features and has not been updated in years.

To check what version you have installed on your system run:

`git flow version`

The updated version should include "AVH". For example: `1.10.1 (AVH Edition)`

You must run `git flow init` in the root directory of the repository to initialize it and set up some configs. Use the default names for all branches:

```
Production releases - master
Next releases - develop
Feature branches - feature/
Bugfix branches - bugfix/
Release branches - release/
Hotfix branches - hotfix/
Support branches - support/
Version tag prefix - []
```

#### Workflow

##### Branch/Commits

For all branches, the naming convention should be prefixed with the JIRA Ticket number (if internal), example: `CJL-40-add-button` and the issue number for github issues, example: `12-add-button`

For all commits, the naming convention should also be prefixed with the JIRA ticket number, example: `CJL-40 add-button-component`, the same applies for github issues: `12-add-button-component`

##### Creating Feature Branches

```
git checkout stage
git pull
git flow feature start CJL-TICKERNUMBER-TICKET-NAME-DESCRIBING-THE-ISSUE
#For GitHub issues:
git flow feature start ISSUE_ID-DESCRIBE-THE-BRANCH

# ... do your changes here and then when finished ...
git add
git commit -m "CJL-TICKETNUMBER: Your commit message"
```

Put your branch for a PR. When reviewed and approved, do an interactive rebase and push (see below code block).

You should edit your history but only fixup or squash things like, "Fix js error", "Typo", etc. (Things that are not necessary for understanding the context of how you developed the branch.) Major steps affecting the repository should be kept, but most features can be reduced to a single commit.

You may want to rebase several times over the course of your ticket, but rebasing totally re-creates your hashes, so if anyone else is working on or reviewing this branch, let them know when you push a rebased branch so they don't just pull the branch, which can cause duplicate commits.

##### Rebasing

```
# get current stage
git checkout stage
git pull
# checkout your branch
git checkout feature/YOUR-BRANCH
git pull
# interactive rebase
git flow feature rebase -i
# ... follow steps to rebase and fix any conflicts here ...
# Important - force your changes because you are rewriting all of the hashes
git push origin feature/CJL-TICKETNAME --force

# if your ticket is ready to merge, use git flow feature finish to merge it back to stage. this puts you on stage and then you can push to stage
git flow feature finish CJL-TICKETNAME
git push
```

##### Epics

For epics, create a feature branch for the entire epic:

```
git checkout stage
git pull
git flow feature start CJL-EPICNUMBER-EPICNAME
Branch the subtask tickets off this feature with gitflow-avh
git flow feature start CJL-SUBTASKNUMBER-NAME feature/CJL-EPICNUMBER-EPICNAME
# notice that the base branch must include the name of the actual git branch and not just the Jira ticket name
```

Your PR will be merged by a user with merge access after it gets approved by at least two other members.

##### Hotfixes

```
git checkout master
git pull
git checkout stage
git pull
git flow hotfix start fix-branch
# ...Do your changes here...
git add
git commit -m "hotfix whatever"
git flow hotfix finish fix-branch
The last step merges with stage and master.
Set the tag message: ([CJL-TICKETNUMBER] whatever you did)
git push origin stage
git push --tags
git push origin master
```

#### Release Guide

1. Update all JIRA tickets with the version number, and update the release page.
2. Follow the instructions below to start a new release. Use the new version # for the tag.
3. Update `package.json` and `CHANGELOG.md` with the new release version and information.
4. Push the new tag `git push --tags`
5. Send out a release notes email (internally).

##### Releases

```
git checkout master
git pull
git checkout stage
git pull
git flow release start '1.x.x'
npm version #use the appropriate tag for your release (major, minor, patch)
git add
git commit -m “bump version 1.x.x”

git flow release finish 1.x.x # when prompted, tag should be the release version
git push --tags
git push origin stage
git push origin master
```
