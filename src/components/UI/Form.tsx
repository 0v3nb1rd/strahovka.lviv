interface FormProps {
  className?: string
  children: React.ReactNode
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

export default function Form({ className, children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}
