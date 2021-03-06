import React, { Component } from "react";
import "../../global.css";
import haberlogo from "./haberlogo.png";
import Search from "../Search/Search";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-head">
        <a href="/news-project">
          <img
            className="navbarimg"
            src={haberlogo}
            alt="haberler"
            width="232px"
            height="52px"
          />
        </a>
        <ul className="navbarul">
          <a href="/news-project" className="cool-link">
            HABER
          </a>

          <a href="/news-project/sondakika" className="cool-link">
            SON DAKİKA
          </a>

          <a href="/news-project/magazin" className="cool-link">
            MAGAZİN
          </a>

          <a href="/news-project/spor" className="cool-link">
            SPOR
          </a>

          <a href="/news-project/ekonomi" className="cool-link">
            EKONOMİ
          </a>
        </ul>
        <div className="navbarsearch">
          <Search />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M15.0183 14.1812L10.8903 10.0532C11.6732 9.08657 12.1445 7.85769 12.1445 6.51973C12.1445 3.41811 9.62114 0.894714 6.51952 0.894714C3.4179 0.894714 0.894531 3.41811 0.894531 6.51973C0.894531 9.62135 3.41793 12.1448 6.51955 12.1448C7.85751 12.1448 9.08639 11.6734 10.053 10.8905L14.1811 15.0185C14.2967 15.1341 14.4841 15.1341 14.5998 15.0185L15.0183 14.5999C15.1339 14.4843 15.1339 14.2968 15.0183 14.1812ZM6.51955 10.9605C4.07076 10.9605 2.07875 8.96853 2.07875 6.51973C2.07875 4.07094 4.07076 2.07894 6.51955 2.07894C8.96835 2.07894 10.9603 4.07094 10.9603 6.51973C10.9603 8.96853 8.96835 10.9605 6.51955 10.9605Z"
                fill="#3F4D64"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="14.2105"
                  height="14.2105"
                  fill="white"
                  transform="translate(0.894531 0.894714)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
}
export default Navbar;
