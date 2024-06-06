import { CountryDto } from '../../types/dtos/country'
import { CountryModel } from '../../types/models/country'

export const transformCountryDto = (country: CountryDto): CountryModel => ({
  name: country.name,
  region: country.region,
  areaSize: country.area ?? null,
})

export const transformCountriesDtos = (countries: CountryDto[]): CountryModel[] =>
  countries.map(transformCountryDto)
