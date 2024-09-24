import React, { useState, useEffect, useRef } from "react";
import { Button } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import MenuItem from '@mui/material/MenuItem';

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import StylizedButton from "../components/StylizedButton/StylizedButton";
import DropdownSlide from "../components/DropdownSlide/DropdownSlide";
import BgPic from "../assets/bg.png"
import BigPic from "../assets/bigs.png"
import pfp from "../assets/famprofile.jpeg"

import amyduong from "../assets/bigsslides/amyduong.png"
import andrewnguyen from "../assets/bigsslides/andrewnguyen.png"
import andrewtang from "../assets/bigsslides/andrewtang.png"
import anthonypham from "../assets/bigsslides/anthonypham.png"
import ashleythai from "../assets/bigsslides/ashleythai.png"
import briananguyen from "../assets/bigsslides/briananguyen.png"
import briannatran from "../assets/bigsslides/briannatran.png"
import chrisle from "../assets/bigsslides/chrisle.png"
import daile from "../assets/bigsslides/daile.png"
import damonle from "../assets/bigsslides/damonle.png"
import danpham from "../assets/bigsslides/danpham.png"
import ericdien from "../assets/bigsslides/ericdien.png"
import ethandao from "../assets/bigsslides/ethandao.png"
import hiennguyen from "../assets/bigsslides/hiennguyen.png"
import howardtrinh from "../assets/bigsslides/howardtrinh.png"
import hyunkim from "../assets/bigsslides/hyunkim.png"
import jaclynnguyen from "../assets/bigsslides/jaclynnguyen.png"
import jacquenguyen from "../assets/bigsslides/jacquenguyen.png"
import jamespham from "../assets/bigsslides/jamespham.png"
import jennytran from "../assets/bigsslides/jennytran.png"
import jessicale from "../assets/bigsslides/jessicale.png"
import johnpham from "../assets/bigsslides/johnpham.png"
import katedinh from "../assets/bigsslides/katedinh.png"
import katiedoan from "../assets/bigsslides/katiedoan.png"
import kellytang from "../assets/bigsslides/kellytang.png"
import kellytran from "../assets/bigsslides/kellytran.png"
import kevinespinas from "../assets/bigsslides/kevinespinas.png"
import kienatan from "../assets/bigsslides/kienatan.png"
import kimtran from "../assets/bigsslides/kimtran.png"
import lancegiang from "../assets/bigsslides/lancegiang.png"
import lilliangonick from "../assets/bigsslides/lilliangonick.png"
import madelinemai from "../assets/bigsslides/madelinemai.png"
import melodypho from "../assets/bigsslides/melodypho.png"
import mikeychoi from "../assets/bigsslides/mikeychoi.jpg"
import mythuanhahoang from "../assets/bigsslides/mythuanhahoang.png"
import nathantran from "../assets/bigsslides/nathantran.png"
import nicolehatton from "../assets/bigsslides/nicolehatton.png"
import phile from "../assets/bigsslides/phile.png"
import prestonpham from "../assets/bigsslides/prestonpham.png"
import racheltang from "../assets/bigsslides/racheltang.png"
import rorykien from "../assets/bigsslides/rorykien.png"
import ryanquach from "../assets/bigsslides/ryanquach.png"
import sammynguyen from "../assets/bigsslides/sammynguyen.png"
import selinavuong from "../assets/bigsslides/selinavuong.png"
import shawnnguyen from "../assets/bigsslides/shawnnguyen.png"
import sophianguyen from "../assets/bigsslides/sophianguyen.png"
import stevenhuynh from "../assets/bigsslides/stevenhuynh.png"
import stevepham from "../assets/bigsslides/stevepham.png"
import tayshonkim from "../assets/bigsslides/tayshonkim.png"
import vanessatran from "../assets/bigsslides/vanessatran.png"
import vincenttran from "../assets/bigsslides/vincenttran.png"
import {
    PageTitle,
    PageHeader,
    PageSubheader,
    PageText,
    PageWrapper,
    PageContent,
    DropdownMenuWrapper,
    DropdownMenu,
    DropdownContent,
    Overlay,
    CloseButton,
    SlideshowWrapper,
    VideoWrapper
} from "../components/Page/Page";

