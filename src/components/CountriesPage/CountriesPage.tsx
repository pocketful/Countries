import Filter from './Filter/Filter'
import style from './CountriesPage.module.scss'
import useLoadCountries from './hooks/useLoadCountries'
import { useState } from 'react'
import CountryCard from './CountryCard/CountryCard'

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
      <div>{countries?.map((country, idx) => <CountryCard key={idx} {...country} />)}</div>
      {error && <p className={style.error}>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  )
}

export default CountriesPage
