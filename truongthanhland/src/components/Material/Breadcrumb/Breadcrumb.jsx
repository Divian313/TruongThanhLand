// import styled from "styled-components";
// const Wrap = styled.div`
//   margin: 20px 50px;
// `
// const Breadrumb = () => {
//     return (
//         <>
//         </>
//     )
// }
// export default Breadrumb;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import styled from "styled-components";
const StyleBreadcrumb = styled(Breadcrumb)`
  /* width: fit-content;
  height: fit-content; */
  margin-left: 2rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  /* background: #c4c4c4; */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;
const StyleBreadcrumbItem = styled(BreadcrumbItem)`
  color: #495057;
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
        <Link to={`/`}>HOME</Link>
      </BreadcrumbItem>
      {items}
    </StyleBreadcrumb>
  );
};

export default BreadcrumbNav;
