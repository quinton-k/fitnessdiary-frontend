import React from 'react'

const ValidatedEmailInput = () => {
  return (
    <div class="mb-5">
    <label for="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
        <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green"/>
    <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p>
  </div>
  )
}

export default ValidatedEmailInput