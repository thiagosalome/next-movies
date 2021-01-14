/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { FiSearch } from 'react-icons/fi'
import debounce from 'utils/debounce'

const Search = () => {
  const router = useRouter()
  const delaySearch = useCallback(
    debounce((evt: ChangeEvent<HTMLInputElement>) => redirectToSearch(evt.target.value), 2000),
    []
  )

  function redirectToSearch (value: string) {
    router.push(`/search?q=${value}`)
  }

  return (
    <div className="w-96 flex items-center pl-3 ml-auto bg-gray-100 rounded-2xl dark:bg-gray-800">
    <span className="h-full">
      <FiSearch className="stroke-current text-gray-500" size={24} />
    </span>
    <input onChange={delaySearch} className="h-full w-full bg-transparent p-3 text-gray-500 outline-none" type="text" />
  </div>
  )
}

export default Search
