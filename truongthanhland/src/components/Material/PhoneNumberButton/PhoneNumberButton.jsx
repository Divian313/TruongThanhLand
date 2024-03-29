import styled from "styled-components";
const Hotline = styled.a`
  margin-left: 100px;
  display: inline !important;
  background: linear-gradient(45deg, #d07d0b, #ffc913);
  font-family: "Roboto", sans-serif !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  color: red !important;
  border: 3px solid #fff;
  border-radius: 40px;
  box-shadow: 0 0 15px 2px rgb(255 255 255 / 75%) !important;
  display: block;
  padding: 8px 15px !important;
  width: auto;
  z-index: 5;

  &:hover {
    background: linear-gradient(45deg, #ffc913, #d07d0b);
  }
  @media (max-width: 1198px) {
    margin-left: 0;
  }
`;
const Icon = styled.div`
  width: 1em;
  margin-right: 10px;
  display: inline-block;
  color: red;
`;
const Text = styled.div`
  display: inline-block;
`;
const PhoneNumberButton = () => {
  return (
    <>
      <Hotline href="tel:0909116262">
        <Icon className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480.56 480.56"
            class="svg-icon"
          >
            <path d="M365.354 317.9c-15.7-15.5-35.3-15.5-50.9 0l-35.5 35.6c-3.2 3.3-5.9 4-9.8 1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3 1.8-9.4 11.9-11.5 23.5-23.3 35.2-35.1 16.3-16.4 16.3-35.6-.1-52.1l-27.9-28-28.8-28.8c-15.7-15.3-35.3-15.3-50.9.1l-35.7 35.5c-11.3 10.7-17 23.8-18.2 39.1-1.9 24.9 4.2 48.4 12.8 71.3 17.6 47.4 44.4 89.5 76.9 128.1 43.9 52.2 96.3 93.5 157.6 123.3 27.6 13.4 56.2 23.7 87.3 25.4 21.4 1.2 40-4.2 54.9-20.9 10.2-11.4 21.7-21.8 32.5-32.7 16-16.2 16.1-35.8.2-51.8l-57.2-57.1zm-19.1-79.7l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89-25.7-25.7-58.2-41.9-94-46.9l-5.2 37.1c27.7 3.9 52.9 16.4 72.8 36.3 18.8 18.8 31.1 42.6 35.6 68.8zm57.7-160.4c-42.6-42.6-96.5-69.5-156-77.8l-5.2 37.1c51.4 7.2 98 30.5 134.8 67.2 34.9 34.9 57.8 79 66.1 127.5l36.9-6.3c-9.7-56.2-36.2-107.2-76.6-147.7z"></path>
          </svg>
        </Icon>
        <Text className="text">090 911 6262</Text>
      </Hotline>
    </>
  );
};
export default PhoneNumberButton;
