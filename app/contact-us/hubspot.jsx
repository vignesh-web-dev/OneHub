import React from "react";
import dynamic from "next/dynamic";

const HubspotForm = dynamic(() => import("react-hubspot-form"), { ssr: false });

const Hubspot = (props) => {
  const { portalId, formId } = props;
  return (
    <div className={`hubspot-form ${props.className}`}>
      <HubspotForm portalId={portalId} formId={formId} />
    </div>
  );
};

export default Hubspot;
