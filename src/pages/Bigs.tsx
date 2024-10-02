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
import pfp from "../assets/famprofile.jpeg"

import amyduong         from "../assets/bigsslides/amyduong.png"
import andrewnguyen     from "../assets/bigsslides/andrewnguyen.png"
import andrewtang       from "../assets/bigsslides/andrewtang.png"
import anthonypham      from "../assets/bigsslides/anthonypham.png"
import ashleythai       from "../assets/bigsslides/ashleythai.png"
import briananguyen     from "../assets/bigsslides/briananguyen.png"
import briannatran      from "../assets/bigsslides/briannatran.png"
import chrisle          from "../assets/bigsslides/chrisle.png"
import daile            from "../assets/bigsslides/daile.png"
import damonle          from "../assets/bigsslides/damonle.png"
import danpham          from "../assets/bigsslides/danpham.png"
import ericdien         from "../assets/bigsslides/ericdien.png"
import ethandao         from "../assets/bigsslides/ethandao.png"
import hiennguyen       from "../assets/bigsslides/hiennguyen.png"
import howardtrinh      from "../assets/bigsslides/howardtrinh.png"
import hyunkim          from "../assets/bigsslides/hyunkim.png"
import jaclynnguyen     from "../assets/bigsslides/jaclynnguyen.png"
import jacquenguyen     from "../assets/bigsslides/jacquenguyen.png"
import jamespham        from "../assets/bigsslides/jamespham.png"
import jennytran        from "../assets/bigsslides/jennytran.png"
import jessicale        from "../assets/bigsslides/jessicale.png"
import johnpham         from "../assets/bigsslides/johnpham.png"
import katedinh         from "../assets/bigsslides/katedinh.png"
import katiedoan        from "../assets/bigsslides/katiedoan.png"
import kellytang        from "../assets/bigsslides/kellytang.png"
import kellytran        from "../assets/bigsslides/kellytran.png"
import kevinespinas     from "../assets/bigsslides/kevinespinas.png"
import kienatan         from "../assets/bigsslides/kienatan.png"
import kimtran          from "../assets/bigsslides/kimtran.png"
import lancegiang       from "../assets/bigsslides/lancegiang.png"
import lilliangonick    from "../assets/bigsslides/lilliangonick.png"
import madelinemai      from "../assets/bigsslides/madelinemai.png"
import melodypho        from "../assets/bigsslides/melodypho.png"
import mikeychoi        from "../assets/bigsslides/mikeychoi.jpg"
import mythuanhahoang   from "../assets/bigsslides/mythuanhahoang.png"
import nathantran       from "../assets/bigsslides/nathantran.png"
import nicolehatton     from "../assets/bigsslides/nicolehatton.png"
import phile            from "../assets/bigsslides/phile.png"
import prestonpham      from "../assets/bigsslides/prestonpham.png"
import racheltang       from "../assets/bigsslides/racheltang.png"
import rorykien         from "../assets/bigsslides/rorykien.png"
import ryanquach        from "../assets/bigsslides/ryanquach.png"
import sammynguyen      from "../assets/bigsslides/sammynguyen.png"
import selinavuong      from "../assets/bigsslides/selinavuong.png"
import shawnnguyen      from "../assets/bigsslides/shawnnguyen.png"
import sophianguyen     from "../assets/bigsslides/sophianguyen.png"
import stevenhuynh      from "../assets/bigsslides/stevenhuynh.png"
import stevepham        from "../assets/bigsslides/stevepham.png"
import tayshonkim       from "../assets/bigsslides/tayshonkim.png"
import vanessatran      from "../assets/bigsslides/vanessatran.png"
import vincenttran      from "../assets/bigsslides/vincenttran.png"

