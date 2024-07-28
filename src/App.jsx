import React from 'react'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi'
import './App.css'
import Card from './components/Cards'
import Generator from './components/Generator'
import Hasher from './components/Hasher'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className='w-full h-screen flex flex-col'>
        <NavBar />
        <main className='w-full h-full flex background-pattern flex-row justify-between'>
          <div className='w-1/2 h-full justify-center items-center'>
            <Card title="Hasher" headline="Hash your password" icon={<HiLockClosed className='text-sambucus-500 w-8 h-8 mb-2' />}>
              <Hasher />
            </Card>
          </div>
          <div className='w-1/2 h-full'>
            <Card title="Validator" headline="Validate your password" icon={<HiLockOpen className='text-sambucus-500 w-8 h-8 mb-2' />}>
              <Generator />
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
