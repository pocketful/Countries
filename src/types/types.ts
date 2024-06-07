import { ReactNode } from 'react'

export type ChildrenProps = {
  children: ReactNode
}

export type Filters = {
  sort?: string
  sortOrder: 'asc' | 'desc'
  filter?: string
}
