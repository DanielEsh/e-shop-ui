export const Tab = ({ value, children }) => {
  const onClick = () => {
    console.log('tabClick', value)
  }

  return (
    <div
      role="tab"
      className="flex items-center justify-center w-full py-2.5 bg-gray-200 rounded-md"
      onClick={onClick}
    >
      {children}
    </div>
  )
}
