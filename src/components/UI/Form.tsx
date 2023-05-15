interface FormProps {
  className?: string
  children: React.ReactNode
}

export default function Form({ className, children }: FormProps) {
  return <form className={className}>{children}</form>
}
