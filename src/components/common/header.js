import React, { Component, PropTypes } from 'react';

const HeaderBar = ({title,closeHandler}) => (
    <div className="card-panel teal accent-4 header-container">
       <span className="header-title">
       	{title}
       	{
       		(closeHandler)&&
       		(<svg onClick={()=>{closeHandler()}} viewBox="0 0 24 24">
			    <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
			</svg>) 
       	}
		</span>      
    </div>
);

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  closeHandler: PropTypes.func
}

export default HeaderBar;