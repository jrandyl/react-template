import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Protected from './routes/Protected'
import { isAuthenticated } from './routes/helpers'
import Public from './routes/Public'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<Protected/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About/>} />
        </Route>
        <Route element={<Public/>}>
          <Route
              path="/signin"
              element={<SignIn />}
              loader={async () => isAuthenticated()}
            />
          <Route
            path="/signup"
            element={<SignUp />}
            loader={async () => isAuthenticated()}
          />
          <Route path="*" element={<Error404/>} />
        </Route>
       
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
