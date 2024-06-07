import { CountryModel } from '../../../types/models/country'
import style from './CountryCard.module.scss'

const CountryCard = ({ name, region, areaSize }: CountryModel) => {
  return (
    <article className={style.card}>
      <p className={style.name}>{name}</p>
      <p className={style.region}>{region}</p>
      <p className={style.area}>{areaSize}</p>
    </article>
  )
}
export default CountryCard
