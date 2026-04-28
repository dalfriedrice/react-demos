import { Routes, Route } from 'react-router-dom'
import { TypeHead } from './demos/typehead/component'
import { InfiniteScroll } from './demos/infinite-scroll/components'
import { Virtualization } from './demos/virtualization/components'
import { Navbar } from './navbar'

export default function App() {
  return (
  <>
    <Navbar />
    <div style={{ padding: "10px" }} />
    <Routes>
      <Route path="/typehead" element={<TypeHead />} />
      <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      <Route path="/virtualization" element={<Virtualization />} />
    </Routes>
  </>
  )
}
