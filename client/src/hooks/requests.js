async function httpGetPlanets() {
  const response=await fetch('http://localhost:8000/planets')
  const data=await response.json()
  return data?.habitablePlanets
}

  // Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response=await fetch('http://localhost:8000/launches')
  const data=await response.json()
  return data.sort((a,b)=>{
    return a.flight_number-b.flight_number
  })
}
async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};