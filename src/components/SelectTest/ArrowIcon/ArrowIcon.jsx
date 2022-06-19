import PropTypes from "prop-types";

const ArrowIcon = ({ className, width, height, fill }) => {
    
    return (
        <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill={fill}
        >
        <path d="M31.805 15.529l-10-10c-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471v0l8.862 8.862h-29.057c-0 0-0 0-0 0-0.368 0-0.666 0.298-0.666 0.666 0 0 0 0 0 0v-0c0 0.369 0.298 0.667 0.667 0.667h29.057l-8.862 8.862c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471v0c0.13 0.13 0.301 0.195 0.471 0.195 0 0 0 0 0.001 0 0.184 0 0.35-0.075 0.471-0.195v0l10-10c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471v0z"></path>
        </svg>
    );
};

ArrowIcon.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
};

export default ArrowIcon;