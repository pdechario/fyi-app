# Local automation for setting up postgres
# Only required for initial setup on machine
#!/bin/bash

DB_NAME="fyi_app"
DB_USER="postgres"

# Create database and enable TimescaleDB
psql -U "$DB_USER" -d postgres <<EOF
CREATE DATABASE $DB_NAME;
\c $DB_NAME
CREATE EXTENSION IF NOT EXISTS timescaledb;
EOF

# Run with
# chmod +x scripts/setup-postgres.sh
# sudo -u postgres ./scripts/setup-postgres.sh