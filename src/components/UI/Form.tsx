interface FormProps {
  className?: string
  children: React.ReactNode
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}
const Form = ({ className, children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}
export default Form
