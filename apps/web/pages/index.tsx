// basic Next.js page
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fairloft</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        Your go-to marketplace for golf gear — compare prices, buy and sell with confidence.
      </p>
      <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
