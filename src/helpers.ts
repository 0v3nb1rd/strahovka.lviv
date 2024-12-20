// input  str: +38(093)655 58 99
// output str: (093)655 58 99

export function phoneMask(phoneStr: string): string {
	return phoneStr
		.slice(3)
		.replace(
		/(\d{3})(\d{3})(\d{2})(\d{2})/,
		'($1) $2 $3 $4'
	)
}