import andrewandrew     from "../assets/cobigphoto/andrewandrew.jpeg"
import brianaryan       from "../assets/cobigphoto/brianaryan.jpeg"
import dailance         from "../assets/cobigphoto/dailance.jpeg"
import damonamy         from "../assets/cobigphoto/damonamy.jpeg"
import dankatie         from "../assets/cobigphoto/dankatie.jpeg"
import ericmelody       from "../assets/cobigphoto/ericmelody.jpeg"
import ethanjessica     from "../assets/cobigphoto/ethanjessica.jpeg"
import hyunkevin        from "../assets/cobigphoto/hyunkevin.jpeg"
import jacquevanessa    from "../assets/cobigphoto/jacquevanessa.jpeg"
import jennykelly       from "../assets/cobigphoto/jennykelly.jpeg"
import katesophia       from "../assets/cobigphoto/katesophia.jpeg"
import kimashley        from "../assets/cobigphoto/kimashley.jpeg"
import kellyhien        from "../assets/cobigphoto/kellyhien.jpeg"
import madelineanthony  from "../assets/cobigphoto/madelineanthony.jpeg"
import mikeybrianna     from "../assets/cobigphoto/mikeybrianna.jpeg"
import mythuanhoward    from "../assets/cobigphoto/mythuanhoward.jpeg"
import nicolechris      from "../assets/cobigphoto/nicolechris.jpeg"
import phirachel        from "../assets/cobigphoto/phirachel.jpeg"
import prestondaniel    from "../assets/cobigphoto/prestondaniel.jpeg"
import roryjames        from "../assets/cobigphoto/roryjames.jpeg"
import sammyjaclyn      from "../assets/cobigphoto/sammyjaclyn.jpeg"
import selinanathan     from "../assets/cobigphoto/selinanathan.jpeg"
import shawnlillian     from "../assets/cobigphoto/shawnlillian.jpeg"
import steventayshon    from "../assets/cobigphoto/steventayshon.jpeg"
import stevejohn        from "../assets/cobigphoto/stevejohn.jpeg"
import vincentkiena     from "../assets/cobigphoto/vincentkiena.jpeg"

import andrewandrewtitle    from "../assets/famsslides/andrewandrew.png"
import brianaryantitle      from "../assets/famsslides/brianaryan.png"
import dailancetitle        from "../assets/famsslides/dailance.png"
import damonamytitle        from "../assets/famsslides/damonamy.png"
import dankatietitle        from "../assets/famsslides/dankatie.png"
import ericmelodytitle      from "../assets/famsslides/ericmelody.png"
import ethanjessicatitle    from "../assets/famsslides/ethanjessica.png"
import hyunkevintitle       from "../assets/famsslides/hyunkevin.png"
import jacquevanessatitle   from "../assets/famsslides/jacquevanessa.png"
import jennykellytitle      from "../assets/famsslides/jennykelly.png"
import katesophiatitle      from "../assets/famsslides/katesophia.png"
import kimashleytitle       from "../assets/famsslides/kimashley.png"
import kellyhientitle       from "../assets/famsslides/kellyhien.png"
import madelineanthonytitle from "../assets/famsslides/madelineanthony.png"
import mikeybriannatitle    from "../assets/famsslides/mikeybrianna.png"
import mythuanhowardtitle   from "../assets/famsslides/mythuanhoward.png"
import nicolechristitle     from "../assets/famsslides/nicolechris.png"
import phiracheltitle       from "../assets/famsslides/phirachel.png"
import prestondanieltitle   from "../assets/famsslides/prestondaniel.png"
import roryjamestitle       from "../assets/famsslides/roryjames.png"
import sammyjaclyntitle     from "../assets/famsslides/sammyjaclyn.png"
import selinanathantitle    from "../assets/famsslides/selinanathan.png"
import shawnlilliantitle    from "../assets/famsslides/shawnlillian.png"
import steventayshontitle   from "../assets/famsslides/steventayshon.png"
import stevejohntitle       from "../assets/famsslides/stevejohn.png"
import vincentkienatitle from "../assets/famsslides/vincentkiena.png"

