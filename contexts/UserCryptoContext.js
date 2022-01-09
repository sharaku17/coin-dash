import {createContext, useState} from 'react';

const UserCryptoContext = createContext();




const UserCryptoProvider = ({children}) => {


const [userCryptos,setUserCryptos,getUserCryptos] = useState([])
const [cryptoListDSC,setcryptoListDSC] = useState([])
const [totalBalance,setTotalBalance] = useState(0)


const refreshUserCryptos = async () => {
    try {

            

            const resUserData = await fetch("/api/crypto/fetchBalance")
            const resUserDataJson = await resUserData.json();
            if(resUserData){
                const newFilter = cryptoListDSC.filter((coin) => {
                    return resUserDataJson.some((f) => {
                        return f.name === coin.name
                    })
                });
                resUserDataJson.map(coin =>{
                    newFilter.forEach(element => {
                       if(coin.name === element.name){
                           coin.price = element.current_price
                           coin.image = element.image
                           coin.market_cap = element.market_cap
                           coin.high_24h = element.high_24h
                           coin.low_24h = element.low_24h
                           coin.price_change_24h = element.price_change_24h
                           coin.price_change_percentage_24h = element.price_change_percentage_24h
                           coin.ath = element.ath
                       } 
                    });

                    coin.balance = coin.price * coin.amount
                })
                setUserCryptos(resUserDataJson)
            } 
                
    }           
    catch (error) {
        
    }
}

const updateUserCryptos = () => {
    setUserCryptos((prevCrypto) => {
        return [{name:'testCoin', amount:10, price:1.05}, ...prevCrypto]
    })
    console.log(userCryptos)
}

const refreshTotalBalance = async (state) => {
    try {
            //  if(userCryptos){
            //      setUserCryptos((state) => {
            //             console.log(state)
            //         })
                //setAllCoins(resUserDataJson)
                const newFilter = cryptoListDSC.filter((coin) => {
                    return state.some((f) => {
                        return f.name === coin.name
                    })
                });
                
                state.map( coin => {
                    newFilter.forEach(element => {
                       if(coin.name === element.name){
                           coin.price = element.current_price
                       } 
                    });
                })
                var total = 0.00
                state.map(coin => {
                    console.log(coin.amount, coin.price)
                    total = total + (coin.amount * coin.price)
                })
                setTotalBalance(total.toFixed(2))

            }
                
               
    catch (error) {
        
    }
}

const addUserCryptos = async (formData) => {
        try { 

           



            // const Data = formData;
            // const body = {
            //     crypto: Data.crypto,
            //     amount: Data.amount,
            // }
            
            // const response = await fetch('/api/crypto/addCrypto' , {
            //     method: 'POST',
            //     body: JSON.stringify(body),
            //     headers: {'Content-Type': 'application/json'}
            // });

            // const json =  await response.json()

            // if(json.content){
            //     if(json.success === "True"){
            //         setSuccess(true)
            //     }
            //     else {
            //         setSuccess(false)
            //     }
            //     setContent(json.content)
            // }
            
        } catch (error) {

            console.log(error)
            
        }
    }



    return ( <UserCryptoContext.Provider
        value={{
            userCryptos,
            setUserCryptos,
            totalBalance,
            setTotalBalance,
            refreshUserCryptos,
            cryptoListDSC,
            setcryptoListDSC,
            refreshTotalBalance,
           // updateUserCryptos,
            addUserCryptos,
            updateUserCryptos
           // subUserCryptos
        }}
    >{children} </UserCryptoContext.Provider>)

}

export {UserCryptoProvider, UserCryptoContext}