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

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const BreadcrumbNav = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(p => p);
  const items = paths.map((path, index) => {
    const link = `/${paths.slice(0, index + 1).join('/')}`;
    return (
      <BreadcrumbItem key={link} active={index === paths.length - 1}>
        {index === paths.length - 1 ? path : <a href={link}>{path}</a>}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb>
      {items}
    </Breadcrumb>
  );
};

export default BreadcrumbNav;