import andrewandrewbio from "../assets/bioslides/andrewandrew.png"
import brianaryanbio from "../assets/bioslides/brianaryan.png"
import dailancebio from "../assets/bioslides/dailance.png"
import damonamybio from "../assets/bioslides/damonamy.png"
import dankatiebio from "../assets/bioslides/dankatie.png"
import ericmelodybio from "../assets/bioslides/ericmelody.png"
import ethanjessicabio from "../assets/bioslides/ethanjessica.png"
import hyunkevinbio from "../assets/bioslides/hyunkevin.png"
import jacquevanessabio from "../assets/bioslides/jacquevanessa.png"
import jennykellybio from "../assets/bioslides/jennykelly.png"
import katesophiabio from "../assets/bioslides/katesophia.png"
import kimashleybio from "../assets/bioslides/kimashley.png"
import kellyhienbio from "../assets/bioslides/kellyhien.png"
import madelineanthonybio from "../assets/bioslides/madelineanthony.png"
import mikeybriannabio from "../assets/bioslides/mikeybrianna.png"
import mythuanhowardbio from "../assets/bioslides/mythuanhoward.png"
import nicolechrisbio from "../assets/bioslides/nicolechris.png"
import phirachelbio from "../assets/bioslides/phirachel.png"
import prestondanielbio from "../assets/bioslides/prestondaniel.png"
import roryjamesbio from "../assets/bioslides/roryjames.png"
import sammyjaclynbio from "../assets/bioslides/sammyjaclyn.png"
import selinanathanbio from "../assets/bioslides/selinanathan.png"
import shawnlillianbio from "../assets/bioslides/shawnlillian.png"
import steventayshonbio from "../assets/bioslides/steventayshon.png"
import stevejohnbio from "../assets/bioslides/stevejohn.png"
import vincentkienabio from "../assets/bioslides/vincentkiena.png"

import {
    PageTitle,
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
    [{ title: 'Nước Mắmis', imageUrl: dankatie }],                              // 0
    [{ title: 'Ur Mom', imageUrl: ericmelody }],                                // 1
    [{ title: 'Fur-midable Tigers', imageUrl: madelineanthony }],               // 2
    [{ title: 'The ABBs', imageUrl: sammyjaclyn }],                             // 3
    [{ title: 'The Quachers', imageUrl: brianaryan }],                          // 4
    [{ title: 'Banh Mi Besties', imageUrl: prestondaniel }],                    // 5
    [{ title: 'Phở 1919°', imageUrl: ethanjessica }],                           // 6
    [{ title: 'Bún Riêuzzlers', imageUrl: stevejohn }],                         // 7
    [{ title: 'Something Vietnamese', imageUrl: hyunkevin }],                   // 8
    [{ title: 'Troi Oi-led Up', imageUrl: mikeybrianna }],                      // 9
    [{ title: 'Saigooners', imageUrl: jacquevanessa }],                         // 10
    [{ title: 'Việt Kiều-ties', imageUrl: katesophia }],                        // 11
    [{ title: 'The Phước-ing Farmers', imageUrl: kimashley }],                  // 12
    [{ title: 'Pho Sho', imageUrl: vincentkiena }],                             // 13
    [{ title: 'SlushyNoodz', imageUrl: kellyhien }],                            // 14
    [{ title: 'Du Mamas', imageUrl: dailance }],                                // 15
    [{ title: 'Cà Phê Sữa Đá-ddies', imageUrl: roryjames }],                    // 16
    [{ title: 'Matcha Sunset', imageUrl: nicolechris }],                        // 17
    [{ title: 'Viet-Nom-Noms', imageUrl: shawnlillian }],                       // 18
    [{ title: 'Ham Chơi-ers', imageUrl: damonamy }],                          // 19
    [{ title: 'Da Fein', imageUrl: jennykelly }],                               // 20
    [{ title: 'Phở Lifers', imageUrl: andrewandrew }],                             // 21
    [{ title: 'Upin & Ipin', imageUrl: phirachel }],                            // 22
    [{ title: 'The Big Back-yardigans', imageUrl: selinanathan }],              // 23
    [{ title: 'Phở Bò-llers', imageUrl: steventayshon }],                      // 24
    [{ title: 'Busty Rác', imageUrl: mythuanhoward }],                      // 25
];

