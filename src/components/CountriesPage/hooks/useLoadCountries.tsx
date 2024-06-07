import { useEffect, useState } from 'react'
import { requestCountries } from '../../../data/requestCountries'
import { CountryModel } from '../../../types/models/country'
import useFilterCountries from './useFilterCountries'
import { Filters } from '../../../types/types'

const requestParams = `?fields=name,region,area`

const useLoadCountries = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [countries, setCountries] = useState<CountryModel[]>([])
  const [activeFilters, setActiveFilters] = useState<Filters>({
    sort: '',
    sortOrder: 'asc',
    filter: '',
  })

  useEffect(() => {
    const fetchCountries = async () => {
      setError('')
      setLoading(true)
      try {
        const countriesResp = await requestCountries(requestParams)
        if ('error' in countriesResp) {
          setError(countriesResp.error)
          return
        }
        // Fetched countries list is empty
        if (countriesResp.length === 0) {
          setError('No countries found.')
        }
        setCountries(countriesResp)
      } catch (err) {
        setError('Failed to fetch photos. Try again later.')
      } finally {
        setLoading(false)
      }
    }
    void fetchCountries()
  }, [])

  const filteredCountries = useFilterCountries({ initialCountries: countries, activeFilters })

  return { loading, error, countries: filteredCountries, activeFilters, setActiveFilters }
}

export default useLoadCountries
