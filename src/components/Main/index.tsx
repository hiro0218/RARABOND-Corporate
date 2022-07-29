import "./style.css"

type AppMainProps = {
  children: React.ReactNode
}

const AppMain = ({ children }: AppMainProps) => {
  return <main className="app-main">{children}</main>
}

export default AppMain
