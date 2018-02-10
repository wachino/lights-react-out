#!/bin/sh

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd

# Arguments
# $1: distFolder
# $2: remote github URL. Default: remote origin
# $3: repo branch. Default: gh-pages

distFolder=$1
if [ ! -z $2 ]
then
    remote=$2
else
    remote=$(git config remote.origin.url)
fi
if [ ! -z $3 ]
then
    gh-branch=$3
else
    gh-branch=gh-pages
fi

# make a directory to put the gp-pages branch
mkdir ${gh-branch}-branch
cd ${gh-branch}-branch
# now lets setup a new repo so we can update the ${gh-branch} branch
git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1
git init
git remote add --fetch origin "$remote"


# switch into the the ${gh-branch} branch
if git rev-parse --verify origin/${gh-branch} > /dev/null 2>&1
then
    git checkout ${gh-branch}
    # delete any old site as we are going to replace it
    # Note: this explodes if there aren't any, so moving it here for now
    git rm -rf .
else
    git checkout --orphan ${gh-branch}
fi

# copy over or recompile the new site
cp -a "../${distFolder}/." .

# stage any changes and new files
git add -A
# now commit, ignoring branch ${gh-branch} doesn't seem to work, so trying skip
git commit --allow-empty -m "Deploy to GitHub pages [ci skip]"
# and push, but send any output to /dev/null to hide anything sensitive
git push --force --quiet origin ${gh-branch}
# go back to where we started and remove the ${gh-branch} git repo we made and used
# for deployment
cd ..
rm -rf ${gh-branch}-branch

echo "Finished Deployment into Github Pages."
