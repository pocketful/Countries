import { Filters } from '../../../types/types'
import Button from '../../UI/Button/Button'
import style from './Filter.module.scss'

type Props = {
  activeFilters: Filters
  onSortByName: () => void
  onFilterSmallerThanLT: () => void
  onFilterOceania: () => void
}
const Filter = ({ activeFilters, onSortByName, onFilterSmallerThanLT, onFilterOceania }: Props) => {
  const { sort, filter } = activeFilters

  return (
    <header className={style.wrapper}>
      <div className={style.sort}>
        <Button onClick={onSortByName} isActive={sort === 'ByName'}>
          Sort By Name
        </Button>
      </div>
      <div className={style.filter}>
        <Button onClick={onFilterSmallerThanLT} isActive={filter === 'Smaller'}>
          Smaller Than LT
        </Button>
        <Button onClick={onFilterOceania} isActive={filter === 'Oceania'}>
          Oceania
        </Button>
      </div>
    </header>
  )
}

export default Filter
