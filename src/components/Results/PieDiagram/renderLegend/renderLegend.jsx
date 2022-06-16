const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="recharts-default-legend">
      {payload.map((entry, index) => {
        return (
          <li style={{ "text-align": "left" }} key={`item-${index}`}>
            <svg
              style={{
                display: "inline-block",
                "vertical-align": "middle",
                "margin-right": "4px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="14"
            >
              <g fill="#61DAFB">
                <path
                  fill={entry.color}
                  cx="16"
                  cy="16"
                  type="square"
                  class="recharts-symbols"
                  transform="translate(16, 16)"
                  d="M-16,-16h32v32h-32Z"
                ></path>
              </g>
            </svg>
            <span className="item-color" class="recharts-legend-item-text ">
              {entry.value}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default renderLegend;
