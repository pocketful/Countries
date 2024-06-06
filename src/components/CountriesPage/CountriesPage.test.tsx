import { render, screen } from '@testing-library/react'
import CountriesPage from './CountriesPage'
import useLoadCountries from './hooks/useLoadCountries'
import { countriesModelMock } from '../../data/mocks/countriesModelMock'

jest.mock('./hooks/useLoadCountries')

describe('CountriesPage', () => {
  describe('renders countries data when useLoadCountries returns it', () => {
    beforeEach(() => {
      ;(useLoadCountries as jest.Mock).mockReturnValue({
        loading: false,
        error: '',
        countries: countriesModelMock,
      })
    })

    it('shows text', async () => {
      render(<CountriesPage />)
      expect(await screen.findByText('Antarctica')).toBeInTheDocument()
      expect(await screen.findByText(29743)).toBeInTheDocument()
    })
  })

  describe('when is error', () => {
    beforeEach(() => {
      ;(useLoadCountries as jest.Mock).mockReturnValue({
        loading: false,
        error: 'Error',
        countries: [],
      })
    })

    it('shows error', () => {
      render(<CountriesPage />)
      expect(screen.getByText('Error')).toBeInTheDocument()
    })
  })

  describe('when is loading', () => {
    beforeEach(() => {
      ;(useLoadCountries as jest.Mock).mockReturnValue({
        loading: true,
        error: '',
        countries: [],
      })
    })

    it('shows loading', () => {
      render(<CountriesPage />)
      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
  })
})
