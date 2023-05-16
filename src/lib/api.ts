export const sendContactForm = async (data: any) => {
  const res = await fetch('/api', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to send message')
  }
  const newData = await res.json()
  return newData
}
