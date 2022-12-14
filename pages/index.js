import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
import baseUrl from '../utils/baseUrl';
import CreatePost from '../components/Post/CreatePost';
import CardPost from '../components/Post/CardPost';
import { parseCookies } from 'nookies';
import { NoPosts } from '../components/Layout/NoData';

const index = ({ user, postsData, errorLoading }) => {
  const [posts, setPosts] = useState(postsData);
  const [showToastr, setShowToastr] = useState(false);

  useEffect(() => {
    document.title = `Welcome, ${user.name.split(' ')[0]}`;
  }, []);

  if (posts.length === 0 || errorLoading) return <NoPosts />;

  return (
    <>
      <Segment>
        <CreatePost user={user} setPosts={setPosts} />

        {posts.map((post) => (
          <CardPost
            key={post._id}
            post={post}
            user={user}
            setPosts={setPosts}
            setShowToastr={setShowToastr}
          />
        ))}
      </Segment>
    </>
  );
};

index.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/posts`, {
      headers: { Authorization: token },
    });

    return { postsData: res.data };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default index;
