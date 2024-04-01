import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/Index'
import Layout from './components/views/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-mcyellow w-screen h-svh p-3 sm:p-6 lg:p-20 relative">
        <BrowserRouter>
          <div className="bg-mcred w-full h-full shadow-2xl flex flex-col sm:flex-row">
            <Sidebar />
            <div className="h-full w-full p-3 overflow-auto">
              <Suspense fallback={"Loading..."}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        index={route.index}
                        element={<route.main />}
                      />
                    ))}
                  </Route>
                </Routes>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
