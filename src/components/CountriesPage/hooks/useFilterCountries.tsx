import { useState, useEffect } from 'react'
import { CountryModel } from '../../../types/models/country'
import { Filters } from '../../../types/types'

type Props = {
  initialCountries: CountryModel[]
  activeFilters: Filters
}

const useFilterCountries = ({ initialCountries, activeFilters }: Props) => {
  const [filteredCountries, setFilteredCountries] = useState(initialCountries)

  useEffect(() => {
    let updatedCountries = [...initialCountries]

    // Find Lithuania's area size
    const lithuania = initialCountries.find((country) => country.name === 'Lithuania')
    const lithuaniaAreaSize = lithuania?.areaSize ?? 65300

    if (activeFilters.sort === 'ByName') {
      updatedCountries.sort((a, b) =>
        activeFilters.sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
      )
    }

    if (activeFilters.filter === 'Smaller') {
      updatedCountries = updatedCountries.filter(
        (country) =>
          // if areaSize null or undefined
          (country.areaSize ?? Infinity) < lithuaniaAreaSize,
      )
    }

    if (activeFilters.filter === 'Oceania') {
      updatedCountries = updatedCountries.filter((country) => country.region === 'Oceania')
    }

    setFilteredCountries(updatedCountries)
  }, [initialCountries, activeFilters])

  return filteredCountries
}
export default useFilterCountries
