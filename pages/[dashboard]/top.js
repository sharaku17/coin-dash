import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Dashboard_Layout from "../../components/layouts/Dashboard_Layout";
import List from "../../components/List";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();
  const [showNav, setShowNav] = useState(true);
  const { data: coins_markCap_Desc, error: coins_markCap_DescError } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=15&page=1&sparkline=true`,
    fetcher
  );

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

  return (
    //Build Dashboard view here
    <Dashboard_Layout toggle={toggle} visible={showNav} user={session.user}>
      <div className="m-auto h-1/3 ">
        <h1 className="  text-center font-medium  text-lg md:text-4xl">
          Current Top 15 Coins
        </h1>
        <List coins_markCap_Desc={coins_markCap_Desc} className=" "></List>
      </div>
    </Dashboard_Layout>
  );
}

// export async function getServerSideProps(context) {
//     const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=true')

//     const coins_markCap_Desc = await res.json()

//     return {
//         props: {
//             coins_markCap_Desc
//         }
//     }

// }
