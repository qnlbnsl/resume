import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor: '#2B3035' }} className='text-center text-lg-center text-muted' >
        <div className='d-none d-lg-block'>
          <span style={{color: '#CACBCC' }}>Get connected on social networks:</span>
        </div>
        <div style={{color: '#CACBCC' }}>
          <a href='https://twitter.com/qnlbnsl' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" style={{color: '#CACBCC' }} />
          </a>
          <a href='https://www.linkedin.com/in/qnlbnsl/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" style={{color: '#CACBCC' }} />
          </a>
          <a href='https://github.com/qnlbnsl' className='me-4 text-reset'>
            <MDBIcon fab icon="github" style={{color: '#CACBCC' }} />
          </a>
        </div>
        <br />
        <div style={{ backgroundColor: '#2B3035', color: '#CACBCC' }}>
        © 2023 Copyright: &nbsp;
        <a className='text-reset fw-bold' href='https://kunalbans.al/'>
          KunalBans.al
        </a>
      </div>

    </MDBFooter>
  );
}