const slides = [
    [dankatietitle, dankatiebio, danpham, katiedoan],                   // 0
    [ericmelodytitle, ericmelodybio, ericdien, melodypho],                  // 1
    [madelineanthonytitle, madelineanthonybio, madelinemai, anthonypham],             // 2
    [sammyjaclyntitle, sammyjaclynbio, sammynguyen, jaclynnguyen],            // 3
    [brianaryantitle, brianaryanbio, ryanquach, briananguyen],              // 4
    [prestondanieltitle, prestondanielbio, BgPic, prestonpham],                   // 5
    [ethanjessicatitle, ethanjessicabio, jessicale, ethandao],                  // 6
    [stevejohntitle, stevejohnbio, johnpham, stevepham],                  // 7
    [hyunkevintitle, hyunkevinbio, kevinespinas, hyunkim],                // 8
    [mikeybriannatitle, mikeybriannabio, briannatran, mikeychoi],               // 9
    [jacquevanessatitle, jacquevanessabio, jacquenguyen, vanessatran],            // 10
    [katesophiatitle, katesophiabio, sophianguyen, katedinh],               // 11
    [kimashleytitle, kimashleybio, ashleythai, kimtran],                  // 12
    [vincentkienatitle, vincentkienabio, kienatan, vincenttran],                // 13
    [kellyhientitle, kellyhienbio, kellytran, hiennguyen],                // 14
    [dailancetitle, dailancebio, daile, lancegiang],                    // 15
    [roryjamestitle, roryjamesbio, rorykien, jamespham],                  // 16
    [nicolechristitle, nicolechrisbio, chrisle, nicolehatton],                // 17
    [shawnlilliantitle, shawnlillianbio, lilliangonick, shawnnguyen],           // 18
    [damonamytitle, damonamybio, amyduong, damonle],                    // 19
    [jennykellytitle, jennykellybio, jennytran, kellytang],                 // 20
    [andrewandrewtitle, andrewandrewbio, andrewtang, andrewnguyen],             // 21
    [phiracheltitle, phirachelbio, racheltang, phile],                    // 22
    [selinanathantitle, selinanathanbio, nathantran, selinavuong],              // 23
    [steventayshontitle, steventayshonbio, tayshonkim, stevenhuynh],              // 24
    [mythuanhowardtitle, mythuanhowardbio, howardtrinh, mythuanhahoang],          // 25
];

const videoLink = [
    "https://www.youtube.com/embed/p77uVB_ot4M?si=qL4HxpArhG0w7slY", // 0
    "https://youtube.com/embed/87qWtsn3-Qg", // 1
    "https://www.youtube.com/embed/bgbAyCpw6Q0?si=yD4mvqiAn2Def5BR", // 2
    "https://www.youtube.com/embed/W3DWDm2t6y4?si=1XrCQpGffARRqpYx", // 3
    "https://www.youtube.com/embed/Hn35kVRAxLY?si=AWnnQ-RiLtckq1us", // 4
    "https://www.youtube.com/embed/93Dvc9m1FBA?si=A-ifWDcpcZ4s969g", // 5
    "https://youtube.com/embed/nfK_kXRkNvs", // 6
    "https://www.youtube.com/embed/2gPNpFS5IzQ?si=jfVwvebjm4sw2ZVP", // 7
    "https://www.youtube.com/embed/71YAJ5vdzg4?si=DWu9m84TTIVpE7fe", // 8
    "https://www.youtube.com/embed/TYyvL-BtInk?si=4fJlZYCKtEXn6-so", // 9
    "https://www.youtube.com/embed/7wyLGxFnPQE?si=wGnJ4-4Psefuu6c7", // 10
    "https://youtube.com/embed/BtjGav1QhZE?feature=share", // 11
    "https://www.youtube.com/embed/Mjiww2LVN_4?si=5IWtuwmdZdXu_JVc", // 12
    "https://www.youtube.com/embed/Ctk4x1gL2OA", // 13
    "https://www.youtube.com/embed/MD-qVXRe8nQ?si=gWHyRw0iBaFU37-l", // 14
    "https://www.youtube.com/embed/Q2uafP2Qy5w?si=S3LCNcqmfrCq9pV4", // 15
    "https://www.youtube.com/embed/_qpMVFuYAig?si=bYgFUI1MizMOBFIq", // 16
    "https://www.youtube.com/embed/CVXB1F9jg1g", // 17
    "https://www.youtube.com/embed/UY6KOC9oAuA?si=4TU6IntOsp8MUNB3", // 18
    "https://www.youtube.com/embed/vkfcvDsqcdA?si=Lhw275ApnJtjLvJz", // 19
    "https://www.youtube.com/embed/BFi9couPkJU", // 20
    "https://www.youtube.com/embed/NS7S_DfFxuY?si=LJJDf_lKZ4EOWnfC", // 21
    "https://www.youtube.com/embed/O6ElgWyeads?si=WV2l4QzdDoRD2LLC", // 22
    "https://www.youtube.com/embed/l_iv-eCkSLA", // 23
    "https://www.youtube.com/embed/2v2f9ZYHBVQ?si=FNpzRx3uui_CO5hG", // 24
    "https://www.youtube.com/embed/4cIGLJZ59vI?si=guaGXdhIKHxXt5hV", // 25
]

