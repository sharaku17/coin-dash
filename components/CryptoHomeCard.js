import React from "react";

const CryptoHomeCard = ({ coin }) => {
  return (
    <>
      {coin && (
        <div>
          <div class="relative bg-white py-6 px-6 rounded-3xl w-11/12 my-4 shadow-xl">
            <div class=" text-black flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-white left-4 -top-6">
              <img class="h-7 w-7 rounded-full" src={coin.image} alt=""></img>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2">{coin.name}</p>
              <div class="flex space-x-2 text-gray-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>{coin.amount} </p>
              </div>
              <div class="flex space-x-2 text-gray-400 text-sm my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p>{coin.balance.toFixed(2) + "€"}</p>
              </div>
              <div class="border-t-2"></div>

              <div class="flex justify-between">
                <div class="my-2">
                  <p class="font-semibold text-base mb-2">Current Price</p>
                  <div
                    class={
                      "" + (coin.price_change_24h > 0)
                        ? "text-green-500 text-base font-semibold "
                        : "text-gray-800 text-base font-semibold "
                    }
                  >
                    <p>{coin.price.toFixed(2) + "€"}</p>
                  </div>
                </div>
                <div class="my-2">
                  <p class="font-semibold text-base mb-2">Progress</p>
                  <div
                    class={
                      coin.price_change_24h > 0
                        ? "text-green-500 text-base font-semibold "
                        : "text-red-500 text-base font-semibold"
                    }
                  >
                    <p>
                      {coin.price_change_24h > 0
                        ? "▲ " + coin.price_change_24h.toFixed(3) + "%"
                        : "▼ " + coin.price_change_24h.toFixed(3) + "%"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoHomeCard;
