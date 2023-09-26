import * as contentful from 'contentful'



export const client = contentful.createClient({
  space: 'ye4gwzsvaqd0',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'f2i7AR5OswddYr0Jhl67WIdRxOQBASGNsOLbb1T4X8k'
})

