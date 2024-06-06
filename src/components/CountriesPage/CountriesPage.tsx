import useLoadCountries from './hooks/useLoadCountries'

const CountriesPage = () => {
  const { loading, error, countries } = useLoadCountries()

  return (
    <>
      {countries?.map((country, idx) => (
        <div key={idx}>
          <p>{country.name}</p>
          <p>{country.region}</p>
          <p>{country.areaSize}</p>
          <br />
        </div>
      ))}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  )
}

export default CountriesPage
