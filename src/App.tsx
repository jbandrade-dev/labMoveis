import { BrowserRouter } from 'react-router-dom'
import { ModulesContextProvider } from './contexts/ModulesContext'
import { ProjectsContextProvider } from './contexts/ProjectsContext'
import { Router } from './Router'
import '../src/styles/globals.css'

export function App() {
  return (
    <BrowserRouter>
      <ProjectsContextProvider>
        <ModulesContextProvider>
          <Router />
        </ModulesContextProvider>
      </ProjectsContextProvider>
    </BrowserRouter>
  )
}
