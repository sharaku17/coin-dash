import { Router } from "next/router";
import React from "react";
import { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import { useSession } from "next-auth/client";
import { UserCryptoContext } from "../contexts/UserCryptoContext";

const AddFundsCard = ({ data }) => {
  const [content, setContent] = useState();
  const [success, setSuccess] = useState();
  const { userCryptos, getUserCryptos, refreshUserCryptos } =
    useContext(UserCryptoContext);

  const [formData, setFormData] = useState({});
  const [session, loading] = useSession();

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const Data = formData;
      const body = {
        crypto: Data.crypto,
        amount: Data.amount,
        session: session,
      };
      console.log(formData);
      const response = await fetch("/api/crypto/addCrypto", {
        method: "POST",
        body: JSON.stringify(body),
      });

      const json = await response.json();

      if (json.content) {
        if (json.success === "True") {
          setSuccess(true);
          refreshUserCryptos();
        } else {
          setSuccess(false);
        }
        setContent(json.content);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div class="container focus:outline-none w-11/12 max-w-screen-lg md:p-0 p-6">
        <div>
          <h2 class="font-semibold text-xl mt-5 text-gray-600">
            Deposit Funds to your Balance
            <table></table>
          </h2>
          <p class="text-gray-500 mb-6">
            Choose your Cryptocurrency and Deposit the value you purchased to
            your Account!
          </p>

          <div class="bg-white rounded-2xl shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 items-end lg:grid-cols-3">
              <div class="text-gray-600 col-span-3  lg:col-span-1">
                <p class="font-medium text-lg">Deposit Funds</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-3  items-end">
                  <div class="md:col-span-1">
                    <SearchBar
                      setFormData={setFormData}
                      label="Choose your Cryptocurrency"
                      data={data}
                      placeholder="Cryptocurreny"
                    ></SearchBar>
                  </div>

                  <div class="md:col-span-1">
                    <label>Amount</label>
                    <input
                      type="number"
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      class=" focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50 flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-1 text-right ">
                    <button
                      onClick={submitData}
                      class="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Deposit
                    </button>
                  </div>
                </div>
              </div>
              {success && content && (
                <div class="lg:col-start-2  col-span-2 pt-5 ">
                  <div class="  sm:grid-col-2 flex flex-row border-b-2 items-center  border-b sm:border-b-0 w-full sm:w-auto  sm:pb-0">
                    <div class="flex flex-row">
                      <div class="text-green-500 pr-1">
                        <svg
                          class="w-6 sm:w-5 h-6 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <label class="text-sm text-gray-800 font-medium ">
                        {" "}
                        Deposit Success!
                      </label>
                    </div>
                    <div class="text-sm tracking-wide text-gray-500  sm:mt-0 sm:ml-4 ">
                      You have successfully added Funds to your Balance!
                    </div>
                  </div>
                </div>
              )}
              {!success && content && (
                <div class="lg:col-start-2  col-span-2 pt-5 ">
                  <div class="  sm:grid-col-2 flex flex-row border-b-2 items-center  border-b sm:border-b-0 w-full sm:w-auto  sm:pb-0">
                    <div class="flex flex-row">
                      <div class="text-red-500 pr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="none"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>{" "}
                      </div>
                      <label class="text-sm text-gray-800 font-medium ">
                        {" "}
                        Deposit Failed!
                      </label>
                    </div>
                    <div class="text-sm tracking-wide text-gray-500  sm:mt-0 sm:ml-4 ">
                      Something went wrong.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFundsCard;
