import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createRouter,
  createRootRoute,
  createRoute,
  RouterProvider,
  Outlet,
} from '@tanstack/react-router'

import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import Tjanster from './routes/Tjanster.jsx'
import OmOss from './routes/OmOss.jsx'
import Kontakt from './routes/Kontakt.jsx'

import './index.css'

// ---------------------------------------------------------------------------
// 1. Definiera routes med TanStack Router (filbaserad syntax utan plugin)
// ---------------------------------------------------------------------------

// Rot-routen renderar layouten (nav + footer) via <Outlet />
const rootRoute = createRootRoute({
  component: Root,
})

// Barn-routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const tjansterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tjanster',
  component: Tjanster,
})

const omOssRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/om-oss',
  component: OmOss,
})

const kontaktRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/kontakt',
  component: Kontakt,
})

// ---------------------------------------------------------------------------
// 2. Skapa router-trädet och routern
// ---------------------------------------------------------------------------

const routeTree = rootRoute.addChildren([
  homeRoute,
  tjansterRoute,
  omOssRoute,
  kontaktRoute,
])

const router = createRouter({ routeTree })

// ---------------------------------------------------------------------------
// 3. Montera appen
// ---------------------------------------------------------------------------

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