import styled from "styled-components";
import { ListItem } from "@mui/material";

const ExtNavLink = styled("a")`
  text-decoration: none;
  color: black;
  padding: 15px 8px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;

  &:hover {
    border-bottom: black 2px solid;
    padding-bottom: 13px;
  }
`;


const BackgroundImage: React.CSSProperties = {
    backgroundImage: `url(${BgPic})`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '85vh',
    width: '102.5vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: '-10vw',
    zIndex: '-1'
};

const buttons = [
    [{ title: 'Nước Mắmis', imageUrl: pfp }],                       // 0
    [{ title: 'Ur Mom', imageUrl: pfp }],                           // 1
    [{ title: 'Fur-midable Tigers', imageUrl: pfp }],               // 2
    [{ title: 'The ABBs (All Bad BEEPS)', imageUrl: pfp }],         // 3
    [{ title: 'The Quachers', imageUrl: pfp }],                     // 4
    [{ title: 'Banh Mi Besties', imageUrl: pfp }],                  // 5
    [{ title: 'Phở 1919°', imageUrl: pfp }],                        // 6
    [{ title: 'Bún Riêuzzlers', imageUrl: pfp }],                   // 7
    [{ title: 'Something Vietnamese', imageUrl: pfp }],             // 8
    [{ title: 'Troi Oi-led Up', imageUrl: pfp }],                          // 9
    [{ title: 'Saigooners', imageUrl: pfp }],                              // 10
    [{ title: 'Việt Kiều-ties', imageUrl: pfp }],                              // 11
    [{ title: '', imageUrl: pfp }],                          // 12
    [{ title: '', imageUrl: pfp }],                              // 13
    [{ title: '', imageUrl: pfp }],                              // 14
    [{ title: '', imageUrl: pfp }],                          // 15
    [{ title: '', imageUrl: pfp }],                              // 16
    [{ title: '', imageUrl: pfp }],                              // 17
    [{ title: '', imageUrl: pfp }],                          // 18
    [{ title: '', imageUrl: pfp }],                              // 19
    [{ title: '', imageUrl: pfp }],                              // 20
    [{ title: '', imageUrl: pfp }],                              // 21
    [{ title: '', imageUrl: pfp }],                          // 22
    [{ title: '', imageUrl: pfp }],                              // 23
    [{ title: '', imageUrl: pfp }],                              // 24
    [{ title: '', imageUrl: pfp }],                          // 25
];

const slides = [
    [danpham, katiedoan],                   // 0
    [ericdien, melodypho],                  // 1
    [madelinemai, anthonypham],             // 2
    [sammynguyen, jaclynnguyen],            // 3
    [ryanquach, briananguyen],              // 4
    [BgPic, prestonpham],                   // 5
    [jessicale, ethandao],                  // 6
    [johnpham, stevepham],                  // 7
    [kevinespinas, hyunkim],                // 8
    [briannatran, mikeychoi],               // 9
    [BgPic, BgPic],         // 10
    [BgPic, BgPic],         // 11
    [BgPic, BgPic],         // 12
    [BgPic, BgPic],         // 13
    [BgPic, BgPic],         // 14
    [BgPic, BgPic],         // 15
    [BgPic, BgPic],         // 16
    [BgPic, BgPic],         // 17
    [BgPic, BgPic],         // 18
    [BgPic, BgPic],         // 19
    [BgPic, BgPic],         // 20
    [BgPic, BgPic],         // 21
    [BgPic, BgPic],         // 22
    [BgPic, BgPic],         // 23
    [BgPic, BgPic],         // 24
    [BgPic, BgPic],         // 25
];

const slides2 = [
    BigPic
];

const videoLink = [
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 0
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 1
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 2
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 3
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 4
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 5
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 6
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 7
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 8
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 9
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 10
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 11
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 12
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 13
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 14
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 15
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 16
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 17
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 18
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 19
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 20
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 21
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 22
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 23
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 24
    "https://www.youtube.com/embed/MUVmBCw4p6M?si=ysZs6PPpPgGdyLZJ", // 25
]


