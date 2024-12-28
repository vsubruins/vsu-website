import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Feed from './Feed'; // Ensure Feed component is imported
import styled from 'styled-components';

// Define the types for the Instagram feed data
interface InstagramFeedData {
    id: string;
    media_type: 'IMAGE' | 'VIDEO';
    media_url: string;
    permalink: string;
    caption: string;
    timestamp: string;
}

interface InstaFeedProps {
    token: string;
    limit: number;
}

// Define styled components
const IGWrapper = styled.div`
  display: grid;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 50px;
  gap: 40px;

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1275px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InstaFeed: React.FC<InstaFeedProps> = ({ token, limit }) => {
    const [feed, setFeedData] = useState<InstagramFeedData[]>([]); // Typing the feed state

    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchInstagram() {
            try {
                const resp = await axios.get(
                    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&limit=${limit}&access_token=${token}`
                );
                setFeedData(resp.data.data);
            } catch (err) {
                console.log('error', err);
            }
        }

        fetchInstagram();

        return () => {
            abortController.abort();
        };
    }, [limit, token]);

    return (
        <>
            <IGWrapper>
                {feed.map((feedItem: InstagramFeedData) => ( // Added explicit type for feedItem
                    <Feed key={feedItem.id} feed={feedItem} />
                ))}
            </IGWrapper>
        </>
    );
};

export default InstaFeed;
