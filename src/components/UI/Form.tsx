import React from 'react'
interface FormProps {
	className?: string
	children: React.ReactNode
}

const Form : React.FC<FormProps> = (props) => {
	return (
		<form className={props.className} >{props.children}</form>
	)
}

export default Form