export default function Bigs() {

    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (index: number) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpenDropdownIndex(null);
        }
    };

    const closeDropdown = () => {
        setOpenDropdownIndex(null);
    };

    useEffect(() => {
        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Remove the event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {openDropdownIndex !== null && <Overlay onClick={() => setOpenDropdownIndex(null)} />}
            <PageWrapper>
                <NavBar />
                <PageContent>
                    {/* <div style={BackgroundImage}> */}
                    <PageTitle>Meet the Bigs!</PageTitle>
                    <PageText>
                        Introducing our 2024–2025 VSU Bigs! Click on any of the Fam Profiles below to learn more about each of the fams and the bigs!
                    </PageText>
                    <DropdownMenuWrapper ref={dropdownRef}>
                        <DropdownMenu>
                            <StylizedButton buttons={buttons[0]} onButtonClick={() => toggleDropdown(0)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 0} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[0]} videoLink={videoLink[0]}/>
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[1]} onButtonClick={() => toggleDropdown(1)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 1} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[1]} videoLink={videoLink[1]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[2]} onButtonClick={() => toggleDropdown(2)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 2} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[2]} videoLink={videoLink[2]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[3]} onButtonClick={() => toggleDropdown(3)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 3} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[3]} videoLink={videoLink[3]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[4]} onButtonClick={() => toggleDropdown(4)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 4} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[4]} videoLink={videoLink[4]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[5]} onButtonClick={() => toggleDropdown(5)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 5} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[5]} videoLink={videoLink[5]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[6]} onButtonClick={() => toggleDropdown(6)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 6} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[6]} videoLink={videoLink[6]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[7]} onButtonClick={() => toggleDropdown(7)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 7} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[7]} videoLink={videoLink[7]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[8]} onButtonClick={() => toggleDropdown(8)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 8} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[8]} videoLink={videoLink[8]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[9]} onButtonClick={() => toggleDropdown(9)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 9} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[9]} videoLink={videoLink[9]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[10]} onButtonClick={() => toggleDropdown(10)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 10} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[10]} videoLink={videoLink[10]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[11]} onButtonClick={() => toggleDropdown(11)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 11} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[11]} videoLink={videoLink[11]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[12]} onButtonClick={() => toggleDropdown(12)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 12} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[12]} videoLink={videoLink[12]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[13]} onButtonClick={() => toggleDropdown(13)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 13} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[13]} videoLink={videoLink[13]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[14]} onButtonClick={() => toggleDropdown(14)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 14} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[14]} videoLink={videoLink[14]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[15]} onButtonClick={() => toggleDropdown(15)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 15} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[15]} videoLink={videoLink[15]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[16]} onButtonClick={() => toggleDropdown(16)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 16} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[16]} videoLink={videoLink[16]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[17]} onButtonClick={() => toggleDropdown(17)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 17} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[17]} videoLink={videoLink[17]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[18]} onButtonClick={() => toggleDropdown(18)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 18} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[18]} videoLink={videoLink[18]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[19]} onButtonClick={() => toggleDropdown(19)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 19} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[19]} videoLink={videoLink[19]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[20]} onButtonClick={() => toggleDropdown(20)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 20} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[20]} videoLink={videoLink[20]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[21]} onButtonClick={() => toggleDropdown(21)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 21} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[21]} videoLink={videoLink[21]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[22]} onButtonClick={() => toggleDropdown(22)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 22} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[22]} videoLink={videoLink[22]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[23]} onButtonClick={() => toggleDropdown(23)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 23} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[23]} videoLink={videoLink[23]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[24]} onButtonClick={() => toggleDropdown(24)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 24} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[24]} videoLink={videoLink[24]} />
                            </DropdownContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[25]} onButtonClick={() => toggleDropdown(25)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 25} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[25]} videoLink={videoLink[25]} />
                            </DropdownContent>
                        </DropdownMenu>
                    </DropdownMenuWrapper>
                </PageContent>
                <Footer />
            </PageWrapper>
        </>
    );
}
