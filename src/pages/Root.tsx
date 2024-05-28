import { Outlet } from "react-router-dom"
import MBHeader from "../components/MBHeader"

const Root = () => {
  return (
    <>
      <MBHeader />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Root