// <iframe width="560" height="315" src="https://www.youtube.com/embed/_qpMVFuYAig?si=bYgFUI1MizMOBFIq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        Introducing our 2024–2025 VSU Bigs! Click on any of the Fam Profiles below to learn more about each of the fams and the bigs! This page is better viewed on a personal computer or a horizontal phone screen.
                    </PageText>
                    <DropdownMenuWrapper ref={dropdownRef}>

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[20]} onButtonClick={() => toggleDropdown(20)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 20} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[20]} videoLink={videoLink[20]} />
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
                            <StylizedButton buttons={buttons[23]} onButtonClick={() => toggleDropdown(23)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 23} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[23]} videoLink={videoLink[23]} />
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
                            <StylizedButton buttons={buttons[7]} onButtonClick={() => toggleDropdown(7)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 7} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[7]} videoLink={videoLink[7]} />
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
                            <StylizedButton buttons={buttons[16]} onButtonClick={() => toggleDropdown(16)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 16} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[16]} videoLink={videoLink[16]} />
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
                            <StylizedButton buttons={buttons[0]} onButtonClick={() => toggleDropdown(0)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 0} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[0]} videoLink={videoLink[0]}/>
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
                            <StylizedButton buttons={buttons[4]} onButtonClick={() => toggleDropdown(4)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 4} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[4]} videoLink={videoLink[4]} />
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
                            <StylizedButton buttons={buttons[3]} onButtonClick={() => toggleDropdown(3)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 3} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[3]} videoLink={videoLink[3]} />
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
                            <StylizedButton buttons={buttons[10]} onButtonClick={() => toggleDropdown(10)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 10} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[10]} videoLink={videoLink[10]} />
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
                            <StylizedButton buttons={buttons[22]} onButtonClick={() => toggleDropdown(22)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 22} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[22]} videoLink={videoLink[22]} />
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
                            <StylizedButton buttons={buttons[13]} onButtonClick={() => toggleDropdown(13)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 13} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[13]} videoLink={videoLink[13]} />
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
                            <StylizedButton buttons={buttons[12]} onButtonClick={() => toggleDropdown(12)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 12} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[12]} videoLink={videoLink[12]} />
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

                        <DropdownMenu>
                            <StylizedButton buttons={buttons[24]} onButtonClick={() => toggleDropdown(24)}
                            />
                            <DropdownContent isOpen={openDropdownIndex === 24} style={{ width: '70vw' }}>
                                <CloseButton onClick={closeDropdown}>&times;</CloseButton>
                                <DropdownSlide slides={slides[24]} videoLink={videoLink[24]} />
                            </DropdownContent>
                        </DropdownMenu>
                    </DropdownMenuWrapper>
                </PageContent>
                <Footer />
            </PageWrapper>
        </>
    );
}
