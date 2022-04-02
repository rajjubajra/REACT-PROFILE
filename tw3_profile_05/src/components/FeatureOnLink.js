import React from 'react';
import { ExternalLink } from 'react-external-link';


function FeatureOnLink({link, logo}) {
  return (
    <ExternalLink href={link}>
      <span><img className="w-auto md:h-10 h-7"  src={logo} alt="logo" /></span>
    </ExternalLink>
  )
}

export default FeatureOnLink
