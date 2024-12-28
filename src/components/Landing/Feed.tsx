import React from 'react';
import styled from 'styled-components';

// Define types for the feed object
interface FeedItem {
    id: string;
    media_type: 'IMAGE' | 'VIDEO'; // You can add other media types if necessary
    media_url: string;
    permalink: string;
    caption: string;
    timestamp: string;
}

interface FeedProps {
    feed: FeedItem; // FeedProps contains a single feed object
}

const IGInfo = styled('div')`
  background: var(--lightyellow);
  width: 372px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  height: 140px;
  display: flex;
  flex-direction: column;
`;

const IGPost = styled('div')`
  background: var(--lightyellow);
  aspect-ratio: 1/1;
  width: 350px;
  align-items: center;
  padding: 3%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const Feed: React.FC<FeedProps> = ({ feed }) => {
    const { id, media_type, media_url, permalink, caption, timestamp } = feed;
    let post;

    const date =
        (timestamp[5] === '0' ? timestamp[6] : timestamp.slice(5, 7)) +
        '/' +
        (timestamp[8] === '0' ? timestamp[9] : timestamp.slice(8, 10)) +
        '/' +
        timestamp.slice(0, 4);

    switch (media_type) {
        case 'VIDEO':
            post = (
                <Video id={id} controls playsInline>
                    <source src={media_url} type="video/mp4" />
                </Video>
            );
            break;
        default:
            post = <Img id={id} src={media_url} />;
    }

    return (
        <div>
            <IGPost>
                <a href={permalink} target="_blank" rel="noreferrer">
                    {post}
                </a>
            </IGPost>
            <IGInfo>
                <span style={{ fontSize: '15px', marginBottom: '0' }}>
                    <b>{date + ' '}</b>
                    {caption.slice(0, 175).concat(caption.length >= 175 ? '...' : '')}
                </span>
            </IGInfo>
        </div>
    );
};

export default Feed;
