export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {
  children: React.ReactNode
  variant?: string
}

export default function Button({ children, variant, className }: ButtonProps) {
  return <button className={`btn ${className}`}>{children}</button>
}
