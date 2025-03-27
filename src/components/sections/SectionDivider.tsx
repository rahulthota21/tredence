const SectionDivider = () => {
    return (
      <div style={{ position: "relative", overflow: "hidden", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "80px" }}
        >
          <path
            d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,74.7C1120,96,1280,128,1360,144L1440,160V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
            fill="currentColor"
            opacity="0.05"
          ></path>
        </svg>
      </div>
    );
  };
  
  export default SectionDivider;
  