const Text = () => {
  return (
    <div>
      <h1 className="text-h1">h1</h1>
      <h2 className="text-h2">h2</h2>
      <h3 className="text-h3">h3</h3>
      <h4 className="text-h4">h4</h4>
      <h5 className="text-h5">h5</h5>
      <h6 className="text-h6">h6</h6>
      <div className="mt-10">
        <p>Title</p>
        <p>Subtitle</p>
      </div>

      <div className="mt-10">
        <p className="text-h4 text-primary-500">Colors (Primary)</p>
        <p className="text-h4 text-dark-500 dark:text-light-500">Colors (Secondary)</p>
        <p className="text-h4 text-gray-500">Colors (Gray)</p>
        <p className="text-h4 text-success-500">Colors (Success)</p>
        <p className="text-h4 text-error-500">Colors (Error)</p>
        <p className="text-h4 text-link-500">Colors (Error)</p>
      </div>
    </div>
  )
}

export default Text
