import React from "react";

import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { PageTitle, PageWrapper, PageContent } from "../components/Page/Page";
import PhotoGallery from "react-photo-gallery";
import { photos } from "../assets/data";

export default function Gallery() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <PageContent>
          <PageTitle>Gallery</PageTitle>
          <PhotoGallery photos={photos} />
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
}
