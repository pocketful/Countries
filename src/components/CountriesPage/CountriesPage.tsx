import Filter from './Filter/Filter'
import style from './CountriesPage.module.scss'
import useLoadCountries from './hooks/useLoadCountries'
import { useState } from 'react'

const CountriesPage = () => {
  const [activeFilters, setActiveFilters] = useState({ sort: '', filter: '' })

  const { loading, error, countries } = useLoadCountries()

  const sortByNameHandler = () => {
    console.log('sortByNameHandler')
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      sort: 'ByName',
    }))
  }

  const filterSmallerThanLTHandler = () => {
    console.log('filterSmallerThanLTHandler')
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      sort: 'Smaller',
    }))
  }

  const filterOceaniaHandler = () => {
    console.log('filterOceaniaHandler')
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      sort: 'Oceania',
    }))
  }

  return (
    <>
      <h1>Countries</h1>
      <Filter
        onSortByName={sortByNameHandler}
        onFilterSmallerThanLT={filterSmallerThanLTHandler}
        onFilterOceania={filterOceaniaHandler}
        activeFilters={activeFilters}
      />
      {countries?.map((country, idx) => (
        <div key={idx}>
          <p>{country.name}</p>
          <p>{country.region}</p>
          <p>{country.areaSize}</p>
          <br />
        </div>
      ))}
      {error && <p className={style.error}>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  )
}

export default CountriesPage
