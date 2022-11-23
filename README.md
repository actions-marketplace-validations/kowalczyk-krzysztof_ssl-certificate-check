# SSL Certificate Expiry Date Check

## Inputs

### `certificate-hostname`

The hostname of that will be checked for a valid SSL certificate as a string e.g `google.com`

## Results

On success logs a string containing expiry date e.g `Certificate valid until: Jan 25 13:43:08 2023 GMT`.
On error sets the step status to failed and logs the error

## Example usage

```yaml
uses: kowalczyk-krzysztof/ssl-certificate-check@v1
with:
  certificate-hostname: ${{ secrets.CERTIFICATE_HOSTNAME }}
```
