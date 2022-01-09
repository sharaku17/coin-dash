import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Dashboard_Layout from "../../../components/layouts/Dashboard_Layout";
import dynamic from "next/dynamic";
import SearchBarHome from "../../../components/SearchBarHome";

import useSWR from "swr";

const LineChart = dynamic(() => import("../../../components/LineChart"), {
  ssr: false,
});
const fetcher = (url) => fetch(url).then((res) => res.json());

function Coin({ coin }) {
  const [session, loading] = useSession();
  const [days, setDays] = useState(1);
  const [content, setContent] = useState();
  const [showNav, setShowNav] = useState(true);
  const [formData, setFormData] = useState({});

  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${coin}`,
    fetcher
  );
  const { data: chartData, error: chartDataError } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=eur&days=${days}`,
    fetcher
  );
  const { data: coins_markCap_Desc, error: coins_markCap_DescError } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200`,
    fetcher
  );

  console.log(data);
  const toggle = () => setShowNav(!showNav);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
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
  } else if (!data || !chartData || !coins_markCap_Desc) {
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

  return (
    //Build Dashboard view here
    <Dashboard_Layout toggle={toggle} visible={showNav} user={session.user}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="rounded-full mx-5 w-12 h-12"
            src={session.user.image}
          ></img>

          <span className="mt-0  text-xl font-semibold text-gray-800">
            {session.user.name}
          </span>
        </div>
        <div className="mr-10 lg:mr-20">
          <SearchBarHome
            setFormData={setFormData}
            label=""
            data={coins_markCap_Desc}
            placeholder="Search for Coin"
          ></SearchBarHome>
        </div>
      </div>
      <div className='"grid grid-cols-3 md:grid-cols-4   flex flex-col '>
        <div className="flex  col-span-3 md:col-span-4 flex-col lg:flex-row">
          {/* <img src={data.image.small}></img>
                       <h1 className="  text-center font-medium  text-lg md:text-4xl">{data.name}</h1> */}

          <div class="m-6 w-2/3 flex flex-col bg-white shadow-xl rounded-2xl p-6">
            <LineChart data={chartData} coin={data}></LineChart>
            <div className="">
              <ul className="flex bg-gray-200 w-36  rounded-lg p-1 font-semibold text-gray-500 text-sm ">
                <li className="py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-100">
                  1D
                </li>

                <li className="py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-100">
                  7D
                </li>
                <li className="py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-100">
                  14D
                </li>
                <li className="py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-100">
                  1M
                </li>
              </ul>
            </div>

            <div className="flex items-center m-2">
              {/* <img  class="w-16 h-16" src={data.image.small}></img>
                       <h1 className="  font-medium ml-3 text-lg md:text-4xl">{data.name}</h1> */}
            </div>
          </div>
          <div class="m-6 w-1/4 flex flex-col bg-white shadow-xl rounded-2xl p-6">
            <h1 className="font-semibold text-center mb-3 text-gray-800 text-lg md:text-2xl">
              Price Statistics
            </h1>
            <div className="w-full border-t flex flex-col border-blueGray-200">
              <div className="flex border-b justify-between ">
                <span className="py-5  text-gray-600 font-semibold text-sm">
                  Price change 24h
                </span>
                <span className="py-5  text-black font-bold text-sm">
                  {data.market_data.price_change_24h + "€"}
                </span>
              </div>
              <div className="flex border-b justify-between ">
                <span className="py-5  text-gray-600 font-semibold text-sm">
                  All time high
                </span>
                <span className="py-5  text-black font-bold text-sm">
                  {data.market_data.ath.eur + "€"}
                </span>
              </div>
              <div className="flex border-b justify-between ">
                <span className="py-5  text-gray-600 font-semibold text-sm">
                  Volume / Market Cap
                </span>
                <span className="py-5  text-black font-bold text-sm">
                  {data.market_data.market_cap.eur + "€"}
                </span>
              </div>
              <div className="flex border-b justify-between ">
                <span className="py-5  text-gray-600 font-semibold text-sm">
                  24h Low / 24h High
                </span>
                <span className="py-5  text-black font-bold text-sm">
                  {data.market_data.low_24h.eur +
                    "€" +
                    " / " +
                    data.market_data.high_24h.eur +
                    "€"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-6 w-2/3 flex flex-col bg-white shadow-xl rounded-2xl p-6">
          <span className="font-semibold text-center mb-3 text-gray-800 text-lg md:text-2xl">
            Description
          </span>
          <span className="text-gray-600 font-semibold text-md">
            {data.description.en}
          </span>
        </div>
      </div>
    </Dashboard_Layout>
  );
}

export default Coin;

export async function getServerSideProps(context) {
  const id = context.query.coin;

  return {
    props: {
      coin: id,
    },
  };
}
