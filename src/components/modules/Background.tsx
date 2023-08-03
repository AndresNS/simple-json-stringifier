import { PropsWithChildren } from "react";

const Background = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 relative overflow-hidden ">
      <svg
        width="678"
        height="700"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="none"
        className="text-cyan-50/10 dark:text-teal-600/70 w-1/2 absolute bottom-[-20%] left-[10%] blur-[8rem] "
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M366.411 94.4532C468.277 124.011 606.873 101.14 662.474 172.433C718 243.628 608.222 302.219 583.019 372.187C558.078 441.426 601.632 541.603 517.805 574.049C433.17 606.807 316.946 551.497 219.059 513.06C134.409 479.822 44.7716 439.068 9.39251 374.416C-23.3675 314.551 39.8214 266.586 52.3977 208.506C67.4689 138.905 6.67177 36.0344 89.1513 6.07694C171.127 -23.6974 269.477 66.3265 366.411 94.4532Z"
        />
      </svg>

      <svg
        width="1920"
        height="1080"
        fill="currentColor"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-sky-50 dark:text-sky-900/70 w-1/2 right-[-5%] absolute blur-[8rem]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.8867 190.284C68.2375 110.451 166.485 85.4614 251.568 50.4015C324.742 20.2486 398.84 -12.1975 477.877 5.26847C561.122 23.6645 639.37 72.0015 678.601 144.77C716.457 214.986 696.036 295.032 674.285 369.573C652.901 442.858 615.221 505.434 558.072 557.837C473.51 635.377 393.29 752.925 274.952 735.748C154.295 718.235 87.0716 589.858 38.6123 482.437C-3.79682 388.427 -15.7613 280.864 28.8867 190.284Z"
        />
      </svg>

      <svg
        viewBox="0 0 698 570"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="none"
        className="text-purple-50/30 dark:text-slate-900/50 w-1/2 absolute blur-[8rem] "
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M425.614 -1.26931C513.703 42.6657 673.177 2.57176 695.665 96.1671C717.919 188.788 566.065 241.316 503.411 322.52C447.139 395.454 438.004 501.355 352.949 540.357C256.978 584.365 140.262 578.797 56.9373 527.252C-25.0533 476.532 -70.1589 379.548 -63.3697 282.821C-57.5387 199.745 39.1131 152.343 88.3243 80.0709C138.778 5.97435 135.619 -117.816 223.932 -139.114C312.294 -160.423 349.026 -39.4682 425.614 -1.26931Z"
        />
      </svg>

      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
