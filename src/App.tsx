import { HashRouter } from 'react-router-dom'

import { Suspense } from 'react'
import AppRoutes from './router'
import Header from '@/components/Header'

function App() {
  
  return <HashRouter>
    <Header />
    <div className="main-work">
      <Suspense fallback={<div className="text-center mt-[48vh] text-black">Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </div>
  </HashRouter>
}

export default App
