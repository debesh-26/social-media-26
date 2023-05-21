import React from "react";

const PersonalInfo = () => {
  return (
    <div className="p">
      <div className="p_wrapper">
        <div className="heading">Personal Info</div>
        <div className="info">
          <div className="info_item">
            <span className="info_key">City:</span>
            <input type="text" placeholder="City" className="info_value" />
          </div>
          <div className="info_item">
            <span className="info_key">Country:</span>
            <input type="text" placeholder="Country" className="info_value" />
          </div>
          <div className="info_item">
            <span className="info_key">Relationship:</span>
            <select name="active" id="active" className="info_value">
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="complicated">Complicated</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
