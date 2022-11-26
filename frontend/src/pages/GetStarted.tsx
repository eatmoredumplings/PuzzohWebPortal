import React from 'react';
import { MdOutlineSwipe } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri"

const GetStarted = () => {
  return (
    <div className="ml-4 mt-4 lg:ml-60">
      <div className='text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl mb-4'>
        Get Started
      </div>
      <div className="stats shadow">

        <div className="stat">
          <div className="stat-figure text-primary">
            <RiCoupon2Line size="2rem" />
          </div>
          <div className="stat-title">Total number of vouchers</div>
          <div className="stat-value">4</div>
          <div className="stat-desc">* Active & inactive vouchers</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <MdOutlineSwipe size="2rem"/>
          </div>
          <div className="stat-title">Total number of swipes</div>
          <div className="stat-value">100</div>
          <div className="stat-desc">↗︎ 20 compared to last month </div>
        </div>

        <div className="stat">
            <div className="stat-figure text-primary">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://www.creativefabrica.com/wp-content/uploads/2021/02/12/FoodRestaurant-Gift-Voucher-Template-Graphics-8558430-1.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">Dinner for 2</div>
            <div className="stat-title">Voucher about to be expired</div>
            <div className="stat-desc text-primary">2 days left</div>
          </div>

      </div>

    </div>
  )
}

export default GetStarted;
