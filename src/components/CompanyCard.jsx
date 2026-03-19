import React from 'react';

const CompanyCard = ({ name, logo, roles, jd, index = 0 }) => {
  const displayRole = roles?.length === 1 ? roles[0] : "Multiple Roles";

  return (
    <div 
      className="company-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="company-header">
        {logo && (
          <div className="company-logo-container">
            <img src={logo} alt={`${name} logo`} className="company-logo" />
          </div>
        )}
        <h3 className="company-name">{name}</h3>
      </div>
      
      <div className="company-role-badge">
        {displayRole}
      </div>

      <button className="company-btn" onClick={() => window.open(jd, "_blank")}>
        View JD
      </button>
    </div>
  );
};

export default CompanyCard;
