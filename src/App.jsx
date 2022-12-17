import React, { useState } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  const [data, setData] = useState(null)
  const handleChange = e => {
    setData(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <Main>
      <input type='file' accept='image/*' onChange={handleChange} />
      {data && <img src={data} />}
    </Main>
  )
}

export default App
