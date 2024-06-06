import { countriesDtoMock } from '../mocks/countriesDtoMock'
import { countriesModelMock } from '../mocks/countriesModelMock'
import { countryDtoMock } from '../mocks/countryDtoMock'
import { countryModelMock } from '../mocks/countryModelMock'
import { transformCountriesDtos, transformCountryDto } from './countries'

describe('transformCountryDto', () => {
  it('correctly transforms CountryDto to CountryModel', () => {
    const result = transformCountryDto(countryDtoMock)
    expect(result).toEqual(countryModelMock)
  })
})

describe('transformCountriesDtos', () => {
  it('correctly transforms CountriesDto to CountriesModel', () => {
    const result = transformCountriesDtos(countriesDtoMock)
    expect(result).toEqual(countriesModelMock)
  })
})
