const devBaseURL = 'http://www.codeboy.com:9999/'
const proBaseURL = 'http://www.codeboy.com:9999/'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 1000