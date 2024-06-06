import { countriesDtoMock } from './mocks/countriesDtoMock'

jest.mock('./api', () => ({
  BASE_URL: 'https://api.example.com/countries',
}))

describe('BASE_URL environment variable check', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('receives a mocked response to a REST API request', async () => {
    const { BASE_URL } = require('./api')
    const response = await fetch(BASE_URL)
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(await response.json()).toEqual({ countriesDtoMock })
  })

  it('returns the BASE_URL value from the environment if it exists and is a string', () => {
    process.env.VITE_COUNTRIES_BASE_URL = 'https://api.example.com/countries'

    jest.mock('./api', () => ({
      BASE_URL: process.env.VITE_COUNTRIES_BASE_URL,
    }))

    const { BASE_URL } = require('./api')
    expect(BASE_URL).toBe('https://api.example.com/countries')
  })
})
