'use strict';

import dotenv from 'dotenv'
import { promises as fs } from 'fs'
import { Octokit } from 'octokit'

dotenv.config()

const gh_pat = process.env.gh_pat

const fiddles = await fs.readFile('fiddles', { encoding: 'utf-8' })

const octokit = new Octokit({ auth: gh_pat })

const issues = await octokit.paginate(octokit.rest.issues.listForRepo, {
  owner: 'microsoft',
  repo: 'electron-cse-hackoverflow-engagement'
})

const existingFiddleIssues = issues.filter(issue => issue.title.includes('Update fiddle')).map(issue => issue.title)

const fiddlesToWrite = fiddles
  .split('\n')
  .filter(
    fiddleName => existingFiddleIssues.every(
      existingFiddleIssue => !existingFiddleIssue.includes(fiddleName)
    )
  )

if (fiddlesToWrite.length > 0) {
  console.log(`Creating ${fiddlesToWrite.length} issues`)
  const createIssues = fiddlesToWrite.map(fiddle => octokit.rest.issues.create({
    title: `Update fiddle ${fiddle}`,
    labels: ['Status: Ready', 'Task'],
    body: `
Template: [${fiddle}](https://github.com/electron/electron/docs/fiddles/${fiddle})

Rel: #6

> This task is for organizational and tracking purposes. Refer to the linked 'Rel:' issues for further details.
`
  }))
  
  try {
    await Promise.all(createIssues)
  } catch (error) {
    console.error(error)
  }
} else {
  console.log('No issues to be created')
}