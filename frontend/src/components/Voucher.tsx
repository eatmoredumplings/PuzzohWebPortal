import React from 'react';
import { VoucherTypes } from 'utils/types'
import moment from 'moment';
import DropdownMenu from 'components/DropdownMenu';

const Voucher = ({ title, description, category, priceBefore, priceAfter, maxRedeem, expireDate }: VoucherTypes) => {
  const reformatExpireDate = moment(expireDate).format('YYYY-MM-DD')

  return (
    <div>
      <div className="card w-full sm:w-72 h-80 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          <DropdownMenu />

        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge bg-primary border-none">{category}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline mr-auto">{maxRedeem} remaining</div>
            <div>
                <span className="text-gray-500 line-through">${priceBefore}</span>
                <span className="text-black"> ${priceAfter}</span>
            </div>
          </div>
            <div>
              <span className='font-semibold'>
              Expired on: {""}
              </span>
              <span className='italic'>
                {reformatExpireDate}
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Voucher
