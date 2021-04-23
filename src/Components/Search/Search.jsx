import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import UserConsumer from "../Context/Context";
import "../../global.css";

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <input type="text" />
      </DropdownToggle>
      <DropdownMenu className="dropdownmenus">
        {" "}
        <UserConsumer>
          {(value) => {
            const { data } = value;
            return (
              <div className="content-card">
                {data &&
                  data.length > 0 &&
                  data.map((item) => {
                    return (
                      <>
                        {item.id && (
                          <Link to={`/news-project/haberdetay/${item.id}`}>
                            <DropdownItem className="dropdownitem">
                              <p>{item.title}</p>
                            </DropdownItem>
                          </Link>
                        )}
                      </>
                    );
                  })}
              </div>
            );
          }}
        </UserConsumer>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Example;
