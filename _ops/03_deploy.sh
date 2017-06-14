#!/bin/bash

echo "👌 Deploying build directory to S3."
aws s3 cp build/ s3://gumgum-storybook/build/ --recursive --region us-east-1

echo "🤓 AWS Cloudfront create-invalidation."
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E1FHQAFI7WPFU4 --paths "/*"
