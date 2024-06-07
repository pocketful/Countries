import Filter from './Filter/Filter'
import style from './CountriesPage.module.scss'
import useLoadCountries from './hooks/useLoadCountries'
import CountryCard from './CountryCard/CountryCard'

const CountriesPage = () => {
  const { loading, error, countries, activeFilters, setActiveFilters } = useLoadCountries()

  const sortByNameHandler = () => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      sort: 'ByName',
      sortOrder: prevFilters.sortOrder === 'asc' ? 'desc' : 'asc',
    }))
  }

  const filterSmallerThanLTHandler = () => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      filter: 'Smaller',
    }))
  }

  const filterOceaniaHandler = () => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      filter: 'Oceania',
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
