import React from 'react';
import distanceInWords from 'date-fns/distance_in_words';

const Post = ({
    body,
    createdAt,
    id,
    parentId,
    replyCount,
    title,
    updatedAt,
    userId,
}) => (
    <article style={{
        backgroundColor: 'white',
        padding: 10,
        margin: '10px auto',
        borderRadius: 4,
        textAlign: 'center',
        maxWidth: 500,
    }}>
        <header style={{
            color: 'black',
            fontWeight: 600,
        }}>{title}</header>
        <p style={{ opacity: 0.6 }}>{body}</p>
        <aside style={{
            display: 'flex',
            justifyContent: 'space-around',
            opacity: 0.4
        }}>
            <p>created {distanceInWords(new Date(), new Date(createdAt), { includeSeconds: true, addSuffix: true })}</p>
            <p>{replyCount} replies</p>
        </aside>
    </article>
);

export default Post;