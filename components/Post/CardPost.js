import React, { useState, useEffect } from 'react';
import {
  Card,
  Image,
  Divider,
  Segment,
  Icon,
  Button,
  Popup,
  Header,
  Modal,
} from 'semantic-ui-react';
import PostComments from './PostComments';
import CommentInputField from './CommentInputField';
import Link from 'next/link';

function CardPost({ post, user, setPosts, setShowToastr }) {
  return (
    <>
      <Segment>
        <Card color="teal" fluid>
          {post.picUrl && (
            <Image
              src={post.picUrl}
              style={{ cursor: 'pointer' }}
              floated="left"
              wrapped
              ui={false}
              alt="PostImage"
            />
          )}

          <Card.Content>
            <Image
              floated="left"
              src={post.user.profilePicUrl}
              avatar
              circular
            />

            {(user.role === 'root' || post.user._id === user._id) && (
              <>
                <Popup
                  on="click"
                  position="top-right"
                  trigger={
                    <Image
                      src="/deleteIcon.svg"
                      style={{ cursor: 'pointer' }}
                      size="mini"
                      floated="right"
                    />
                  }
                >
                  <Header as="h4" content="Are you sure?" />
                  <p>This action is irreversible!</p>

                  <Button color="red" icon="trash" content="Delete" />
                </Popup>
              </>
            )}
          </Card.Content>
        </Card>
      </Segment>
    </>
  );
}

export default CardPost;
CardPost;
