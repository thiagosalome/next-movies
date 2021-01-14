// Reference: https://swr.vercel.app/getting-started#quick-start

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default fetcher
