#!/bin/bash

# Exit with nonzero exit code if anything fails
set -e

# ------------------------------------------------------------------------------
# CONFIGURE SCRIPT
# ------------------------------------------------------------------------------

# Set our source branch (where we'll build from) and our target branch (where we
# want to send the build page to)
SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
REPO=`git config remote.origin.url`

# Prep git credentials
GIT_USER_NAME="Travis CI"
GIT_USER_EMAIL="PredixtravisCI@ge.com"

# Check if we should run a deploy, or if we should skip it. Only commits to master
# should trigger a build. Pull requests and commits to features branches should not.
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    exit 0
fi

# ------------------------------------------------------------------------------
# PREPARE FILESYSTEM
# ------------------------------------------------------------------------------

# Create a temp directory that will store the bower.json file
mkdir tmp_bower

# Clone this repo, and go into that folder
git clone ${REPO} ghp_tmp
cd ghp_tmp

# Find out our repo name from the bower file
REPO_NAME=$(grep "name" bower.json | sed 's/"name": "//' | sed 's/",//')
echo "repo name is ${REPO_NAME}"

# Copy the bower.json file out of the directory to a temp one
cp bower.json ../tmp_bower/bower.json
# ... and checkout gh-pages - create it if it doesn't exist.
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
# ... and copy the bower.json file from our temp directory into the current one, overriding it, and passing a yes in there's a prompt
yes | cp ../tmp_bower/bower.json bower.json

# Install your new tag through bower (use --force because it will fail without forcing it)
bower install ${REPO_NAME} --force
# Force install px-dark-theme (to generate dark-theme demos)
bower install px-dark-theme --force

# ------------------------------------------------------------------------------
# BUILD PROJECT
# ------------------------------------------------------------------------------

# Go into the component folder we've just installed from bower
cd ${REPO_NAME}

# Install vulcanize
npm install vulcanize -g

# Run vulcanize to prepare files for production
vulcanize index.html -o index.vulcanized.html --inline-scripts --inline-css --strip-comments

# Move original index to `indexh2` and prepapre an `indexdarkh2` for dark-theme
yes | cp index.html indexh2.html
yes | cp indexh2.html indexdarkh2.html

# Import dark-theme on the `indexdarkh2` page
perl -pi -w -e 's/px-theme\/px-theme-styles.html/px-dark-theme\/px-dark-theme-styles.html/g;' indexdarkh2.html

# Move vulcanized `index` file to `index.html`, overwrite existing
yes | cp index.vulcanized.html index.html
rm index.vulcanized.html

# -------------------------- SPECIFIC TO THIS PROJECT --------------------------

# Vulcanize additional pages (i.e. component demo pages)
vulcanize px-data-table-column-demo.html -o px-data-table-column-demo.vulcanized.html --inline-scripts --inline-css --strip-comments
yes | cp px-data-table-column-demo.vulcanized.html px-data-table-column-demo.html
rm px-data-table-column-demo.vulcanized.html
vulcanize px-data-table-highlight-demo.html -o px-data-table-highlight-demo.vulcanized.html --inline-scripts --inline-css --strip-comments
yes | cp px-data-table-highlight-demo.vulcanized.html px-data-table-highlight-demo.html
rm px-data-table-highlight-demo.vulcanized.html

# ------------------------------------------------------------------------------
# SW-PRECACHE
# ------------------------------------------------------------------------------

# npm install sw-precache
# sw-precache  --root='.' --static-file-globs='**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'

# ------------------------------------------------------------------------------
# GIT PUSH TO REMOTES
# ------------------------------------------------------------------------------

# Remember to exit out of the component before we do any git stuff
cd ../

# Set git credentials (defined in settings above)
git config user.name ${GIT_USER_NAME}
git config user.email ${GIT_USER_EMAIL}

# Parse https remote URL, find-and-replace to create a SSH remote URL we can
# push to for PredixDev GH organization
SSH_PREDIXDEV_REMOTE=${REPO/https:\/\/github.com\//git@github.com:}

# Replace `PredixDev` organization with `predix-ui` to create an additional
# remote we will push to for second docs repo
SSH_PREDIXUI_REMOTE=${SSH_PREDIXDEV_REMOTE/:PredixDev\//:predix-ui\/}

# Do the git stuff
git add .
git commit -m "[Travis] Automatically rebuild documentation for Github Pages"

# Prepare ssh key, which we'll use to authenticate for SSH-push deploy
eval `ssh-agent -s`
# ... and change permissions for deploy key
chmod 0400 $TRAVIS_BUILD_DIR/deploy_key1
chmod 0400 $TRAVIS_BUILD_DIR/deploy_key2

# First, push to PredixDev/REPO (force to override out-of-date refs)
ssh-add $TRAVIS_BUILD_DIR/deploy_key1
git push $SSH_PREDIXDEV_REMOTE $TARGET_BRANCH --force

# Second, remove the previous identity.
ssh-add -D

# Third, push to predix-ui/REPO (force to override out-of-date refs)
ssh-add $TRAVIS_BUILD_DIR/deploy_key2
git push $SSH_PREDIXUI_REMOTE $TARGET_BRANCH --force
