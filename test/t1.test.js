// import 'expect-puppeteer'
const puppeteer = require('puppeteer')


describe('Google', () => {
  // beforeAll(async () => {
  //   await page.goto('https://google.com')
  // })

  it('add new page', async () => {
    // await expect(page).toMatch('google')
    let browser = await puppeteer.launch({
      headless: true
    })
    let page = await browser.newPage()
    await page.goto('http://localhost:3000')
    // await page.click('#add-page')
    // await page.keyboard.type('test123')
    // const pages = await page.$$('.page_pageItemWrapper__1BfL_')
    // console.log(pages.length)
    // await page.waitFor(2000)
    // const z = await page.$('button[type="button"]')
    // const z = await page.click('button[tabindex="0"]')
    
    // await spanVal.waitForSelector('span')

    // const x = await spanVal.$$('span')
    // const x = await spanVal.$('span[class="MuiButton-label"]')
    // for(const q of x) {
    //   console.log('q', q)
    // }
    // let listLength = await page.evaluate((sel) => {
    //   // console.log('sel', sel)
    //   // return sel
    //   return document.getElementsByClassName(sel)
    // }, 'testBtn');

    // await page.waitForSelector('.testBtn')
    // let element = await page.$('.testBtn')

    // const element = await page.waitForSelector('.moreTestBtn')
    // let element = await page.$$('.moreTestBtn')
    // for(const ele of element) {
    //   let value = await page.evaluate(el => el.textContent, ele)
    //   console.log(value)

    // }
    // let btn = await page.$eval('div[data-testid="qqBtn"] > span', (el)=> {
    //   return el.textContent
    // })

    // let btn = await page.$('div[data-testid="qqBtn"]')
    let btn = await page.$('button[data-testId="add-page-btn"]')
    const qq = await btn.$eval('span[class="MuiButton-label"]', (el)=> {
      return el.textContent
    })
    console.log('qq', qq)
    // const xx = await btn.click()


    // const xx = await btn.$$('span')
    // for(const x of xx) {
    //   const res = await x.evaluate((el)=> {
    //     return el.textContent
    //   })
    //   console.log('res', res)
    // }
    // let bb = await page.$('button[tabindex="0"]')

    // let value = await page.evaluate((ele)=> {
    //   return ele
    // }, btn)


    // console.log('btn', xx)


    // const ss = await btn.$('span')
    // console.log('ss', ss.length)

    // let value = await page.evaluate(el => el.innerText, element)
    // console.log('val', value)



    // console.log(z.text)
    // await z.click()
    // await page.waitForTimeout(2000)
    // await page.waitForNavigation()

    // const finalResponse = await page.waitForResponse(async (response) => {
    //   console.log('resp', response)
    // })



    
    expect(1).toBe(1)
    browser.close()

   
    // await expect(page).toMatch('google')


    // expect(html).toBe('Welcome to React')

  })
})
