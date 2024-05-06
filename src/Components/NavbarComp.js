import React, { useEffect, useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Javabasic from '../Java/Javabasic';
import JavaIntroduction from '../Java/JavaIntroduction';
import JavaConculsion from '../Java/JavaConculsion';
import JavaOpps from '../Java/JavaOpps';
import "./Navbar.css";
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';

function NavbarComp() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
    const [selectedListItem, setSelectedListItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedMenuItem("Java");
        // setSelectedMenuItem("Git");
    },[])

    const handleMenuItemClick = (menuItem) => {
        console.log(menuItem)
        setSelectedMenuItem(menuItem);
        setSelectedListItem(null); // Reset selected list item when changing the menu
        setIsSidebarOpen(true)
    };

    const handleListItemClick = (details, topicName) => {
        console.log(details, topicName)
            navigate("/", { state: { topicName: topicName, courseName: details.courseName } })
            setIsSidebarOpen(false)
    };

    const handleMenuMouseEnter = (menuItem) => {
        setHoveredMenuItem(menuItem);
    };

    const handleMenuMouseLeave = () => {
        setHoveredMenuItem(null);
    };

    const contentMap = {
        Java: {
            content: 'Java Content',
            list: ['Java Basic', 'Java Indroduction', 'Java Opps', 'Consultion'],
            courseName: "java"

        },
        Python: {
            content: 'Python Content',
            list: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'],
            courseName: "python"
        },
        React: {
            content: 'React Js',
            list: ['Server Link Access In Local', 'Option Y', 'Option Z'],
            courseName: "React"
        },
        Git:{
            content: 'Git Hub',
            list: ['Git Branch','Git Tag Release','Git Host VsCode'],
            courseName: "Git"
        },
        Cloud: {
            content: 'Ionic Content',
            list: ['Blue & Green(Deployment Commands)', 'Blue&Green(deployment)', 'Bluepathyaml', 'Grapes', 'Mango'],
            courseName:"Cloud"
        },
        Net: {
            content: '.NET Content',
            list: ['Framework 1', 'Framework 2', 'Framework 3', 'Framework 4', 'Framework 5'],
        },
        Oracle: {
            content: 'Oracle Content',
            list: ['One', 'Two', 'Three', 'Four', 'Five'],
        },
    };

    const courseData = [
        { courseName: 'Java', id: 1 }, { courseName: 'Python', id: 2 },
        { courseName: 'React', id: 3 }, { courseName: 'Git', id: 4 },
        { courseName: 'Cloud', id: 5 }, { courseName: 'Oracle', id: 6 },
        { courseName: 'JS', id: 7 }, { courseName: 'Angular', id: 8 },
        { courseName: 'HTML', id: 9 }, { courseName: 'CSS', id: 10 },
        { courseName: 'Native', id: 11 }, { courseName: 'Swift', id: 12 },
        { courseName: 'Android', id: 13 }, { courseName: 'Spring', id: 14 }
    ]

    const NextArrow = (props) => {
        const { className, onClick } = props;
        const currentSlide = props.currentSlide
        const slideCount = props.slideCount
        return (
            <div onClick={onClick} className="slick_nxt" style={{ display: currentSlide === slideCount - 1 ? 'none' : 'block' }}>
                <IoIosArrowForward size={30} className="slider_next_icon" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { className, onClick } = props;
        const currentSlide = props.currentSlide
        return (
            <div className="slick_prev" onClick={onClick} style={{ display: currentSlide === 0 ? 'none' : 'block' }}>
                <IoIosArrowBack className="slider_next_icon" size={30} />
            </div>
        );
    };

    const [settings] = useState({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        horizontal: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    return (
        <div>
            <div className='footer'>
                <div className='footer_split row'>
                    <div className='header_split col-2'>
                        <GiHamburgerMenu cursor="pointer" size={25} className='header-toggle-icon' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    </div>
                    <div className='col-9'>
                        <Slider {...settings}>
                            {courseData.map((item, index) => (
                                <div
                                    key={index}
                                    className={selectedMenuItem === item.courseName || hoveredMenuItem === item.courseName ? 'menuName_style' : "menuName"}
                                    onMouseEnter={() => handleMenuMouseEnter(item.courseName)}
                                    onMouseLeave={() => handleMenuMouseLeave()}
                                >
                                    <span onClick={() => handleMenuItemClick(item.courseName)}>{item.courseName}</span>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Drawer visible={isSidebarOpen} drawerStyle={{ pointerEvents: "all" }}
                contentWrapperStyle={{ width: "250px", top: "62px" }} placement='left'
                closable={false}
                onClose={() => setIsSidebarOpen(false)}>
                <div className='Learning_center'>
                    {selectedMenuItem !== null ? (
                        <>
                            <span style={{ paddingLeft: "30px", fontWeight: "bold" }}>{contentMap[selectedMenuItem].content}</span>
                            <ul className='listside'>
                                {contentMap[selectedMenuItem].list.map((item, index) => {
                                    return (
                                        <li style={{ listStyle: 'none', cursor: 'pointer' }} key={index} onClick={() => handleListItemClick(contentMap[selectedMenuItem], item)}>
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    ) : (
                        <div style={{ paddingLeft: "30px" }}>
                            <p>Select a list item</p>
                        </div>
                    )}
                </div>
            </Drawer>
        </div>
    );
}

export default NavbarComp;
