
import { lazy, useEffect, useState } from 'react'
import { useRoutes, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
// import { createMemoryHistory } from 'react-router'

const routes = [
  { path: '/', key: 'home', ele: lazy(() => import('@/pages/Home')), children: [] },
  
  { path: '/about', key: 'about', ele: lazy(() => import('@/pages/About')), children: [] },

  { path: '/contact', key: 'contact', ele: lazy(() => import('@/pages/Contact')), children: [] },

  { path: '/products', key: 'products', ele: lazy(() => import('@/pages/Products')), children: [] },
  
  { path: '*', key: 'none', ele: lazy(() => import('@/pages/None')), children: [] },
];

function generateNestChild(route: any, index: number) {
  const children = (route.children && route.children.length > 0) 
    ? { children: route.children.map((ch: any, idx: number) => generateNestChild(ch, idx)) }
    : {}
  const hasChildren = Object.keys(children).length > 0
  
  const routerData = {
    path: route.path,
    element: <route.ele key={index + route.path} 
      children={
        hasChildren 
          ? generateSuspectRoutes(route.children)
          : null } 
      childlist={
        hasChildren
          ? route.children.map((child:any) => ({ path: child.path, name: child.path || child.path, show: true } ))
          : null }></route.ele>,
    ...children
  }
  
    // if (route.path === '/manager') {
    //   console.log({routerData})
    // }
  
  return routerData
}

export default function Index() {
    const location = useLocation();
    const [path, setPath] = useState('')
    useEffect(() => {
        // console.log('Location changed!', location.pathname);
        setPath(location.pathname)
    }, [location]);

    useEffect(() => {
        try {
            const pageUrl = window.location.origin + '/#' + location.pathname
            window.ga('set', 'page', pageUrl);
            window.ga('send', 'pageview');
        } catch (error) {
            
        }
        

    }, [path]);

  const element = useRoutes(
    [
      ...routes.map((route: any, index: number) => generateNestChild(route, index)),
      {
        path: '/home',
        element: <Navigate to="/" />
      }
    ]
  )
  return element
}



function generateSuspectRoutes (children: { path: string, ele: any }[], isSecond:boolean = false) {
  return isSecond 
    ? children.map((child: any) => <Route key={child.path} path={child.path} element={<child.ele />} />)
    : <Suspense fallback={<div className="text-black text-center py-48 ">Loading...</div>}>
    { 
      <Routes>
        {
          children.map((child: any) => {
            return <Route key={child.path} path={child.path} element={<child.ele />}>

              {
                child.children && child.children.length > 0 && child.children.map((ch: any) => <Route key={ch.path} path={ch.path} element={<ch.ele />} />)
              }

            </Route>
          }
              
              
              )
        }
      </Routes>  
    }
  </Suspense>
}
