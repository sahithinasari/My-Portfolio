import React from "react";
import { BiCheck } from "react-icons/bi";
import './Services.css';
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {/**UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
          </ul>
        </article>

        {/*Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Develeopment</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
          </ul>
        </article>
        {/*Content*/}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
            <li>
              <BiCheck className="sevice_list-icon" />
              <p>Lorem ipsum dolata uiewfrekjm wfiufr</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
