#!/bin/bash

# Change to Jenkins build directory
echo "👋 Change to Jenkins build directory."
cd jenkins_build

# Run tests
echo "🤔 To do: Running tests with CI=true."
CI=true yarn test

# Change back to root directory
echo "👋 Change to root directory."
cd ../
