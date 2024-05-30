export const BlueCard = ({ title, amount, orderCount }) => {
  return (
    <div
      className={`bg-revCardBlue hover:bg-[#0E4F82] text-white shadow-md rounded-lg m-5 flex-grow min-w-[300px] h-fit`}
    >
      <div className="flex flex-col p-5 gap-4">
        <h5 className="flex items-center">
          <div>{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            stroke="currentColor"
            fill="currentColor"
            className="m-2.5 w-4 h-4"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
          </svg>
        </h5>
        <div className="flex justify-between items-center">
          <div className="text-3xl font-medium">{amount}</div>
          {!orderCount ? null : (
            <a
              className={`text-sm underline font-medium`}
              href="https://www.google.com/search?q=orders&rlz=1C1RXQR_en-GBIN1070IN1070&oq=orders&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM1MjFqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"
            >
              <div className="flex">
                {`${orderCount} Order(s)`}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="flex bg-[#0E4F82] m-0 px-6 py-2 rounded-lg justify-between">
        <p>Next Payment Date:</p>
        <p>Today, 4:00PM</p>
      </div>
    </div>
  );
};
