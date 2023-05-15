export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {
  children: React.ReactNode
  variant?: string
  disabled?: boolean
}

export default function Button({ children, variant, className, disabled }: ButtonProps) {
  return (
    <button className={`btn ${className}`} disabled={disabled}>
      {children}
    </button>
  )
}
