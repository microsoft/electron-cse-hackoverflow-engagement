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

const existingFiddleIssues = issues.filter(issue => issue.title.includes('Update fiddle'))

const result = existingFiddleIssues.map(fiddleIssue => `* [ ] docs/fiddles/${fiddleIssue.title.substring(14)} - #${fiddleIssue.number}`)

console.log(result.sort().join('\n'))