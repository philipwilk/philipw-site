import { h } from 'preact'
//import { useState, useEffect } from 'preact/hooks'
import { Router, RouteComponentProps } from '@reach/router'
import { lazy } from 'preact/compat'

import './App.sass'

const Nav = lazy(() => import('./components/navbar'))
const Home = lazy(() => import('./components/contents/home'))
const About = lazy(() => import('./components/contents/about'))

const Page = (
  props: { Component: JSX.Element} & RouteComponentProps
) => props.Component

export default function app() {
  return (
    <div className='App'>
      <Nav />
      <Router >
        <Page path='/' Component={<Home/>}/>
        <Page path='/about' Component={<About/>}/>
      </Router>
    </div>
  )
}
