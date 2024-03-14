import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  // Ensure that title is always a string
  const pageTitle = String(title);

  return (
    <Helmet>
      <title>
        {pageTitle} | Yum Reactjs - Multipurpose Food Tailwind CSS Template
      </title>
    </Helmet>
  );
};

export default PageTitle;
