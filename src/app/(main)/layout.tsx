import { Header } from '@/components/header'
import React, { PropsWithChildren } from 'react'

const MainLayout = ({children} : PropsWithChildren) => {
  return (
    <>
    <Header/>
      {children}
    </>
  )
}

export default MainLayout
