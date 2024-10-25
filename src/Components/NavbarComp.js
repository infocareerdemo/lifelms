import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { Drawer, List } from "antd";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import {
  FaBook,
  FaLaptopCode,
  FaCogs,
  FaGraduationCap,
  FaPython,
  FaReact,
  FaCloud,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function NavbarComp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setSelectedMenuItem("MicroService");
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setSelectedListItem(null); // Reset selected list item when changing the menu
    setIsSidebarOpen(true);
  };

  const handleListItemClick = (details, topicName) => {
    navigate("/Home", {
      state: { topicName: topicName, courseName: details.courseName },
    });
    setIsSidebarOpen(false); // Close sidebar after selecting a topic
  };

  const handleMenuMouseEnter = (menuItem) => {
    setHoveredMenuItem(menuItem);
  };

  const handleMenuMouseLeave = () => {
    setHoveredMenuItem(null);
  };

  const contentMap = {
    Git: {
      content: "Git Hub",
      list: [
        { text: "Git Branch", icon: <FaGitAlt /> },
        { text: "Git Tag Release", icon: <FaCode /> },
        { text: "Git Host VsCode", icon: <FaBook /> },
      ],
      courseName: "Git",
    },
    Cloud: {
      content: "Ionic Content",
      list: [
        { text: "Blue & Green (Deployment Commands)", icon: <FaCloud /> },
        { text: "Blue & Green (deployment)", icon: <FaCode /> },
        { text: "Bluepathyaml", icon: <FaBook /> },
        { text: "Grapes", icon: <FaCogs /> },
        { text: "Mango", icon: <FaGraduationCap /> },
      ],
      courseName: "Cloud",
    },
    MicroService: {
      content: "Micro Service",
      list: [
        { text: "Web Socket", icon: <FaLaptopCode /> },
      ],
      courseName: "Micro Service",
    },
  };

  const courseData = [
    { courseName: "Git", id: 4 },
    { courseName: "Cloud", id: 5 },
    { courseName: "MicroService", id: 6 },
  ];

  const NextArrow = (props) => {
    const { onClick, currentSlide, slideCount } = props;
    return (
      <div
        onClick={onClick}
        className="slick_nxt"
        style={{ display: currentSlide === slideCount - 1 ? "none" : "block" }}
      >
        <IoIosArrowForward size={30} className="slider_next_icon" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick, currentSlide } = props;
    return (
      <div
        className="slick_prev"
        onClick={onClick}
        style={{ display: currentSlide === 0 ? "none" : "block" }}
      >
        <IoIosArrowBack className="slider_next_icon" size={30} />
      </div>
    );
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const [settings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 7, slidesToScroll: 1 } },
      { breakpoint: 700, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    ],
  });

  return (
    <div>
      <div className="footer">
        <div className="footer_split row">
          <div className="header_split col-2">
            <GiHamburgerMenu
              cursor="pointer"
              size={25}
              className="header-toggle-icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>
          <div className="col-9">
            <Slider {...settings}>
              {courseData.map((item, index) => (
                <div
                  key={index}
                  className={
                    selectedMenuItem === item.courseName ||
                    hoveredMenuItem === item.courseName
                      ? "menuName_style"
                      : "menuName"
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px",
                  }}
                  onMouseEnter={() => handleMenuMouseEnter(item.courseName)}
                  onMouseLeave={() => handleMenuMouseLeave()}
                >
                  <span onClick={() => handleMenuItemClick(item.courseName)}>
                    {item.courseName}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
          <div
            className="col-1"
            style={{
              textAlign: "right",
              padding: "0px 30px",
              cursor: "pointer",
            }}
          >
            <IoMdLogOut onClick={logout} />
          </div>
        </div>
      </div>

      {/* <Drawer
        visible={isSidebarOpen}
        drawerStyle={{ pointerEvents: "all" }}
        contentWrapperStyle={{ width: "250px", top: "60px" }}
        placement="left"
        closable={false}
        onClose={() => setIsSidebarOpen(false)}
        className={isSidebarOpen ? "ant-drawer" : "ant-drawer-close"}
      >
        
        <List
          dataSource={contentMap[selectedMenuItem]?.list || []}
          renderItem={(item) => (
            <List.Item
              onClick={() =>
                handleListItemClick(contentMap[selectedMenuItem], item.text)
              }
              y
            >
              {item.icon} <span style={{ marginLeft: 10 }}>{item.text}</span>
            </List.Item>
          )}
        />
      </Drawer> */}
      <Sidebar
        collapsed={isSidebarOpen}
        toggled={isSidebarOpen}
        breakPoint="md"
        className="sidebar_container"
      >
        {contentMap[selectedMenuItem]?.list.map((e) => (
          <Menu iconShape="square" className="ClsMenu">
            <MenuItem onClick={() => handleListItemClick(contentMap[selectedMenuItem], e.text)} icon={e.icon}>
              {e.text}
            </MenuItem>
          </Menu>
        ))}
      </Sidebar>
    </div>
  );
}

export default NavbarComp;
