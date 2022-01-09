import { useState, useEffect, useContext } from "react";
import { useSession, getSession } from "next-auth/client";
import { UserCryptoContext } from "../contexts/UserCryptoContext";

export const BalanceCard = ({ data, usercoins }) => {
  const { cryptoListDSC, userCryptos, setTotalBalance, totalBalance } =
    useContext(UserCryptoContext);
  const [showCard, setShowCard] = useState(true);
  const [session, loading] = useSession();
  // const [allCoins, setAllCoins] = useState({})
  // const [balanceCoins, setBalanceCoins] = useState({})
  // const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      // const resUserData = await fetch("/api/crypto/fetchBalance")
      // const resUserDataJson = await resUserData.json();
      // if(userCryptos){
      //     //setAllCoins(resUserDataJson)
      //     const newFilter = cryptoListDSC.filter((coin) => {
      //         return userCryptos.some((f) => {
      //             return f.name === coin.name
      //         })
      //     });
      //     userCryptos.map( coin => {
      //         newFilter.forEach(element => {
      //            if(coin.name === element.name){
      //                coin.price = element.current_price
      //            }
      //         });
      //     })
      //     var total = 0.00
      //     userCryptos.map(coin => {
      //         console.log(coin.amount, coin.price)
      //         total = total + (coin.amount * coin.price)
      //     })
      //     setTotalBalance(total.toFixed(2))
      // }
      // if(userCryptos.length > 0){
      //     const sum = userCryptos.map(coin => coin.balance).reduce((prev,next) => prev + next)
      //     setSum(sum)
      // }
      //userCryptos.length > 0 ? userCryptos.reduce((a,b,c)=> {return (a.balance + b.balance + c.balance).toFixed(2)} ): '0'
    };
    fetchData();
  }, []);

  let sortedCoins = [];
  let totalBal = 0;
  totalBal = totalBal.toFixed(2);
  let numberOfCoins = 0;
  let restPercentage = 100;
  const color = ["600", "500", "300", "100"];
  if (usercoins.length > 0) {
    sortedCoins = usercoins.sort(
      (a, b) => parseFloat(b.balance) - parseFloat(a.balance)
    );
    sortedCoins.map((coin) => {
      if (coin.balance !== 0) {
        numberOfCoins = numberOfCoins + 1;
      }
    });

    totalBal = usercoins
      .map((coin) => coin.balance)
      .reduce((prev, next) => prev + next)
      .toFixed(2);
    const target = totalBal;
    if (numberOfCoins > 3) {
      sortedCoins.slice(0, 3).map((coin) => {
        restPercentage -= (100 * (coin.balance / totalBal)).toFixed(0);
      });
    }
  }

  return (
    <div>
      <div class="dark:bg-gray-800 dark:text-gray-400 bg-white text-gray-600 rounded-2xl shadow-xl py-5 px-5 w-full sm:w-11/12  md:w-11/12 lg:w-full">
        <div class="flex w-full justify-between ">
          <h3 class="text-lg font-semibold   leading-tight ">TOTAL BALANCE</h3>
          <div class="relative h-5 leading-tight flex-right">
            {/* Add  slide up and down function */}
            <button
              onClick={() => {
                setShowCard(!showCard);
              }}
              class="text-xl text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 h-6 focus:outline-none"
            >
              {showCard ? (
                <svg
                  class="w-6 h-6 focus:outline-none "
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="none"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
                </svg>
              ) : (
                <svg
                  class="w-6 h-6 focus:outline-none "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="none"
                  fill="currentColor"
                >
                  <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          class=" relative overflow-hidden transition-all duration-500"
          style={{
            height: showCard ? 200 : 0 + "px",
            opacity: showCard ? 1 : 0,
          }}
        >
          <div>
            <div class="pb-4 lg:pb-6">
              <h4 class="text-2xl lg:text-3xl dark:text-white text-gray-900 font-semibold leading-tight flex inline-block ">
                {totalBal}
                <span>€</span>
              </h4>
            </div>
            <div class="pb-4 lg:pb-6">
              <div
                class={
                  "overflow-hidden  rounded-full h-3 bg-gray-800 flex transition-all duration-500 w-full"
                }
                style={{ width: showCard ? 100 + "%" : 0 + "%" }}
              >
                {usercoins.length > 0 && numberOfCoins > 3 ? (
                  sortedCoins.slice(0, 3).map((coin, idx) => {
                    return (
                      <div
                        class={"h-full bg-indigo-" + color[idx]}
                        style={{
                          width:
                            (100 * (coin.balance / totalBal)).toFixed(0) + "%",
                        }}
                      ></div>
                    );
                  })
                ) : (
                  <div></div>
                )}

                {numberOfCoins > 3 ? (
                  <div
                    class={"h-full bg-indigo-" + color[3]}
                    style={{ width: restPercentage + "%" }}
                  ></div>
                ) : (
                  <div></div>
                )}

                {usercoins.length > 0 && numberOfCoins < 4 ? (
                  sortedCoins.slice(0, 3).map((coin, idx) => {
                    return (
                      <div
                        class={"h-full bg-indigo-" + color[idx]}
                        style={{
                          width:
                            (100 * (coin.balance / totalBal)).toFixed(0) + "%",
                        }}
                      ></div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            <div class="flex -mx-4 ">
              {usercoins.length > 0 && numberOfCoins > 3 ? (
                sortedCoins.slice(0, 3).map((coin, idx) => {
                  return (
                    <div
                      class={
                        "w-1/" +
                        4 +
                        " px-4 grid grid-row-3 content-between  border-r border-gray-700"
                      }
                    >
                      <div class="text-sm grid grid-row-2 place-items-center content-start content-between grid-span-2">
                        <span
                          class={
                            "inline-block w-3 h-3  rounded-full mr-1 item-center bg-indigo-" +
                            color[idx]
                          }
                        >
                          {" "}
                        </span>
                        <span class="align-bottom ">{coin.name} </span>
                      </div>
                      <div class="font-medium grid-span-1 inline-block align-bottom text-lg  text-white">
                        <span>
                          {(100 * (coin.balance / totalBal)).toFixed(0)}
                        </span>
                        %
                      </div>
                    </div>
                  );
                })
              ) : (
                <div></div>
              )}

              {numberOfCoins > 3 ? (
                <div
                  class={
                    "w-1/" +
                    4 +
                    " px-4 grid grid-row-3 content-between  border-r border-gray-700"
                  }
                >
                  <div class="text-sm grid grid-row-2 place-items-center content-start content-between grid-span-2">
                    <span
                      class={
                        "inline-block w-3 h-3  rounded-full mr-1 item-center bg-indigo-" +
                        color[3]
                      }
                    >
                      {" "}
                    </span>
                    <span class="align-bottom ">ect. </span>
                  </div>
                  <div class="font-medium grid-span-1 inline-block align-bottom text-lg  text-white">
                    <span>{restPercentage}</span>%
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {usercoins.length > 0 && numberOfCoins < 4 ? (
                sortedCoins.slice(0, 3).map((coin, idx) => {
                  return (
                    <div
                      class={
                        "w-1/" +
                        numberOfCoins +
                        " px-4 grid grid-row-3 content-between  border-r border-gray-700"
                      }
                    >
                      <div class="text-sm grid grid-row-2 place-items-center content-start content-between grid-span-2">
                        <span
                          class={
                            "inline-block w-3 h-3  rounded-full mr-1 item-center bg-indigo-" +
                            color[idx]
                          }
                        >
                          {" "}
                        </span>
                        <span class="align-bottom ">{coin.name} </span>
                      </div>
                      <div class="font-medium grid-span-1 inline-block align-bottom text-lg  text-white">
                        <span>
                          {(100 * (coin.balance / totalBal)).toFixed(0)}
                        </span>
                        %
                      </div>
                    </div>
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
