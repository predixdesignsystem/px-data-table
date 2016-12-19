#!/bin/bash

# Exit with nonzero exit code if anything fails
set -e


#set our source and traget branches
SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
REPO=`git config remote.origin.url`

#pull requests and commits to other branches shouldn't try to deploy
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    exit 0
fi

#create a temp directory that will store the bower.json file
mkdir tmp_bower

#clone this repo, and go into that folder.
git clone ${REPO} ghp_tmp
cd ghp_tmp

#find out our repo name from the bower file
REPO_NAME=$(grep "name" bower.json | sed 's/"name": "//' | sed 's/",//')
echo "repo name is ${REPO_NAME}"

#set up our variables and configs
git config user.name "Travis CI"
git config user.email "PredixtravisCI@ge.com"

SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

#copy the bower.json file out of the directory to a temp one
cp bower.json ../tmp_bower/bower.json
#and checkout gh-pages - create it if it doesn't exist.
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
#copy the bower.json file from our temp directory into the current one, overriding it, and passing a yes in there's a prompt
yes | cp ../tmp_bower/bower.json bower.json

#install your new tag through bower, it will fail without forcing it.
bower install ${REPO_NAME} --force
bower install px-dark-theme --force

#optimize for production
cd ${REPO_NAME} #go into the component folder
npm install vulcanize -g
vulcanize index.html -o index.vulcanized.html --inline-scripts --inline-css --strip-comments
yes | cp index.html indexh2.html
yes | cp indexh2.html indexdarkh2.html
yes | cp index.vulcanized.html index.html
rm index.vulcanized.html
vulcanize px-data-table-column-demo.html -o px-data-table-column-demo.vulcanized.html --inline-scripts --inline-css --strip-comments
yes | cp px-data-table-column-demo.vulcanized.html px-data-table-column-demo.html
rm px-data-table-column-demo.vulcanized.html
vulcanize px-data-table-highlight-demo.html -o px-data-table-highlight-demo.vulcanized.html --inline-scripts --inline-css --strip-comments
yes | cp px-data-table-highlight-demo.vulcanized.html px-data-table-highlight-demo.html
rm px-data-table-highlight-demo.vulcanized.html

perl -pi -w -e 's/px-theme\/px-theme-styles.html/px-dark-theme\/px-dark-theme-styles.html/g;' indexdarkh2.html


cd ../ #remember to exit out of the component before you do any git stuff

# npm install sw-precache
# sw-precache  --root='.' --static-file-globs='**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'

#do the git stuff
git add .
git commit -m "rebuild github pages"
eval `ssh-agent -s`
#and cahnge permissions
chmod 0400 $TRAVIS_BUILD_DIR/deploy_key
ssh-add $TRAVIS_BUILD_DIR/deploy_key
#Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH
git push https://github.com/predix-ui/${REPO_NAME}
