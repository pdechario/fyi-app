# fyi-app

## Sample post

curl -X POST http://localhost:3000/metrics \
  -H "Content-Type: application/json" \
  -d '{
    "workflow_name": "test-run",
    "repository_id": 1,
    "time": "2025-06-23T20:00:00.000Z",
    "duration": "00:02:30"
  }'
