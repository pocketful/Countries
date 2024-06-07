import style from './Button.module.scss'

type Props = {
  children: string | number
  onClick: () => void
  isActive: boolean
  isDisabled?: boolean
}

const Button = ({ children, onClick, isActive, isDisabled = false }: Props) => {
  return (
    <button
      type="button"
      className={`${style.button} ${isActive ? style['button--active'] : ''}`}
      onClick={onClick}
      aria-label={isActive ? 'Active' : 'Not active'}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button
