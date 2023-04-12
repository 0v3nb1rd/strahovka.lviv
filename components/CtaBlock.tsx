import React from 'react'

const CtaBlock = () => {
  return (
    <div className="w-full max-w-4xl rounded-2xl border-2 border-gray-100 bg-white p-14">
      <div className="flex flex-col items-center">
        <span className="-rotate-1 rounded-lg bg-yellow-100 px-2 py-px text-sm text-yellow-800">
          1000+ людей вже приєдналось
        </span>
        <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
          Отримуйте актуальні пропозиції на автострахування першими!
        </h3>
        <form action="" className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
          <input
            type="email"
            name="email"
            id="email"
            className="grow rounded border-2 border-gray-300 px-3 py-3 focus:border-neutral focus:outline-none sm:rounded-l-2xl sm:rounded-r-none sm:border-r-0"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="rounded bg-neutral px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-2xl"
          >
            Підписатись
          </button>
        </form>
      </div>
    </div>
  )
}

export default CtaBlock
