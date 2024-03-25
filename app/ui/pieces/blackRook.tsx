const BlackRook = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
      <g
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z"
          stroke-linecap="butt"
        />
        <path
          d="M14 29.5v-13h17v13H14z"
          stroke-linecap="butt"
          stroke-linejoin="miter"
        />
        <path
          d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"
          stroke-linecap="butt"
        />
        <path
          d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"
          fill="none"
          stroke="#ececec"
          stroke-width="1"
          stroke-linejoin="miter"
        />
      </g>
    </svg>
  );
};

export default BlackRook;
