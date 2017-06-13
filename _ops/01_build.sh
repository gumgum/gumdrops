#!/bin/bash

# Change to Jenkins build directory
echo "🤗 Change to Jenkins build directory."
cd jenkins_build

# apt-get update
echo "🤗 sudo apt-get update."
sudo apt-get update

# Install cURL
echo "👋 Install curl."
sudo apt-get install -y curl ca-certificates wget apt-transport-https

# Install Node.js
echo "👋 Install Node.js."
wget https://deb.nodesource.com/node_6.x/pool/main/n/nodejs/nodejs_6.9.3-1nodesource1~trusty1_amd64.deb -O nodejs_6.9.3-1nodesource1~trusty1_amd64.deb
sudo dpkg -i nodejs_6.9.3-1nodesource1~trusty1_amd64.deb

# Install Yarn package manager
echo "👋 Install Yarn package manager."
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn=0.19.1-1

# Create Jenkins directory
echo "👋 Create jenkins directory."
sudo mkdir -p /home/jenkins
sudo chmod -R 755 /home/jenkins

# Install project dependencies from package.json
echo "👋 sudo yarn install"
sudo yarn install
if [[ $? -ne 0 ]]
then
    echo '😬 yarn install failure in gumgum-storybook - please investigate.'
    exit 1
fi
echo "👋 sudo chown -R jenkins: node_modules"
sudo chown -R jenkins: *
export PATH=${PATH}:node_modules/.bin

# Build project
echo "👏 Building project."
yarn buildstorybook

# Move build directory to root
sudo chown -R jenkins: *
echo "👋 Move build directory to root."
sudo mv build ../
echo "👋 Change to root directory."
cd ../
