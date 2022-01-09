import { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import { useSession, getSession } from "next-auth/client";
import { UserCryptoContext } from "../../contexts/UserCryptoContext";
import Dashboard_Layout from "../../components/layouts/Dashboard_Layout";
import SearchBar from "../../components/SearchBar";
import SearchBarHome from "../../components/SearchBarHome";
import useSWR from "swr";

import AddFundsCard from "../../components/AddFundsCard";
import SubFundsCard from "../../components/SubFundsCard";

import CryptoHomeCard from "../../components/CryptoHomeCard";
const ChartHome = dynamic(() => import("../../components/ChartHome"), {
  ssr: false,
});
//import prisma from '../../client'
import { BalanceCard } from "../../components/BalanceCard";
import { Input } from "postcss";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const {
    cryptoListDSC,
    setcryptoListDSC,
    userCryptos,
    setUserCryptos,
    refreshUserCryptos,
  } = useContext(UserCryptoContext);
  //const [cryptoListDSC,setcryptoListDSC, userCryptos,setUserCryptos, refreshUserCryptos] = useContext(UserCryptoContext)
  const [session, loading] = useSession();
  const [formData, setFormData] = useState({});

  const [content, setContent] = useState();
  const [showNav, setShowNav] = useState(true);
  const [allCoins, setAllCoins] = useState({});

  const { data: coins_markCap_Desc, error: coins_markCap_DescError } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200`,
    fetcher
  );
  const { data: marketChart, error: marketChartError } = useSWR(
    `https://api.coingecko.com/api/v3/coins/iota/market_chart?vs_currency=eur&days=1`,
    fetcher
  );
  const { data: userCrypto, error: userCryptoError } = useSWR(
    `/api/crypto/getAllUserCrypto`,
    fetcher
  );
  // const user =  prisma.user.findUnique({
  //     where: {
  //         email: session.user.email
  //     },
  //     include: {
  //         cryptos: true
  //     }
  // })

  // const usercrypto =JSON.stringify(userCrypto)
  // const usercryptoJson = JSON.parse(usercrypto)

  const toggle = () => setShowNav(!showNav);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }

      setcryptoListDSC(coins_markCap_Desc);
      refreshUserCryptos();

      // const resUserData = await fetch("/api/crypto/getAllUserCrypto")
      // const resUserDataJson = await resUserData.json();
      // if(resUserData){
      //     setAllCoins(resUserDataJson)
      // }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    return (
      <div>
        <h1>You aren't signed in, please sign in first.</h1>
      </div>
    );
  }

  if (!coins_markCap_Desc) {
    return (
      <Dashboard_Layout toggle={toggle} visible={showNav} user={session.user}>
        <div className=" h-screen w-screen flex flex-col  ">
          {/* <img src={data.image.small}></img>
                <h1 className="  text-center font-medium  text-lg md:text-4xl">{data.name}</h1> */}

          <div class="flex m-auto items-center transform -translate-x-1/2 -translate-y-1/2 justify-center space-x-2 ">
            <div class="w-8 h-8 bg-indigo-200 rounded-full animate-bounce"></div>
            <div class="w-8 h-8 bg-indigo-400 rounded-full animate-bounce200"></div>
            <div class="w-8 h-8 bg-indigo-600 rounded-full animate-bounce400"></div>
          </div>
        </div>
      </Dashboard_Layout>
    );
  }

  if (!marketChart) {
    return (
      <Dashboard_Layout toggle={toggle} visible={showNav} user={session.user}>
        <div className=" h-screen w-screen flex flex-col  ">
          {/* <img src={data.image.small}></img>
                <h1 className="  text-center font-medium  text-lg md:text-4xl">{data.name}</h1> */}

          <div class="flex m-auto items-center transform -translate-x-1/2 -translate-y-1/2 justify-center space-x-2 ">
            <div class="w-8 h-8 bg-indigo-200 rounded-full animate-bounce"></div>
            <div class="w-8 h-8 bg-indigo-400 rounded-full animate-bounce200"></div>
            <div class="w-8 h-8 bg-indigo-600 rounded-full animate-bounce400"></div>
          </div>
        </div>
      </Dashboard_Layout>
    );
  }
  if (!userCrypto) {
    return (
      <Dashboard_Layout toggle={toggle} visible={showNav} user={session.user}>
        <div className=" h-screen w-screen flex flex-col  ">
          {/* <img src={data.image.small}></img>
                <h1 className="  text-center font-medium  text-lg md:text-4xl">{data.name}</h1> */}

          <div class="flex m-auto items-center transform -translate-x-1/2 -translate-y-1/2 justify-center space-x-2 ">
            <div class="w-8 h-8 bg-indigo-200 rounded-full animate-bounce"></div>
            <div class="w-8 h-8 bg-indigo-400 rounded-full animate-bounce200"></div>
            <div class="w-8 h-8 bg-indigo-600 rounded-full animate-bounce400"></div>
          </div>
        </div>
      </Dashboard_Layout>
    );
  }

  console.log(userCrypto);

  const newFilter = coins_markCap_Desc.filter((coin) => {
    return userCrypto.some((f) => {
      return f.name === coin.name;
    });
  });
  userCrypto.map((coin) => {
    newFilter.forEach((element) => {
      if (coin.name === element.name) {
        coin.price = element.current_price;
        coin.image = element.image;
        coin.market_cap = element.market_cap;
        coin.high_24h = element.high_24h;
        coin.low_24h = element.low_24h;
        coin.price_change_24h = element.price_change_24h;
        coin.price_change_percentage_24h = element.price_change_percentage_24h;
        coin.ath = element.ath;
      }
    });

    coin.balance = coin.price * coin.amount;
  });
  return (
    //Build Dashboard view here
    <Dashboard_Layout toggle={toggle} visible={showNav} user={session.user}>
      <div className=" ">
        <div class="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-3   ">
          <div className="col-span-3 md:col-span-4 items-left text-left m-6 flex md:flex-row flex-col items-center justify-between">
            <div>
              <h2 className="text-5xl text-gray-800 my-1 text-left font-semibold">
                Hi {session.user.name}!
              </h2>
              <p className="text-3xl my-1  text-gray-700">
                {" "}
                This is your Dashboard
              </p>
            </div>
            <img
              src={session.user.image}
              className="w-16 h-16  m-6 md:mr-auto md:w-24 md:h-24 shadow-xl rounded-full "
            ></img>
            <div className="my-6">
              <SearchBarHome
                setFormData={setFormData}
                label=""
                data={coins_markCap_Desc}
                placeholder="Search for Coin"
              ></SearchBarHome>
            </div>
          </div>

          <div class=" lg:col-span-1 md:col-span-4 col-span-3 m-6 justify-items-center">
            <BalanceCard
              class=""
              data={coins_markCap_Desc}
              usercoins={userCrypto}
            ></BalanceCard>
          </div>
          <div class=" lg:col-span-3 md:col-span-4 col-span-3   m-6 lg:ml-6 lg:mr-6 lg:mt-0  bg-white shadow-xl rounded-2xl p-6">
            <ChartHome data={marketChart}></ChartHome>
          </div>

          {/* </div> */}

          {/* <SubFundsCard data={allCoins}></SubFundsCard> */}

          {/* <BalanceCard class="col-span-3" data={coins_markCap_Desc}></BalanceCard> */}
          {/* <div class="grid-cols-3 mt-5 grid "> */}

          {userCrypto.map((coin) => {
            return (
              <div class="xl:col-span-1 lg:col-span-1  md:col-span-2 col-span-3 m-6 justify-items-center">
                <CryptoHomeCard coin={coin} class=" "></CryptoHomeCard>
              </div>
            );
          })}

          <div class="col-span-3 md:col-span-4 m-6 lg:my-24">
            <AddFundsCard
              class=" col-span-3 "
              content={content}
              data={coins_markCap_Desc}
            ></AddFundsCard>
          </div>
        </div>
      </div>
    </Dashboard_Layout>
  );
}

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//     const resCoinGecko = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200')

