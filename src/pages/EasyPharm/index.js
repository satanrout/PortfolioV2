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
        <ProjectSection>
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
        <ProjectSection light>
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
        {/*}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
              <ProjectSectionText>
                Our API gave developers complete control of their tools, but our interface lacked this flexibility with customization limited to each tool.
              </ProjectSectionText>
              <ProjectSectionText>
                With the release of DevTech Tools Pipelines, tools combine into one with custom triggers, events, and other actions.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProgressiveImage
              srcSet={`${dttPipeline} 800w, ${dttPipelineLarge} 1440w`}
              placeholder={dttPipelinePlaceholder}
              alt="A screenshot of tools linked in the pipeline flowchart editor."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        */}
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
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default EasyPharm;
