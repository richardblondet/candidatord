import React from 'react';

export const CandidateProfile = (props:any) => {
  const { name, party, picture } = props;
  return (
    <div className="d-flex align-items-center">
      {picture && <div>
        <img src={picture} className="rounded-circle" width="64" />
      </div>}
      <div className="flex-fill ml-3">
        <div className="h6 text-sm mb-0">
          {name}
        </div>
        <small className="text-muted text-uppercase mt-1">{`@${party}`}</small>
      </div>
    </div>  
  );
};
