import * as core from '@actions/core'
import {TLSSocket} from 'tls'
import https from 'https'

const options = {
  host: `${core.getInput('certificate-hostname')}`,
  method: 'get',
  path: '/'
}

const setOutput = (validTo?: string): void =>
  core.info(validTo ? `Expiry date: ${validTo}` : 'Certificate is invalid')

const req = https.request(options, res => {
  const {valid_to} = (res.socket as TLSSocket).getPeerCertificate()
  setOutput(valid_to)
})

req.end()
req.on('error', _ => {
  setOutput()
})
