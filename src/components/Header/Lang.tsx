export const Lang = () => {
  return (
    <label className="swap swap-flip mr-4 text-3xl">
      <input type="checkbox" />

      <div className="swap-on">🇺🇸</div>
      <div className="swap-off">🇺🇦</div>
      <svg
        width="12px"
        height="12px"
        className="absolute -right-4 top-1/4 ml-1 hidden  h-3 w-3 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </label>
  )
}
