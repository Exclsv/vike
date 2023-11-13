export { testRun }

import { test, expect, fetchHtml, page, getServerUrl } from '@brillout/test-e2e'
import { testCounter } from '../utils'
import { testRun as testRunClassic } from '../../examples/react/.testRun'
import fs from 'fs'
import assert from 'assert'

function testRun(cmd: 'npm run dev' | 'npm run preview' | 'npm run prod') {
  testRunClassic(cmd, { skipScreenshotTest: true })

  assert(cmd.startsWith('npm run '))
  const isDev = cmd === 'npm run dev'

  test('Route String defined in +config.h.js', async () => {
    // Route String '/markdown' defined in `+config.h.js > export default { route }` instead of +route.js
    const html = await fetchHtml('/markdown')
    expect(html).toContain('<p>Some text</p>')
  })

  test('Side export - HTML', async () => {
    const html = await fetchHtml('/markdown')
    // 'Some title' is defined by `export { frontmatter }` of /pages/markdown-page/+Page.md
    expect(html).toContain('<title>Some title</title>')
  })

  test('Side export - DOM', async () => {
    await page.goto(getServerUrl() + '/markdown')
    await testCounter()
  })

  if (!isDev) {
    test('pre-render settings', async () => {
      ;[
        ['markdown', true],
        ['pushState', true],
        ['index', false],
        ['about', false]
      ].forEach(([page, exists]) => {
        expect(fs.existsSync(`./dist/nested/client/${page}.html`)).toBe(exists)
        expect(fs.existsSync(`./dist/nested/client/${page}/index.pageContext.json`)).toBe(exists)
      })
    })
  }

  test('history.pushState()', async () => {
    // Timestamp component works as expected
    await page.goto(getServerUrl() + '/pushState')
    const timestamp1 = await getTimestamp()
    await page.click('a[href="/markdown"]')
    await testCounter()
    await page.click('a[href="/pushState"]')
    const timestamp2 = await getTimestamp()
    expect(timestamp2 > timestamp1).toBe(true)

    // calling history.pushState() doesn't lead to a re-render, thus timestamp doesn't change
    await expectUrl('/pushState')
    {
      const btn = page.locator('button', { hasText: 'Change URL' })
      await btn.click()
    }
    await expectUrl('/pushState?query')
    const timestamp3 = await getTimestamp()
    expect(timestamp3).toBe(timestamp2)

    // navigating back doesn't lead to a re-render, thus timestamp doesn't change
    await page.goBack()
    await expectUrl('/pushState')
    const timestamp4 = await getTimestamp()
    expect(timestamp4).toBe(timestamp2)
    await page.goForward()
    await expectUrl('/pushState?query')
    const timestamp5 = await getTimestamp()
    expect(timestamp5).toBe(timestamp2)

    // Navigating outside the page does trigger a re-render
    await page.goBack()
    await page.goBack()
    await expectUrl('/markdown')
    await page.goForward()
    await expectUrl('/pushState')
    const timestamp6 = await getTimestamp()
    expect(timestamp6 > timestamp2).toBe(true)
    await page.goForward()
    await expectUrl('/pushState?query')
    const timestamp7 = await getTimestamp()
    expect(timestamp7).toBe(timestamp6)
  })
}

async function getTimestamp() {
  const timestampStr = await page.evaluate(() => document.querySelector('#timestamp')?.textContent)
  const timestamp = parseInt(timestampStr!, 10)
  const timestampNow = new Date('2023-11-11').getTime()
  expect(timestamp > timestampNow).toBe(true)
  return timestamp
}
async function expectUrl(endsWith: `/${string}`) {
  const url = await getUrl()
  expect(url.endsWith(endsWith)).toBe(true)
}
async function getUrl() {
  const url = await page.evaluate(() => location.href)
  return url
}
