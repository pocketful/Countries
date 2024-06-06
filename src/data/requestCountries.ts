import { CountryDto } from '../types/dtos/country'
import { transformCountriesDtos } from './transformers/countries'
// import { BASE_URL } from './api'

export const requestCountries = async (requestParams: string) => {
  // ! TEMP commented cause API not working
  // const url = BASE_URL + requestParams
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }
  try {
    // const response = await fetch(url, options)

    // ! TEMP cause API not working
    console.log(requestParams)
    const response = await fetch('/data.json')
    if (!response.ok) {
      return { error: 'Failed to fetch.' }
    }
    const countriesRaw = (await response.json()) as CountryDto[]
    const transformedCountries = transformCountriesDtos(countriesRaw)
    return transformedCountries
  } catch (err) {
    console.error(err)
    throw err
  }
}
