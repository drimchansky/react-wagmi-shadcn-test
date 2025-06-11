import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/MainLayout'
import { Account } from '@/pages/Account'
import { Home } from '@/pages/Home'
import { ReadContract } from '@/pages/ReadContract'
import { Send } from '@/pages/Send'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} path="/">
        <Route element={<Home />} index />
        <Route element={<Account />} path="/account" />
        <Route element={<Send />} path="/send" />
        <Route element={<ReadContract />} path="/read-contract" />
      </Route>
    </Routes>
  </BrowserRouter>
)
