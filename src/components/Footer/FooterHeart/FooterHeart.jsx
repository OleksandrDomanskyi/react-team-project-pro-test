import PropTypes from "prop-types";

const FooterHeart = ({ className, width, height, fill }) => {

    return (
        <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill={fill}
        >
        <path d="M16 30.144l-2.24-2.218c-8.32-7.287-13.76-12.198-13.76-18.218 0-4.911 3.84-8.713 8.8-8.713 2.72 0 5.44 1.267 7.2 3.327 1.76-2.059 4.48-3.327 7.2-3.327 4.96 0 8.8 3.802 8.8 8.713 0 6.020-5.44 10.931-13.76 18.218l-2.24 2.218z"></path>
        </svg>
    );
};

FooterHeart.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
};

export default FooterHeart;