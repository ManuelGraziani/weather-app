import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInputGroup,
  MDBRow,
} from "mdb-react-ui-kit";
import { useNavigate} from "react-router-dom";
export default function Weather() {
    const navigate = useNavigate()
    const [city, setCity] = useState({citta : ""})

  return (
    <section className="vh-100">
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard className="w-100">
              <MDBCardBody>

                <MDBInputGroup>
                  <input
                    className="form-control rounded"
                    type="text"
                    placeholder="Cerca località"
                    onChange={(e) => setCity({...city, citta: e.target.value})}

                  />
                  <a type="button" onClick={() => navigate("/results/" + city.citta)}>
                    <span
                      className="input-group-text border-0 fw-bold"
                      id="search-addon"
                    >
                      Cerca
                    </span>
                  </a>
                </MDBInputGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
