import React from "react";

function Rules() {
  return (
    <div className="rules__container">
      <label className="primary--text btn--rules" htmlFor="rules">
        RULES
      </label>
      <input type="checkbox" id="rules"></input>

      <div className="rules__popup">
        <label htmlFor="rules" className="transparent-label"></label>

        <div className="rules__inner">
          <div className="rules--head">
            <p className="secondary--text">RULES</p>
            <label className="btn--close" htmlFor="rules">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  fill="#3B4262"
                  fillRule="evenodd"
                  d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                  opacity=".25"
                />
              </svg>
            </label>
          </div>

          <div className="rules--content">
            <img src="./image-rules.svg" alt="no img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
