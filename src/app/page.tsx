import Image from 'next/image';
import logo from '../images/logo.jpg';
import { FC } from 'react';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Image src={logo} alt="Logo" width={200} height={200} />
      <h1 className="font-bold text-2xl">NovaNexus Infotech</h1>
    </main>
  );
};

export default Home;
