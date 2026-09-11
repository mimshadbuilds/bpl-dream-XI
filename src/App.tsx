import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Players from './components/players/Players';
import type { PlayersType } from './types/type';

const playersFetch = async (): Promise<PlayersType[]> => {
  const res = await fetch(`/db.json`);
  const data = await res.json();
  return data;
} 

function App() {
  // const playersPromise = playersFetch();
  const [playersPromise] = useState(() => playersFetch());
  const [coin, setCoin] = useState(7000);
  return (
    <>
      <Nav coin={coin} />
      <main>
        <Banner />
        <Suspense fallback={<div>Loading...</div>}>
          <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
        </Suspense>
      </main>
    </>
  )
}

export default App
