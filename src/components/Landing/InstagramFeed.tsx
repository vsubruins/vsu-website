import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Feed from './Feed';
import styled from 'styled-components';

const IGWrapper = styled("div")`
  display: grid;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 50px;
  gap: 40px;

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr)
  }

  @media (min-width: 1275px) {
    grid-template-columns: repeat(3, 1fr)
  }
`;

const InstaFeed = ({token, ...props}) => {

    const [feed, setFeedData] = useState([]);

    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect (() => {
        //to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagram () {
            try{
                axios
                    .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&limit=${props.limit}&access_token=${token}`)
                    .then((resp) => {
                        setFeedData(resp.data.data)
                    })
            } catch (err) {
                console.log('error', err)
            } 
        }

        //manually call fetch function
        fetchInstagram();

        return () => {
            //cancel pending fetch request on component unmount
            abortController.abort();
        };
    }, [props.limit])

    return (
        <>
            <IGWrapper>
            {feed.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
            </IGWrapper>
        </>
    )

}

export default InstaFeed;