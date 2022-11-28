import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import { AuthContext } from "../context/authContext";
import { useMutation, useQueryClient } from "react-query";
import Axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { VoucherTypes } from 'utils/types';

const NewVoucher = () => {
  const { currentVendor } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation((newVoucher: VoucherTypes) => {
    return Axios.create({ baseURL: "/api", withCredentials: true }).post("/voucher", newVoucher);
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(["vouchers"])
    }
  });

    const category = [
    { name: 'Meal' },
    { name: 'Activity' },
  ]

  const [chosenDate, setChosenDate] = useState(new Date())

  const [selected, setSelected] = useState(category[0])

  const [voucherInputs, setVoucherInputs] = useState({
    title: "",
    description: "",
    category: "Meal",
    priceBefore: 0,
    priceAfter: 0,
    image: "",
    maxRedeem: 0,
    expireDate: "",
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setVoucherInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumChange = (e: React.ChangeEvent<any>) => {
    setVoucherInputs((prev) => ({ ...prev, [e.target.name]: Math.round(parseFloat(e.target.value) * 100) / 100 }));
  };

  const createNewVoucher = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    await setVoucherInputs({...voucherInputs, category: selected.name, expireDate: moment(chosenDate).format('YYYY-MM-DD') });
    mutation.mutate(voucherInputs)
  };

  return (
      <form className="flex flex-col space-y-6 border-black border-solid border-1"
      onSubmit={createNewVoucher}>
            <div>
              <h2>
                Voucher Title
              </h2>
              <input
                id="title"
                name="title"
                required
                maxLength={128}
                type="text"
                placeholder="New Voucher #1"
                className="bg-white outline-none border border-black rounded-3xl px-6 py-2 w-full"
                onChange={handleChange}
            />
            </div>

            <div>
              <h2>
                Description
              </h2>
              <textarea
                id="description"
                name="description"
                placeholder="Voucher Description (optional)"
                className="bg-white outline-none border border-black rounded-3xl px-6 py-4 min-h-[5em] w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <h2>
                Category
              </h2>
              <Listbox value={selected} onChange={setSelected}>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{selected.name}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiChevronUpDown
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {category.map((c, idx) => (
                              <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                  }`
                                }
                                value={c}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {c.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <HiCheck className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
            </div>

            <div className="flex flex-row space-x-3">
              <h2>
                Price Before
              </h2>
              <input
                id="priceBefore"
                name="priceBefore"
                required
                type="number"
                step="0.01"
                placeholder="20"
                className="bg-white outline-none border border-black rounded-3xl px-6 py-1 w-full"
                onChange={handleNumChange}
              />
              <h2>
                Price After
              </h2>
              <input
                id="priceAfter"
                name="priceAfter"
                required
                type="number"
                step="0.01"
                placeholder="15"
                className="bg-white outline-none border border-black rounded-3xl px-6 py-1 w-full"
                onChange={handleNumChange}
              />
            </div>

            <div>
              <h2>
                Upload Image
              </h2>
              <input type="file" className="file-input file-input-bordered w-full max-w-xl"
              onChange={handleChange} />
            </div>

            <div>
              <h2>
                Maximum number of people that redeem
              </h2>
              <input
                id="maxRedeem"
                name="maxRedeem"
                required
                type="number"
                placeholder="Number"
                className="bg-white outline-none border border-black rounded-3xl px-6 py-2 w-full"
                onChange={handleNumChange}
              />
            </div>

            <div>
              <h2>
                Expiration Date
              </h2>
              <DatePicker selected={chosenDate} onChange={(date: Date) => setChosenDate(date)}
                className="border-l-4 border-primary w-full p-3 rounded text-sm outline-none focus:ring-0 bg-transparent"
              />
            </div>

            <div className="inline-block self-end font-bold mt-10">
              <button
                type="submit"
                className="btn btn-md bg-black text-white hover:bg-white hover:text-black rounded-3xl px-8 uppecase text-sm"
              >
                Create a new voucher
              </button>
            </div>
          </form>
      )
};

export default NewVoucher;
