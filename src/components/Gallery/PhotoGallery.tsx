import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";

export default function PhotoGallery({
    photos /* an array of urls (ex. [{url:'foo.com/bar.jpg'}, {url:'foo.com/bar.jpg'}]  )*/
}) {

  const [images, setImages] = useState([]);    
  
  const aspectRatio = (height, width) => {
    if (height > width) {
        return { width: 1, height: height / width }
    } else {
        return { height: 1, width: width / height }
    }
  }
  
  /* when photos is passed into the component run the function and update the state */
  useEffect(() => {
    async function loadImages(imageUrlArray) {
        const promiseArray = []; // create an array for promises
        const imageArray = []; // array for the images

        for (let imageUrl of imageUrlArray) {

            promiseArray.push(new Promise<void>(resolve => {

                const img = new Image();
                // if you don't need to do anything when the image loads,
                // then you can just write img.onload = resolve;
                img.src = imageUrl;

                img.onload = function() {
                    // do stuff with the image if necessary
                    let aspect = aspectRatio(img.height, img.width)
                    imageArray.push({
                        src: img.src,
                        width: aspect.width,
                        height: aspect.height
                    });
                    // resolve the promise, indicating that the image has been loaded
                    resolve();
                };
            }));
        }

        await Promise.all(promiseArray); // wait for all the images to be loaded
        return imageArray;
    };

    if (photos.length > 0) {
      loadImages(photos).then(images => {setImages(images)});
    }
  }, [photos]);

  return (
    <div style={{padding:'25px'}}>
       <Gallery photos={images}/>
    </div>
  );
}