//    const coins_markCap_Desc = await resCoinGecko.json()

//    const resCoinGeckoMarketChart = await fetch('https://api.coingecko.com/api/v3/coins/iota/market_chart?vs_currency=eur&days=1')
//    const marketChart = await resCoinGeckoMarketChart.json()
//    let prices = []

//console.log(marketChart[prices])
// const body = {
//     session: await getSession(context)
// }
// const user = await prisma.user.findUnique({
//     where: {
//         email: session.user.email
//     },
//     include: {
//         cryptos: true
//     }
// })
// const usercrypto =JSON.stringify(user.cryptos)
// const usercryptoJson = JSON.parse(usercrypto)

// const newFilter = coins_markCap_Desc.filter((coin) => {
//     return usercryptoJson.some((f) => {
//         return f.name === coin.name
//     })
// });
// usercryptoJson.map(coin =>{
//     newFilter.forEach(element => {
//         if(coin.name === element.name){
//             coin.price = element.current_price
//             coin.image = element.image
//             coin.market_cap = element.market_cap
//             coin.high_24h = element.high_24h
//             coin.low_24h = element.low_24h
//             coin.price_change_24h = element.price_change_24h
//             coin.price_change_percentage_24h = element.price_change_percentage_24h
//             coin.ath = element.ath
//         }
//     });

//     coin.balance = coin.price * coin.amount
// })
// return {
//     props: {
//          coins_markCap_Desc,
//          marketChart,
//          usercryptoJson

//     }
// }

//}
