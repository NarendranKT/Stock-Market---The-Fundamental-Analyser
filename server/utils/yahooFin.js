const API = 'https://query2.finance.yahoo.com'

export const getCredentials = async()=> {
  // get the A3 cookie
  const { headers } = await fetch('https://fc.yahoo.com')
  const cookie = headers.get('set-cookie')
  // now get the crumb
  const url = new URL('/v1/test/getcrumb', API)
  const request = new Request(url)
  request.headers.set('cookie', cookie)
  request.headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36')
  
  const response = await fetch(request)
  const crumb = await response.text()

  return { cookie, crumb } 
}

export const quote = async(symbols, cookie, crumb)=> {
  // const url = new URL('v7/finance/quote', API)
  // url.searchParams.set('symbols', symbols.join(','))
  // url.searchParams.set('crumb', crumb)
  // const { headers } = await fetch('https://fc.yahoo.com')
  // const cookie = headers.get('set-cookie')

  const request = new Request(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbols}?modules=financialData&crumb=${crumb}`)

  request.headers.set('cookie', cookie)
  
  request.headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36')
  const response = await fetch(request)
  const quoteResponse = await response.text();
  
  
  return quoteResponse || []
}