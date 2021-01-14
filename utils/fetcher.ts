// Reference: https://swr.vercel.app/getting-started#quick-start

const fetcher = (input, init) => fetch(input, init).then(res => res.json())

export default fetcher
