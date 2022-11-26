import React, { useContext } from 'react';
import { AuthContext } from "context/authContext";

const Settings = () => {
  const { currentVendor } = useContext(AuthContext);

  return (
    <div className="ml-4 mt-4 lg:ml-60">
      <div className='text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl mb-4'>
        Settings
      </div>

      <div className="transition-all" id="main">
              <div className="p-4">
                  <div className="relative">
                      <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" className="w-full h-72 object-cover rounded-lg" alt=""/>
                      <a href="#" className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center">
                          <i className='bx bx-edit-alt'></i>
                      </a>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                      <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="w-28 h-28 object-cover rounded-full" alt=""/>
                      <div>
                          <h2 className="text-2xl font-semibold mb-2">{currentVendor.vendorName}</h2>
                          <span className="text-lg text-gray-500">{currentVendor.email}</span>
                      </div>
                      <a href="#" className="py-2 px-4 rounded bg-primary sm:flex items-center gap-2 text-white hover:bg-black ml-auto hidden">
                          <i className='bx bx-edit-alt' ></i>
                          Edit Profile
                      </a>
                  </div>
                  <p className="text-gray-500 text-lg mt-4 mb-8">{currentVendor.vendorDescription}</p>
              </div>
          </div>

    </div>
  )
}

export default Settings;
