import React from 'react'
import { Nav } from '../components/nav'
import { HeaderBoad } from '../components/headerBoad'
import { Board } from '../components/board'

export const Dashboard = () => {
  return (
    <>
      <Nav />
      <HeaderBoad />
      <Board />
    </>
  )
}
