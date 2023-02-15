import React from "react";
import PropTypes from "prop-types";

function TitleComponent({
  titleText,
  subtitleText,
  subtitleTextSecond,
  colorText,
  backgroundText,
  backgroundColor,
  textColor = "text-grey-600",
}) {
  return (
    <div className="title-container">
      <div className={`text-background ${backgroundColor}`}>
        {backgroundText}
      </div>
      <div className={`text-wrapper ${textColor}`}>
        <p className="text-color">{colorText}</p>
        <h2 className="text-title">{titleText}</h2>
        <p className="text-subtitle">{subtitleText}</p>
        {subtitleTextSecond && (
          <p className="text-subtitle">{subtitleTextSecond}</p>
        )}
      </div>
    </div>
  );
}
TitleComponent.propTypes = {
  titleText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
  subtitleTextSecond: PropTypes.string.isRequired,
  colorText: PropTypes.string.isRequired,
  backgroundText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default TitleComponent;
