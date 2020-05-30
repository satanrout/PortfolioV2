import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import ProgressiveImage from 'components/ProgressiveImage';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection,
  ProjectSectionContent, ProjectImage, ProjectSectionHeading, ProjectSectionText,
  ProjectSectionColumns, SidebarImageText, SidebarImage, ProjectTextRow
} from 'components/ProjectLayout';
import { useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import easyBackground from 'assets/easy-background.png';
import easyBackgroundLarge from 'assets/easy-background-large.png';
import easyBackgroundPlaceholder from 'assets/easy-background-placeholder.png';
import easy from 'assets/easy.png';
import easyLarge from 'assets/easy-large.png';
import easyPlaceholder from 'assets/easy-placeholder.png';
import easyBranding from 'assets/easy-branding.png';
import easyBrandingLarge from 'assets/easy-branding-large.png';
import easyBrandingPlaceholder from 'assets/dtt-branding-placeholder.png';
import easyLanding from 'assets/easy-landing.png';
import easyLandingLarge from 'assets/easy-landing-large.png';
import easyLandingPlaceholder from 'assets/easy-landing-placeholder.png';
import VueJs from 'assets/VueJs.png';
import VueJsLarge from 'assets/VueJs-Large.png';
import VueJsPlaceholder from 'assets/VueJs-placeholder.png';
import Firebase from 'assets/Firebase.png';
import FirebaseLarge from 'assets/Firebase-Large.png';
import FirebasePlaceholder from 'assets/Firebase-placeholder.png';
import deb from 'assets/deb.png';
import bucha from 'assets/bucha.png';

const title = 'EasyPharm';
const description = 'I lead the design and development of Easypharm. This project involved designing a hub to connect a Pharmacy Store to Customes during Covid-19.';
const roles = [
  'Full-stack Development',
  'UX and UI Design',
  'Testing',
  'Team Lead',
];

function EasyPharm() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet
        title={`Projects | ${title}`}
        meta={[{ name: 'description', content: description }]}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${easyBackground} 1000w, ${easyBackgroundLarge} 1920w`}
          placeholder={easyBackgroundPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://easypharm.web.app"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage>
              <ProgressiveImage
                reveal
                srcSet={`${easy} 800w, ${easyLarge} 1440w`}
                placeholder={easyPlaceholder}
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                alt="Landing screen of the EasyPharm website."
              />
            </ProjectImage>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns>
            <SidebarImageText>
              <ProjectSectionHeading>Visual Identity</ProjectSectionHeading>
              <ProjectSectionText>
              We started out laying the foundations of EasyPharm's brand. Subtle, classy colors, an elegant typeface.
              </ProjectSectionText>
            </SidebarImageText>
            <SidebarImage
              srcSet={`${easyBranding} 400w, ${easyBrandingLarge} 898w`}
              placeholder={easyBrandingPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The EasyPharm color palette and logo, featuring pipelines as electronic traces."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow noMargin>
              <ProjectSectionHeading>The Mission</ProjectSectionHeading>
              <ProjectSectionText>
                EasyPharm started as a small Pharmacy website that was just an regular OldFashioned website.
              </ProjectSectionText>
              <ProjectSectionText>
                Our mission was to create a WebApp which could be used in any device, as a website, as an App, on any platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
        <ProjectSectionContent>
            <ProjectTextRow noMargin>
              <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            </ProjectTextRow>
          </ProjectSectionContent>
          <ProjectSectionColumns>
          <SidebarImage
              srcSet={`${VueJs} 400w, ${VueJsLarge} 898w`}
              placeholder={VueJsPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The EasyPharm color palette and logo, featuring pipelines as electronic traces."
            />
            <SidebarImage
              srcSet={`${Firebase} 400w, ${FirebaseLarge} 898w`}
              placeholder={FirebasePlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The EasyPharm color palette and logo, featuring pipelines as electronic traces."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Going Online</ProjectSectionHeading>
              <ProjectSectionText>
                We needed a place for EasyPharm and its users to call home.
              </ProjectSectionText>
              <ProjectSectionText>
                We designed and developed the EasyPharm website, which has an Interactive UI, and a web application to put everything together.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProgressiveImage
              srcSet={`${easyLanding} 800w, ${easyLandingLarge} 1440w`}
              placeholder={easyLandingPlaceholder}
              alt="A screenshot of the landing page in production."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/*}
        <ProjectSection light>
        <ProjectSectionContent>
            <ProjectTextRow noMargin>
              <ProjectSectionHeading>Our Team</ProjectSectionHeading>
            </ProjectTextRow>
          </ProjectSectionContent>
          <ProjectSectionColumns>
          <SidebarImage
              srcSet={`${VueJs} 400w, ${deb} 898w`}
              placeholder={VueJsPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The EasyPharm color palette and logo, featuring pipelines as electronic traces."
              url="#"
           />
            <SidebarImage
              srcSet={`${Firebase} 400w, ${bucha} 898w`}
              placeholder={FirebasePlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The EasyPharm color palette and logo, featuring pipelines as electronic traces."
            />
          </ProjectSectionColumns>
        </ProjectSection>
  */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default EasyPharm;
