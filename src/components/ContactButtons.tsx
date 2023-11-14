import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes.constants";

const ContactButtons = () => {
  return (
    <Fragment>
      <Link to={routes.AllContact}>
        <Button variant="primary">Modal A</Button>
      </Link>
      <Link to={routes.USContacts}>
        <Button variant="secondary">Modal B</Button>
      </Link>
    </Fragment>
  );
};

export default ContactButtons;
