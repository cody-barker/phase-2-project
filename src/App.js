import './App.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from './NavBar'
import Home from './Home'
import PlantForm from './PlantForm'
import AllPlants from './AllPlants'
import Trees from './Trees'
import Shrubs from './Shrubs'
import Grasses from './Grasses'
import Herbs from './Herbs'

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/plantList')
    .then(r => r.json())
    .then(list => setAllPlants(list))
  }, [])

  const [allPlants, setAllPlants] = useState([])

  function compare(a, b) {
    if (a.binomialName.toLowerCase() < b.binomialName.toLowerCase()) {
        return -1
    }
    if (a.binomialName.toLowerCase() > b.binomialName.toLowerCase()) {
        return 1
    }
    return 0
}

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/plantform">
          <PlantForm allPlants={allPlants} setAllPlants={setAllPlants}/>
        </Route>
        <Route path="/allplants">
          <AllPlants allPlants={allPlants} compare={compare}/>
        </Route>
        <Route path="/trees">
          <Trees allPlants={allPlants} compare={compare}/>
        </Route>
        <Route path="/shrubs">
          <Shrubs allPlants={allPlants} compare={compare}/>
        </Route>
        <Route path="/grasses">
          <Grasses allPlants={allPlants} compare={compare}/>
        </Route>
        <Route path="/herbs">
          <Herbs allPlants={allPlants} compare={compare}/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App;