#!/usr/bin/env bash
# Deploy: pull latest code, rebuild the Docker container, update nginx, and run a health check.
set -euo pipefail

REPO="${1:-$HOME/poquito_frontend}"
BRANCH="${2:-staging}"

case "$BRANCH" in
  staging)
    NGINX_SRC="$REPO/nginx/poquito.conf"
    ;;
  main|production|prod)
    NGINX_SRC="$REPO/nginx/poquito-prod.conf"
    ;;
esac

APP_PORT=3000
export APP_PORT

cd "$REPO"

echo "Pulling latest code for $BRANCH..."
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"
echo "OK Code updated ($BRANCH)"

echo "Building and starting Docker container..."
docker compose up --build -d --remove-orphans
echo "OK Container started"

echo "Update nginx config"
sudo cp "$NGINX_SRC" /etc/nginx/conf.d/poquito.conf
sudo nginx -t && sudo systemctl reload nginx
echo "OK Nginx updated"

echo "Checking app is reachable..."
for i in $(seq 1 30); do
  STATUS=$(curl -sf -o /dev/null -w "%{http_code}" "http://127.0.0.1:$APP_PORT/" || true)
  if echo "$STATUS" | grep -q "200\|301\|302"; then
    echo "OK App healthy (HTTP $STATUS)"
    exit 0
  fi

  if [ "$i" -eq 30 ]; then
    echo "FAIL App did not respond after 60s" >&2
    docker compose logs --tail 50
    exit 1
  fi

  sleep 2
done

echo "Deploy complete."
