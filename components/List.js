import React from 'react'
import Sparkline from './Sparkline'

const List = ({coins_markCap_Desc}) => {
    let rank = 0
    return (

        <div class="flex flex-col px-50 w-xl ">
            
            <div class="-my-2  overflow-x-hidden sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden mt-10 border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y  divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rank 
                        </th>
                        <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            24h Price Change
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            24h % 
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Market Cap 
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last 7 Days 
                        </th>
                        
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">


        {coins_markCap_Desc.map(coin => {
            rank = rank + 1
                return(
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                            <span>
                                {rank}
                            </span>
                            
                            </div>
                        </td>
                        <td class="px-6 py-4   whitespace-nowrap">
                        <div class="flex-shrink-0 flex ">
                                <img class="h-10 w-10 mr-1 rounded-full" src={coin.image} alt="">
                            </img>
                            <div class="text-sm   m-auto text-gray-900">{coin.name}</div>
                            </div>
                            
                            
                        </td>
                        <td class="px-6 py-4 text-left whitespace-nowrap">
                            <span class="px-2 text-left inline-flex text-sm leading-5 font-medium  ">
                            {coin.current_price.toLocaleString()} €
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            
                            <span className={coin.price_change_24h > 0 ? "px-2 inline-flex  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" : "px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"}>
                            {coin.price_change_24h.toLocaleString()} €
                                </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <span className={coin.price_change_percentage_24h > 0 ? "px-2 inline-flex  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" : "px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                            </span>
                           
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {coin.market_cap.toLocaleString()} €
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Sparkline sparkline={coin.sparkline_in_7d} id={coin.id}>

                            </Sparkline>
                        </td>
                        </tr>)
        
        })
        }
        
 
 
 
 
 
 
 
                        

      





          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}

export default List