import {Routes,Route} from 'react-router-dom';
import Layout from './component/layout/Layout'
import RequireAuth from './component/RequireAuth';
import PersistLogin from './component/PersistLogin';
import Home from './component/page/home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        {/* Public Routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        {/* <Route path="unauthorized" element={<Unauthorized/>}/> */}

        {/* Protected Routes */}
        {/* <Route element={<PersistLogin/>}>
          <Route element={<RequireAuth allowedRoles={[1,0]}/>}>
            <Route path="toplist/register" element={<RegisterServerForm/>}/>
          </Route>
        </Route> */}
        {/* Catch All */}
        {/* <Route path="*" element={<Missing/>}/> */}
      </Route>
    </Routes>
  )
}

export default App
