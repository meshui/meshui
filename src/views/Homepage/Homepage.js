import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { NavLink, Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import ProductSection from "./Sections/ProductSection.js";
import GreyBanner from "./Sections/GreyBanner";
import SectionLink from "./Sections/SectionLink";


import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Homepage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Meshui"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        {/* <Parallax image={require("assets/img/backgrounds/applause-arena-audience.jpg")}> */}
        <Parallax image={require("assets/img/backgrounds/community-dark-full-moon.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Meshui.</h1>
                  <h4>
                  Mesh User Interface.
                  </h4>
                </div>
                <br />
                <NavLink to="/login">
                  <Button
                    color="danger"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-play" />Get started
                  </Button>
                </NavLink>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <ProductSection />
          <GreyBanner />
          <SectionLink />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Homepage);
