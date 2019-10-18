import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title, {SubTitle} from 'components/title';
import {graphql} from 'gatsby';
import Footer from '../components/footer/footer';
import 'global.css.js'
import PrimaryButton, {FluidPrimaryButton} from '../components/button/primaryButton';
import woman from '../images/server-woman.png';

import {HomepageBox} from '../components/box/box';
import {Link} from "@reach/router";
import ContentBox from "../components/content/content";

const Index = ({ data }) => {

  // useEffect(() => {
  //   // Your web app's Firebase configuration
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyBba5aNAnaerx45zuBxQakdcBbc3fjMEnA",
  //     authDomain: "retroshift-1518726491700.firebaseapp.com",
  //     databaseURL: "https://retroshift-1518726491700.firebaseio.com",
  //     projectId: "retroshift-1518726491700",
  //     storageBucket: "retroshift-1518726491700.appspot.com",
  //     messagingSenderId: "949356293942",
  //     appId: "1:949356293942:web:8731126565a79380cc4d97"
  //   };
  //   // Initialize Firebase
  //   window.firebase.initializeApp(firebaseConfig);
  // });

  return <div>
    <Layout>
      <HomepageBox>
        <div className={`title_parent`}>
          <div>
            <Title as="h2" size="large">
              Hey there, I'm Bradley.
            </Title>
          </div>
          <SubTitle>
            I love to write, tell captivating stories and
            tell terrible jokes. Have a look around and don't be afraid to say hi if you like
            any of my posts.
          </SubTitle>
          <div style={{marginTop: "2rem"}}>
            <SubTitle>
              You're probably here looking for my blog, so have fun!
            </SubTitle>
            <Link to={"/blog"}>
              <FluidPrimaryButton>
                GO TO BLOG
              </FluidPrimaryButton>
            </Link>
          </div>
        </div>

        <img style={{maxWidth: "800px"}} src={woman} alt={"woman"}/>

        {/* <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal> */}
      </HomepageBox>

      <div style={{ marginBottom: "200px", padding: "3rem 0" }}>
        <h2 style={{ color: "#004196", margin: "2rem 0" }}>What I Write About</h2>
        <ContentBox>

          <div>
            <h3>First Experiences</h3>
            <p>
              This is a general series about basically every first experience I've had with various topics, people or experiences,
              at least as far as I can remember.
            </p>
          </div>
          <div>
            <h3>Mental Health</h3>
            <p>
              The mental health posts are a lot more specific in their target audience - people that have been through depression
              like me or anyone that just wants a resource for learning about it.
            </p>
          </div>
          <div>
            <h3>Interesting People</h3>
            <p>
              I believe that almost every person I meet is interesting in one way or another. I feel the need to write about the
              more interesting experiences I've had with people who <em>really</em> stand out, often for reasons that could be boring
              to some people.
            </p>
          </div>
          <div>
            <h3>TIL</h3>
            <p>
              I learn a lot of stuff * everyday, so why not share it with the world?
            </p>
            <small>* Does not include more boring things like work stuff.</small>
          </div>
          <div>
            <h3>Masculinity/Manliness</h3>
            <p>
              General thoughts about how masculinity can be defined, by whom and why its important.
            </p>
          </div>

        </ContentBox>
        <div style={{ textAlign: "center" }}>
          <PrimaryButton>
            View all Categories
          </PrimaryButton>
        </div>
      </div>
    </Layout>

    <Footer></Footer>
    {/* <IOExample /> */}
  </div>;
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    file(relativePath: { eq: "images/gallery/flame-welcome.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid (quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
    }
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      
      gallery {
        title
        copy
        tag
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
