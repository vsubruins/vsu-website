//import React from "react";

// ATTENTION!!
//
// UPDATE EVERY YEAR WITH NEW BOARD PICTURES
//
import ashley from "./staff/ashley.jpg";
import tyler from "./staff/tyler.jpg";
import mel from "./staff/mel.jpg";
import alvin from "./staff/alvin.jpg";
import vanessa from "./staff/vanessa.jpg";
import ethan from "./staff/ethan.jpg";
import ryan from "./staff/ryan.png";
import anh from "./staff/anh.jpg";
import mikey from "./staff/mikey.jpg";
import sydney from "./staff/sydney.jpg";
import khiem from "./staff/khiem.jpg";
import carmela from "./staff/carmela.jpg";
import tracy from "./staff/tracy.jpg";
import karen from "./staff/karen.jpg";

export var staffMembers = [
  {
    role: "President",
    name: "Ashley Cao",
    picture: ashley,
  },
  {
    role: "Internal Vice President",
    name: "Tyler Tu",
    picture: tyler,
  },
  {
    role: "External Vice President",
    name: "Mel Trinh",
    picture: mel,
  },
  {
    role: "Administrative Coordinator",
    name: "Alvin Luu",
    picture: alvin,
  },
  {
    role: "Fiscal Coordinator",
    name: "Vanessa Tran",
    picture: vanessa,
  },
  {
    role: "Retention Coordinator",
    name: "Ethan Mai",
    picture: ethan,
  },
  {
    role: "Outreach Coordinator",
    name: "Ryan Khiev",
    picture: ryan,
  },
  {
    role: "Social Affairs Coordinator",
    name: "Anh Trinh",
    picture: anh,
  },
  {
    role: "Activities Coordinator",
    name: "Mikey Choi",
    picture: mikey,
  },
  {
    role: "Community Advocacy Coordinator",
    name: "Sydney Trieu",
    picture: sydney,
  },
  {
    role: "Political Advocacy Coordinator",
    name: "Khiem Le",
    picture: khiem,
  },
  {
    role: "Education Coordinator",
    name: "Carmela Navata",
    picture: carmela,
  },
  {
    role: "Culture Coordinator",
    name: "Tracy Tran",
    picture: tracy,
  },
  {
    role: "Public Relations Coordinator",
    name: "Karen Nguyen",
    picture: karen,
  }
];


// PHOTOS FOR GALLERY
var photos = [];
for (let i = 0; i <= 9; i++) {
  photos.push(`/gallery/${i}.png`);
}
for (let i = 10; i <= 15; i++) {
  photos.push(`/gallery/${i}.jpg`);
}
export default photos;