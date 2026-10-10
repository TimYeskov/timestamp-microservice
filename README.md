# Timestamp Microservice

A Node.js and Express API that converts date strings and Unix millisecond timestamps into Unix and UTC values.

## Run locally

```bash
npm install
npm start
```

The server listens on port `8000`.

## Endpoints

- `GET /api` returns the current date and time.
- `GET /api/:date` accepts a date string or Unix timestamp in milliseconds.

Example: `/api/1451001600000` returns:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
