'use strict';

import dotenv from 'dotenv'
import { promises as fs } from 'fs'
import undici from 'undici'

dotenv.config()

const gh_pat = process.env.gh_pat

const fiddles = await fs.readFile('fiddles', { encoding: 'utf-8' })

const createIssues = fiddles.split('\n').map(fiddle => undici.request(
  'https://api.github.com/repos/microsoft/electron-cse-hackoverflow-engagement/issues',
  {
    method: 'POST',
    headers: [
      'user-agent', 'undici',
      'authorization', `token ${gh_pat}`
    ],
    body: JSON.stringify({
      title: `Update fiddle ${fiddle}`,
      labels: ['Status: Ready', 'Task'],
      body: `
Template: [${fiddle}](https://github.com/electron/electron/docs/fiddles/${fiddle})

Rel: #6

> This task is for organizational and tracking purposes. Refer to the linked 'Rel:' issues for further details.
`
    })
  }
))

await Promise.all(createIssues)