import React from "react";

// ATTENTION!!
//
// UPDATE EVERY YEAR WITH NEW BOARD PICTURES
//
import annie from "./staff/annie.jpg";
import ashley from "./staff/ashley.jpg";
import brandon from "./staff/brandon.jpg";
import caroline from "./staff/caroline.jpg";
import deena from "./staff/deena.jpg";
import eric from "./staff/eric.jpg";
import gena from "./staff/gena.jpg";
import kaitlyn from "./staff/kaitlyn.jpg";
import michelleN from "./staff/michelleN.jpg";
import michelleP from "./staff/michelleP.jpg";
import tiffany from "./staff/tiffany.jpg";
import vy from "./staff/vy.jpg";
import jamie from "./staff/jamie.jpeg";
import cindy from "./staff/cindy.jpg";
export var staffMembers = [
  {
    role: "President",
    name: "Cindy Nguyen",
    picture: cindy,
  },
  {
    role: "Internal Vice President",
    name: "Tiffany Dong",
    picture: tiffany,
  },
  {
    role: "External Vice President",
    name: "Eric Ngo",
    picture: eric,
  },
  {
    role: "Administrative Coordinator",
    name: "Caroline Huynh",
    picture: caroline,
  },
  {
    role: "Fiscal Coordinator",
    name: "Jamie Vu",
    picture: jamie,
  },
  {
    role: "Retention Coordinator",
    name: "Annie Pham",
    picture: annie,
  },
  {
    role: "Outreach Coordinator",
    name: "Kaitlyn Vu",
    picture: kaitlyn,
  },
  {
    role: "Social Affairs Coordinator",
    name: "Michelle Pham",
    picture: michelleP,
  },
  {
    role: "Activities Coordinator",
    name: "Ashley Cao",
    picture: ashley,
  },
  {
    role: "Community Advocacy Coordinator",
    name: "Michelle Nguyen",
    picture: michelleN,
  },
  {
    role: "Political Advocacy Coordinator",
    name: "Brandon Le",
    picture: brandon,
  },
  {
    role: "Education Coordinator",
    name: "Vy Diep",
    picture: vy,
  },
  {
    role: "Culture Coordinator",
    name: "Gena Huynh",
    picture: gena,
  },
  {
    role: "Public Relations Coordinator",
    name: "Deena Doan",
    picture: deena,
  },
  // {
  //   role: "Inter-Collegiate Council Representative",
  //   name: "Adela Tran",
  //   picture: adela,
  // },
];

// PHOTOS FOR GALLERY
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./gallery", false, /\.(png|jpe?g|svg|JPG)$/)
);

export var photos = images.map((pic) => {
  // var width = Math.max(1, Math.round(Math.random() * 4));
  // var height = Math.max(1, Math.round(Math.random() * width));
  return { src: pic, width: 3, height: 2 };
});
