import { useState } from 'react';
import { Input } from './component';
import useCurrencyInfo from './randomHook/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("ADA");
  const [to, setTo] = useState("ADA");
  const [convertedAmount, setConvertedAmount] = useState();
  const currencyInfo = useCurrencyInfo(from) || {};
  const options = Object.keys(currencyInfo);
  console.log('=====>' , currencyInfo);
  

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to].value);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/e6/8a/17/e68a175caa08d46b0cab1a13c3a1877c.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-white rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 cursor-s-resize -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-cyan-950 hover:bg-cyan-900 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="cursor-pointer w-full bg-cyan-950 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
