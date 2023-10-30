#!/bin/sh

# ref: https://tldp.org/LDP/abs/html/options.html
# errexit	Abort script at first error, when a command exits with non-zero status (except in until or while loops, if-tests, list constructs)
set -e

set_environment () {
  export LOG_DEV_DIR=${WEB_DIR_LOG}
  export API_PORT=${API_PORT}
  export WEB_BASE_URL=${WEB_BASE_URL}
  export API_BASE_URL=${API_BASE_URL}
}

if [ -d /code/web/node_modules/ ] && [ ! -d /app/node_modules ]; then
  # Run once
  echo "Moving node_modules from web repo..";
  mkdir -p /app/node_modules
  cp -r /code/web/node_modules/. /app/node_modules/.
  # Change to mv
  # mv /code/web/node_modules/* /apps/appmobile/node_modules/
  # rm /code/api/node_modules
fi

set_environment

echo "Starting Node Server (Web)... ";
echo "Running $@ :::: api port: $API_PORT & web port: $WEB_PORT";
echo "log dir: $LOG_DEV_DIR or $WEB_DIR_LOG";
exec "$@" > "$WEB_DIR_LOG"