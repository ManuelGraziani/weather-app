import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import ForecastCard from './ForecastCard';

export default function WeatherCard({weather, forecast}) {
  return (
    <section className="vh-100">
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-center">
                  <MDBTypography tag="h1" className="flex-grow-1">
                    {weather.name}
                  </MDBTypography>
                </div>

                <div className="d-flex flex-column text-center mt-2 mb-2">
                  <MDBTypography
                    tag="h6"
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {" "}
                    {Math.round(weather?.main?.temp) + "°C"}{" "}
                  </MDBTypography>
                  <span className="medium" style={{ color: "#868B94" }}>
                  {weather?.weather?.[0]?.description}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1">{weather?.wind?.speed +" Km/h"} </span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {weather?.main?.humidity + "%"} </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
                      width="100px"
                    />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
            <ForecastCard forecast={forecast}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

/* function getBackgroundImage(description) {
  // Define your logic to map the weather description to the appropriate image URL
  // For example:
  if (description.includes("sunny")) {
    return "url('sunny.jpg')";
  } else if (description.includes("cloudy")) {
    return "url('cloudy.jpg')";
  } else {
    return "url(https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg?w=1029&webp=1)";
  }
} */