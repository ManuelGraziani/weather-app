import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ForecastCard({ forecast }) {
  return (
    <MDBCard className="mb-4 mt-4" style={{ borderRadius: "25px" }}>
      <MDBCardBody className="p-4">
        <div className="d-flex justify-content-around text-center pb-3 pt-2">
          <div className="flex-column">
            <p className="small">
              <strong>
                {Math.round(forecast?.list?.[0]?.main.temp) + "°C"}
              </strong>
            </p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${forecast?.list?.[0]?.weather[0].icon}@2x.png`}
                width="50px"
              />
            </div>
            <p className="mb-0">
              <strong>{forecast?.list?.[0]?.dt_txt.slice(11, -3)}</strong>
            </p>
          </div>
          <div className="flex-column">
            <p className="small">
              <strong>
                {Math.round(forecast?.list?.[1]?.main.temp) + "°C"}
              </strong>
            </p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${forecast?.list?.[1]?.weather[0].icon}@2x.png`}
                width="50px"
              />
            </div>
            <p className="mb-0">
              <strong>{forecast?.list?.[1]?.dt_txt.slice(11, -3)}</strong>
            </p>
          </div>
          <div className="flex-column">
            <p className="small">
              <strong>
                {Math.round(forecast?.list?.[2]?.main.temp) + "°C"}
              </strong>
            </p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${forecast?.list?.[2]?.weather[0].icon}@2x.png`}
                width="50px"
              />
            </div>
            <p className="mb-0">
              <strong>{forecast?.list?.[2]?.dt_txt.slice(11, -3)}</strong>
            </p>
          </div>
          <div className="flex-column">
            <p className="small">
              <strong>
                {Math.round(forecast?.list?.[3]?.main.temp) + "°C"}
              </strong>
            </p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${forecast?.list?.[3]?.weather[0].icon}@2x.png`}
                width="50px"
              />
            </div>
            <p className="mb-0">
              <strong>{forecast?.list?.[3]?.dt_txt.slice(11, -3)}</strong>
            </p>
          </div>
          <div className="flex-column">
            <p className="small">
              <strong>
                {Math.round(forecast?.list?.[4]?.main.temp) + "°C"}
              </strong>
            </p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${forecast?.list?.[4]?.weather[0].icon}@2x.png`}
                width="50px"
              />
            </div>
            <p className="mb-0">
              <strong>{forecast?.list?.[4]?.dt_txt.slice(11, -3)}</strong>
            </p>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
