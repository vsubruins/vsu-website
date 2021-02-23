import React from "react";

// ATTENTION!!
//
// UPDATE EVERY YEAR WITH NEW BOARD PICTURES
//
import adela from "./staff/adela.jpg";
import jason from "./staff/jason.jpg";
import sela from "./staff/sela.jpg";
import tiffany from "./staff/tiffany.jpg";
import joanne from "./staff/joanne.jpeg";
import jessica from "./staff/jessica.jpg";
import henry from "./staff/henry.jpg";
import christina from "./staff/christina.jpeg";
import kristi from "./staff/kristi.jpg";
import kelly from "./staff/kelly.jpg";
import michelle from "./staff/michelle.jpeg";
import viviando from "./staff/viviando.jpeg";
import viviannguyen from "./staff/viviannguyen.jpg";
import jimmy from "./staff/jimmy.jpeg";
import jamie from "./staff/jamie.jpeg";
import cindy from "./staff/cindy.jpeg";
export var staffMembers = [
  {
    role: "President",
    name: "Jason Vu",
    picture: jason,
  },
  {
    role: "Internal Vice President",
    name: "Vivian Do",
    picture: viviando,
  },
  {
    role: "External Vice President",
    name: "Kristi Mai",
    picture: kristi,
  },
  {
    role: "Administrative Coordinator",
    name: "Henry Trinh",
    picture: henry,
  },
  {
    role: "Fiscal Coordinator",
    name: "Joanne Luong",
    picture: joanne,
  },
  {
    role: "Retention Coordinator",
    name: "Michelle Tran",
    picture: michelle,
  },
  {
    role: "Outreach Coordinator",
    name: "Jessica Nguyen",
    picture: jessica,
  },
  {
    role: "Social Affairs Coordinator",
    name: "Sela Tran",
    picture: sela,
  },
  {
    role: "Activities Coordinator",
    name: "Tiffany Dong",
    picture: tiffany,
  },
  {
    role: "Community Advocacy Coordinator",
    name: "Kelly Nguyen",
    picture: kelly,
  },
  {
    role: "Political Advocacy Coordinator",
    name: "Jamie Vu",
    picture: jamie,
  },
  {
    role: "Education Coordinator",
    name: "Cindy Nguyen",
    picture: cindy,
  },
  {
    role: "Culture Coordinator",
    name: "Christina Kieu",
    picture: christina,
  },
  {
    role: "Inter-Collegiate Council Representative",
    name: "Adela Tran",
    picture: adela,
  },
  {
    role: "Public Relations Coordinator",
    name: "Vivian Nguyen",
    picture: viviannguyen,
  },
  {
    role: "Public Relations Coordinator",
    name: "Jimmy Tran",
    picture: jimmy,
  },
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
