import { useState } from 'react'
import Navbar from '../components/Navbar'

const Gift = () => {
  const [copy, setCopy] = useState(true)

  const handleClick = () => {
    setCopy(false)
    setTimeout(() => {
      setCopy(true)
    }, 2000)

    navigator.clipboard.writeText('8465371818')
    return
  }
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-home bg-cover bg-center p-5 flex flex-col items-center justify-center">
        <div className="max-w-xl w-full bg-white border-[3px] border-primary mx-auto rounded-xl flex flex-col items-center justify-center gap-3 p-2">
          <img src="bca.jpg" alt="Bank" width={150} height={150} />
          <h1>No Rekening: 8465371818</h1>
          <p>a/n Berida Kholiffatun Afiffah</p>
          <button
            className={`bg-third ${
              !copy && 'bg-green-600 hover:bg-green-800'
            } p-3 rounded-md text-white  hover:bg-green-400`}
            onClick={handleClick}
          >
            {copy ? 'Copy No.Rek' : 'Berhasil di Copy ✔️'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Gift
