import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import styles from '../cssmodules/header.module.css'
const IndexLayout = () => {
  return (
    <>
        <header className={`${styles.headerContainer} relative`}>
          <Navbar/>
          <Main/>
        </header>
        <section className="bg-black">
            <Outlet/>
        </section>
    </>
  )
}

export default IndexLayout