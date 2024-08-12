import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'An engineering documentation',
    Svg: require('@site/static/img/undraw_factory_dy-0-a.svg').default,
    description: (
      <>
        A technical document example created for an engineering company, providing an overview of a measuring device along with the accompanying software.
        <div style={{ marginTop: '20px' }}>
        <a
          href="https://privaterelay-team-pqs6215g.atlassian.net/wiki/external/NDk2ZGJmMTJhYTQ3NGQyOWFjM2FjZTljMjg4MmNlMGQ"
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Recommended for security reasons
          style={{
            backgroundColor: '#6C63FF',
            border: 'none',
            color: 'white',
            width: '170px', 
            height: '45px', 
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '20px',
          }}
        >
          
          Learn More
          
          <img
            src={require('@site/static/img/confluence-svgrepo-com.png').default}
            alt="Confluence" // Provide alt text for accessibility
            style={{
              width: '18px', 
              height: '18px', 
              marginLeft: '10px', // Space between text and image
              color: 'white'

            }}
          />
        </a>
      </div>
      </>
    ),
      },
  {
    title: 'Tech documentation',
    Svg: require('@site/static/img/undraw_thought_process_re_om518.svg').default,
    description: (
      <>
        Examples of technical documentation I've created during my work in IT companies that include an overview of the setup of objects for the Salesforce platform and microservices description executed by Jenkins pipeline.
        <div style={{ marginTop: '20px' }}>
          <Link
            to="/docs/intro"
            style={{
              backgroundColor: '#6C63FF',
              border: 'none',
              color: 'white',
              width: '120px', 
              height: '45px', 
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '16px',
              margin: '4px 2px',
              cursor: 'pointer',
              borderRadius: '20px',
            }}
          >
            Learn More
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'UX writing & Figma',
    Svg: require('@site/static/img/undraw_design_components_9vy6.svg').default,
    description: (
      <>
        Mockups and end user feedback suggestions gathered during the design phase of the Salesforce based iPad application for big retail companies.
        <div style={{ marginTop: '20px' }}>
          <button 
            disabled // Add 'onClick' attribute later to make the button inactive
            style={{
              backgroundColor: '#6C63FF',
              border: 'none',
              color: 'white',
              width: '120px', 
              height: '45px', 
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '16px',
              margin: '4px 2px',
              cursor: 'pointer',
              borderRadius: '20px',
              cursor: 'not-allowed', // Change cursor to disabled
              borderRadius: '20px',
              opacity: 0.5, // Make the button look disabled
            }}
          >
          TBA
          </button>
        </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
