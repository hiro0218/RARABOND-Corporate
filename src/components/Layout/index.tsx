import "./style.css"

import AppMain from "../Main"
import AppHeader from "../Header"
import AppFooter from "../Footer"

type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppFooter />
    </div>
  )
}

export default AppLayout
