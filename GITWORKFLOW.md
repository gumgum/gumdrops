# Git Workflow Guide

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

## Workflow

##### Branch/Commits

To help track down work on issues, we prefix the branches and commits with their associated Github issue id, for example:

```
git flow feature start #12-add-red-button # will create the branch feature/#12-add-button
git commit -m "#12 Add red button component" # creates a commit with the message "#12 Add red button component"
```

##### Creating Feature Branches

```
git checkout develop
git pull
git flow feature start #ISSUE_ID-DESCRIBE-THE-BRANCH

# ... do your changes here and then when finished ...
git add
git commit -m "#ISSUE_ID Your commit message"
```

Put your branch for a PR. When reviewed and approved, do an interactive rebase and push (see below code block).

You should edit your history but only fixup or squash things like, "Fix js error", "Typo", etc. (Things that are not necessary for understanding the context of how you developed the branch.) Major steps affecting the repository should be kept, but most features can be reduced to a single commit.

You may want to rebase several times over the course of your ticket, but rebasing totally re-creates your hashes, so if anyone else is working on or reviewing this branch, let them know when you push a rebased branch so they don't just pull the branch, which can cause duplicate commits.

##### Rebasing

```
# update the origin branch
git checkout develop
git pull
git checkout feature/YOUR-BRANCH
git pull
# interactive rebase
git flow feature rebase -i
# ... follow steps to rebase and fix any conflicts here ...
# Important - force your changes because you are rewriting all of the hashes
git push origin feature/YOUR-BRANCH --force

# if your branch is ready to merge, use git flow feature finish to merge it back to develop. this puts you on develop and then you can push your changes
git flow feature finish YOUR-BRANCH
git push
```

Your PR will be merged by a user with merge access after it gets approved by at least two other members.

##### Releases

```
git checkout master
git pull
git checkout develop
git pull
git flow release start '1.x.x'
npm version  TAG #use the appropriate tag for your release (major, minor, patch)

git flow release finish 1.x.x # when prompted, tag should be the release version
git push --tags
git push origin develop
git push origin master
```

## Publishing to NPM

**Important:** This action can only be performed by authenticated users with publishing access.

After creating the release and pushing it, you can build the library for distribution and publish it by running the command:

```
env TAG=canary/latest/someOtherTag npm run publish-pack
```

This command will run the script in `tools/build.js` that:

* createsESM modules for every component
* CommonJS bundle
* UMD bundle
* Publishes to the NPM registry with the specified tag.

It is important that the package version used for publishing is unique, as that also makes it possible to target specific versions with package managers:

```
yarn add gumdrops@1.0.0

npm install gumdrops@1.0.0
```
