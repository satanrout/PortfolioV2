import React, { Suspense, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import Post from './Post';
import ProgressiveImage from 'components/ProgressiveImage';
import posts from 'posts';

function PostListItem({
  path,
  title,
  description,
  banner,
  bannerVideo,
  bannerPlaceholder,
  bannerAlt,
  date,
}) {
  return (
    <PostListItemWrapper>
      <PostContent to={`/articles${path}`}>
        <PostImageWrapper>
          <PostImage
            srcSet={banner ? require(`posts/assets/${banner}`) : undefined}
            videoSrc={bannerVideo ? require(`posts/assets/${bannerVideo}`) : undefined}
            placeholder={require(`posts/assets/${bannerPlaceholder}`)}
            alt={bannerAlt}
          />
          <PostImageTag>K256</PostImageTag>
        </PostImageWrapper>
        <PostText>
          <PostDate>
            {new Date(date).toLocaleDateString('default', {
              year: 'numeric',
              month: 'long',
            })}
          </PostDate>
          <PostTitle>{title}</PostTitle>
          <PostDescription>{description}</PostDescription>
        </PostText>
      </PostContent>
    </PostListItemWrapper>
  );
}

function PostList() {
  useScrollRestore();

  return (
    <PostListWrapper>
      <Helmet>
        <title>{`Articles | Ritesh Bucha`}</title>
        <meta
          name="description"
          content="A collection of technical design and development articles."
        />
      </Helmet>
      <PostListContent>
        <PostTitleWrapper>
          <PostListTitle>Articles</PostListTitle>
        </PostTitleWrapper>
        <Text>This Page is Under Progess :) Please check back later :)</Text>
        <PostListColumn>
          {posts?.map(({ path, ...post }) => (
            <PostListItem key={path} path={path} {...post} />
          ))}
        </PostListColumn>
      </PostListContent>
    </PostListWrapper>
  );
}

function Articles() {
  return (
    <Post>
      <Suspense fallback={Fragment}>
        <Switch>
          {posts.map(({ content: PostComp, path, ...rest }) => (
            <Route
              key={path}
              path={`/articles${path}`}
              render={() => <PostComp {...rest} />}
            />
          ))}
          <Route component={PostList} />
        </Switch>
      </Suspense>
    </Post>
  );
}

export default Articles;

const Text = styled.div`
    font-size: 10px;
    text-align: center;
    margin: 3em 0;
`;

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostListContent = styled.div`
  max-width: var(--maxWidthL);
  width: 100%;
  grid-template-columns: 144px 1fr;
  grid-gap: 20px;
  padding: 80px 0;
  position: relative;

  @media (max-width: ${media.mobile}px) {
    padding-top: 100px;
  }
`;

const PostListItemWrapper = styled.article`
  display: flex;
  margin-right: 15%;
  justify-content: center;
`;

const PostTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PostListColumn = styled.div`
  display: grid;
  grid-template-columns: inherit;
  grid-gap:60px 450px ;
  padding: 40px 0;

  @media (max-width: ${media.tablet}px) {
    grid-template-columns: 100%;
    grid-gap:60px;
  }
`;

const PostListTitle = styled.h1`
  font-size: 120px;
  margin: 0;
  position: relative;
  opacity: 10%;
  margin-left:30%;

  @media (max-width: ${media.tablet}px) {
    font-size: 90px;
    grid-template-columns: 100%;
    max-width: 440px;
  }

  @media (max-width: ${media.mobile}px) {
    font-size: 60px;
  }


`;

const PostContent = styled(Link)`
  width: 60%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 0 40px;
  text-decoration: none;
  transition: background-color var(--durationM) ease;

  @media (max-width: ${media.tablet}px) {
    grid-template-columns: 100%;
    max-width: 440px;
  }

  @media (max-width: ${media.mobile}px) {
    grid-template-columns: 70%;
    grid-template-rows: 70%;
  }
`;

const PostText = styled.div`
  grid-column: 2;
  padding: 20px 0;
  width: 250px;
  @media (max-width: ${media.tablet}px) {
    padding: 20px 0;
    width: 150px;
  }
  @media (max-width: ${media.mobile}px) {
    padding: 20px 0;
  }
`;

const PostDate = styled.span`
  display: block;
  margin-bottom: 8px;
  color: var(--colorTextLight);
`;

const PostTitle = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: var(--fontWeightMedium);
  line-height: 1.2;
  color: var(--colorTextTitle);
  display: inline;
  background: linear-gradient(var(--colorTextBody), var(--colorTextBody)) no-repeat 100% 100% / 0 2px;
  transition: background-size var(--durationM) var(--bezierFastoutSlowin);
  padding-bottom: 2px;

  &:hover,
  &:focus {
    background: linear-gradient(var(--colorTextBody), var(--colorTextBody)) no-repeat 0 100% / 100% 2px;
  }

  @media (max-width: ${media.mobile}px) {
    font-size: 20px;
  }
`;

const PostDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: var(--colorTextBody);
  margin: 20px 0 0;

  @media (max-width: ${media.mobile}px) {
    font-size: 18px;
  }
`;

const PostImage = styled(ProgressiveImage)`
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 70% calc(100% - 14px), calc(70% - 60px) calc(100% - 14px), calc(70% - 60px) 100%, 28px 100%, 0 calc(100% - 28px));

  img,
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 0.5s var(--bezierFastoutSlowin);
  }

  ${/* sc-selector */ PostContent}:hover & img,
  ${/* sc-selector */ PostContent}:hover & video {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const PostImageWrapper = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
`;

const PostImageTag = styled.div`
  position: absolute;
  bottom: -10px;
  left: calc(70% - 60px);
  padding: 0 10px;
  text-align: center;
  width: 60px;
  font-size: 14px;
  font-weight: var(--fontWeightMedium);
  color: var(--colorTextLight);
`;
