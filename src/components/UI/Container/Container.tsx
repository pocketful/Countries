import { ChildrenProps } from '../../../types/types'
import style from './Container.module.scss'

const Container = ({ children }: ChildrenProps) => {
  return <main className={style.container}>{children}</main>
}

export default Container
