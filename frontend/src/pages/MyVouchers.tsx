import React, { useContext } from 'react';
import { AuthContext } from "../context/authContext";
import { useQuery } from "react-query";
import Axios from 'axios';
import Voucher from 'components/Voucher';
import NewVoucherComponent from 'components/NewVoucher';
import { VoucherTypes } from 'utils/types';

const AddVoucherModal = () => {
  return (
    <div>
      <label htmlFor="my-modal-4" className="card w-full sm:w-72 h-80 bg-base-100 shadow-xl flex items-center justify-center h-screen">
        <div>
        Create new voucher
        </div>
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <NewVoucherComponent />
      </label>
      </label>
    </div>
  )
}

const MyVouchers = () => {
  const { data, status } = useQuery(['vouchers'], async () => {
    const res = await Axios.create({ baseURL: "/api", withCredentials: true }).get("/vouchers")
    return res.data;
    })

  return (
    <div className="ml-4 mt-4 lg:ml-60">
      <div className='text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl mb-4'> Vouchers </div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <AddVoucherModal />
          {data?.map((v : VoucherTypes) => (
            <Voucher key={v.id} title={v.title} description={v.description} category={v.category}
            priceBefore={v.priceBefore} priceAfter={v.priceAfter} maxRedeem={v.maxRedeem} expireDate={v.expireDate} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyVouchers;
