# SSL Certificate Expiry Date Check

## Inputs

### `certificate-hostname`

The hostname of that will be checked for a valid SSL certificate as a string e.g `google.com`

## Results

A string containing expiry date e.g `Expiry date: Jan 25 13:43:08 2023 GMT` or `Certificate is invalid` on error

## Example usage

```yaml
uses: kowalczyk-krzysztof/ssl-certificate-check@v1
with:
  certificate-hostname: ${{ secrets.CERTIFICATE_HOSTNAME }}
```
