import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cards from './components/Cards'
import CardsDetails from './components/CardsDetails'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Cards/>}></Route>
        <Route path={`/cart/:id`} element={<CardsDetails/>}></Route>
      </Routes>
      </div>
  )
}

export default App