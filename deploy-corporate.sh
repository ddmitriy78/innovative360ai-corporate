#!/bin/bash
# Deploy corporate website to S3 + CloudFront for innovative360ai.com
# Usage: ./deploy-corporate.sh [profile] [region]

set -e

AWS_PROFILE="${1:-default}"
AWS_REGION="${2:-us-west-1}"

# S3 bucket should be created to match the domain
S3_BUCKET="www.innovative360ai.com"

echo "=========================================="
echo "Deploying Corporate Website"
echo "=========================================="
echo "AWS Profile: $AWS_PROFILE"
echo "AWS Region: $AWS_REGION"
echo "S3 Bucket: $S3_BUCKET"
echo "=========================================="

# Build the site
echo "Building corporate site..."
npm run build

# Sync to S3 with proper cache headers
echo "Deploying to S3..."

# Deploy assets with long cache (CSS, JS, images)
aws s3 sync dist/ s3://$S3_BUCKET/ \
    --profile $AWS_PROFILE \
    --region $AWS_REGION \
    --delete \
    --cache-control "max-age=31536000,public" \
    --exclude "index.html" \
    --exclude "*.json"

# Deploy index.html with no-cache (for SPA routing)
aws s3 cp dist/index.html s3://$S3_BUCKET/index.html \
    --profile $AWS_PROFILE \
    --region $AWS_REGION \
    --cache-control "no-cache,no-store,must-revalidate"

# Deploy JSON files with no-cache
aws s3 sync dist/ s3://$S3_BUCKET/ \
    --profile $AWS_PROFILE \
    --region $AWS_REGION \
    --exclude "*" \
    --include "*.json" \
    --cache-control "no-cache,no-store,must-revalidate"

echo ""
echo "=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Set up S3 bucket for static website hosting"
echo "2. Configure CloudFront distribution"
echo "3. Set up SSL certificate via ACM"
echo "4. Configure Route53 DNS for innovative360ai.com"
echo ""
echo "Site will be available at:"
echo "  https://www.innovative360ai.com"
echo "  https://innovative360ai.com"
echo ""
