import React, { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
      <h1 className="text-6xl text-primary font-bold">
        404 - Page not found
      </h1>
      <p className="">The URL of this page is not found. Please try again.</p>
      <div>
        <a href=".">
          <div className="btn mr-4 bg-black hover:bg-white text-white hover:text-black">Go to homepage</div>
        </a>
        <div className="btn bg-black hover:bg-white text-white hover:text-black" onClick={() => navigate(-1)}>
          Go back to previous page
        </div>
      </div>
    </div>
  );
};

export default NotFound;
