# SSL Certificate Validity Check

## Inputs

### `certificate-hostname`

The hostname of that will be checked for a valid SSL certificate as a string e.g `google.com`

## Outputs

### `certificate-expiry-status`

The validity status of a SSL certificate as a string

## Example

```yaml
uses: kowalczyk-krzysztof/ssl-certificate-check@v1
with:
  certificate-hostname: ${{ secrets.CERTIFICATE_HOSTNAME }}
```
