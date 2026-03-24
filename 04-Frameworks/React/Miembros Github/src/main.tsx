import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MemberListScene } from './scenes/member-list.scene'
import { OrgProvider } from './core/providers/org-context' 
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrgProvider>
      <MemberListScene />
    </OrgProvider>
  </StrictMode>,
)