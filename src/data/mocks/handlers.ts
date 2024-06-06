import { http, HttpResponse } from 'msw'
import { countriesDtoMock } from './countriesDtoMock'

export const handlers = [
  http.get('https://api.example.com/countries', () => {
    return HttpResponse.json({ countriesDtoMock })
  }),

  // TEMP cause API not working
  http.get('/data.json', () => {
    return HttpResponse.json(countriesDtoMock)
  }),
]
