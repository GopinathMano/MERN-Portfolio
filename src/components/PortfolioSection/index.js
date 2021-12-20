import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import recipies from "../../Images/My-Recipies.png";
import quiz from "../../Images/quizApp.png";
import ecom from "../../Images/react-shopy.png";
import moto from "../../Images/motorDairies.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Projects</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={ecom} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Amazon Clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">React Shopy</div>
            <div className="img-description">
              <p>
                Application system follows complete authentication for Login,
                Registration, Payment and authentication
              </p>
              <p>
                Users can add new products to their account cart, and also
                Delete the added products on Cart.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GopinathMano/React-Shopy-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GopinathMano/React-Shopy-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a> */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://lucid-carson-b3fd8a.netlify.app"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={moto} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">MOTORCYCLE - DIARIES</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">MOTORCYCLE-DIARIES</div>
            <div className="img-description">
              <p>
                Created MOTORCYCLE-DIARIES where the users create and edit
                posts. Users can view posts based on the category or author
                name.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GopinathMano/mern-BikerDiary-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GopinathMano/mern-BlogApp-Backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a> */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://epic-bassi-425708.netlify.app/"
                  >
                  Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={recipies} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">My Recipies App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">My Recipies App</div>
            <div className="img-description">
              <p>
                The project is a recipe web app based on a catalog of recipes.
                mplemented this application with a complete authentication
                system .
              </p>
              <p>
                Users can update their profile pictures. Only the Admin or owner
                of the post can perform edit or delete.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  {/* <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GopinathMano/React-MyRecipeApp-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GopinathMano/React-MyRecipeApp-Backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a> */}
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://myrecipes02.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={quiz} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Quiz App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Quiz App</div>
            <div className="img-description">
              <p>This app is created using react js. .</p>
              <p>
                This quiz game is inspired by "Who Wants to Be a Millionaire"
                show
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/GopinathMano/react-quiz-app"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://infallible-montalcini-676f93.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
