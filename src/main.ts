import * as core from '@actions/core'
import {TLSSocket} from 'tls'
import https from 'https'

const options = {
  host: `${core.getInput('certificate-hostname')}`,
  method: 'get',
  path: '/'
}

const req = https.request(options, res => {
  const {valid_to} = (res.socket as TLSSocket).getPeerCertificate()
  core.info(`Certificate valid until: ${valid_to}`)
})

req.end()
req.on('error', e => {
  core.setFailed(e)
})
