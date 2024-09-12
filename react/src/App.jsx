/* Write a function "retryFetch" in javascript that accept two arguments:
 1. The first argument is an "endpointUrl".
 2. The second argument is "numberOfRetries" to retry when the function fail.
 3. This function ("retryFetch") will return a Promise.
 4. This function ("retryFetch") will end when the result is success and return success result.
    (Success result will come from an "already set up backend nodejs api server" that located within node folder).

 5. If this function return failed, it will keep trying till "numberOfRetries" is exhausted.
    If running out of "numberOfRetries" but still failed, this function will return fail eventually.
 6. Make necessary adjustments to make the "fetchData" function "retry" when click the "Fetch data" button.
 7. Extra: Render result into a table, data distribution within a table will depend on what you want,
    as long as all the data has been filled up then the requirement is completed.
*/

import './App.css'

function App() {
  
  const fetchData = () => {
    // Your implementation goes here
  }

  // retry fetch function goes here

  return (
    <>
      <div className="card">
        <button onClick={() => fetchData()}>
          Fetch data
        </button>
      </div>
    </>
  )
}

export default App
