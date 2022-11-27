import { Outlet } from 'react-router-dom'
import Menu from './Menu'
const UpMain = () => {
  return (
    <>
      <Menu></Menu>
      <Outlet></Outlet>
    </>
  )
}

export default UpMain
