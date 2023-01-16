import Navbar from '../components/Navbar'
import { useTimer } from 'reactjs-countdown-hook'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const Home = () => {
  const expiredDate = dayjs('2023-01-29T08:00:00.000Z')
  const currentDate = dayjs()
  const diffTime = expiredDate.unix() - currentDate.unix()
  const duration = dayjs.duration(diffTime * 1000, 'milliseconds')
  const { seconds, minutes, hours, days } = useTimer(
    duration.asSeconds(),
    handleTimerFinish
  )

  function handleTimerFinish() {
    alert('Waktu akad akan segera di mulai')
  }

  return (
    <div className="w-screen h-screen bg-home bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full p-8 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl text-primary font-Bree">The Wedding Of</h1>
        <img src="mempelai.webp" alt="Mempelai" width={180} className="ml-8" />
        <div className="flex flex-col gap-1">
          <h1 className="font-rochester font-extrabold text-5xl text-primary text-center">
            Bagas & Berida
          </h1>
          <h2 className="font-Poppins text-2xl text-primary text-center">
            29 Januari 2023
          </h2>
        </div>
        <div className="flex flex-row text-white font-Bree gap-2">
          <span className="bg-primary p-5 rounded-xl text-center border-2 border-lime-300">
            {`${days}`} Hari
          </span>
          <span className="bg-primary p-5 rounded-xl text-center border-2 border-lime-300">
            {`${hours}`} Jam
          </span>
          <span className="bg-primary p-5 rounded-xl text-center border-2 border-lime-300">
            {`${minutes}`} Menit
          </span>
          <span className="bg-primary p-5 rounded-xl text-center border-2 border-lime-300">
            {`${seconds}`} Detik
          </span>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Home
