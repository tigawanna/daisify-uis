/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const TwarkuiIndexLazyImport = createFileRoute('/twarkui/')()
const ShadcnIndexLazyImport = createFileRoute('/shadcn/')()
const ShadcnChartsLazyImport = createFileRoute('/shadcn/charts')()

// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TwarkuiIndexLazyRoute = TwarkuiIndexLazyImport.update({
  path: '/twarkui/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/twarkui/index.lazy').then((d) => d.Route))

const ShadcnIndexLazyRoute = ShadcnIndexLazyImport.update({
  path: '/shadcn/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/shadcn/index.lazy').then((d) => d.Route))

const ShadcnChartsLazyRoute = ShadcnChartsLazyImport.update({
  path: '/shadcn/charts',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/shadcn/charts.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/shadcn/charts': {
      id: '/shadcn/charts'
      path: '/shadcn/charts'
      fullPath: '/shadcn/charts'
      preLoaderRoute: typeof ShadcnChartsLazyImport
      parentRoute: typeof rootRoute
    }
    '/shadcn/': {
      id: '/shadcn/'
      path: '/shadcn'
      fullPath: '/shadcn'
      preLoaderRoute: typeof ShadcnIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/twarkui/': {
      id: '/twarkui/'
      path: '/twarkui'
      fullPath: '/twarkui'
      preLoaderRoute: typeof TwarkuiIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/shadcn/charts': typeof ShadcnChartsLazyRoute
  '/shadcn': typeof ShadcnIndexLazyRoute
  '/twarkui': typeof TwarkuiIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/shadcn/charts': typeof ShadcnChartsLazyRoute
  '/shadcn': typeof ShadcnIndexLazyRoute
  '/twarkui': typeof TwarkuiIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/shadcn/charts': typeof ShadcnChartsLazyRoute
  '/shadcn/': typeof ShadcnIndexLazyRoute
  '/twarkui/': typeof TwarkuiIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/shadcn/charts' | '/shadcn' | '/twarkui'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/shadcn/charts' | '/shadcn' | '/twarkui'
  id: '__root__' | '/' | '/about' | '/shadcn/charts' | '/shadcn/' | '/twarkui/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ShadcnChartsLazyRoute: typeof ShadcnChartsLazyRoute
  ShadcnIndexLazyRoute: typeof ShadcnIndexLazyRoute
  TwarkuiIndexLazyRoute: typeof TwarkuiIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ShadcnChartsLazyRoute: ShadcnChartsLazyRoute,
  ShadcnIndexLazyRoute: ShadcnIndexLazyRoute,
  TwarkuiIndexLazyRoute: TwarkuiIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/shadcn/charts",
        "/shadcn/",
        "/twarkui/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/shadcn/charts": {
      "filePath": "shadcn/charts.lazy.tsx"
    },
    "/shadcn/": {
      "filePath": "shadcn/index.lazy.tsx"
    },
    "/twarkui/": {
      "filePath": "twarkui/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
