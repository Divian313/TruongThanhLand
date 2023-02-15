import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import styled from "styled-components";
const StyleBreadcrumb = styled(Breadcrumb)`
  margin-left: 2rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  & .breadcrumb-item + .breadcrumb-item:before {
    content: ">";
  }
  a {
    text-decoration: none;
    color: #333333;
  }
`;
const StyleBreadcrumbItem = styled(BreadcrumbItem)`
  /* color: #495057; */
  font-size: 1rem;
`;

const mapping = {
  "gio-hang-chuyen-nhuong": "GIỎ HÀNG CHUYỂN NHƯỢNG",
};
const convertToDisplayText = (text) => mapping[text] || text;
const BreadcrumbNav = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p);
  const items = paths.map((path, index) => {
    const link = `/${paths.slice(0, index + 1).join("/")}`;
    return (
      <StyleBreadcrumbItem key={link} active={index === paths.length - 1}>
        {index === paths.length - 1 ? (
          convertToDisplayText(path)
        ) : (
          <Link to={link}>{convertToDisplayText(path)}</Link>
        )}
      </StyleBreadcrumbItem>
    );
  });

  return (
    <StyleBreadcrumb>
      <BreadcrumbItem>
        <Link to={`/`}>
          <i class="fa fa-home" aria-hidden="true"></i>
        </Link>
      </BreadcrumbItem>
      {items}
    </StyleBreadcrumb>
  );
};

export default BreadcrumbNav;
