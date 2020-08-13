import React, { useState } from "react";

import styled from "@emotion/styled";

const Card = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,300&display=swap");
  font-family: "Merriweather", serif;
  #capital {
    font-size: 25px;
  }
`;

const Country = ({ city, name, location, handleSearch }) => {
  const [query, setQuery] = useState(location);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <Card>
      <div id="capital">
        <b>{isSearching ? query : city}</b>
      </div>
      <CountryCard>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSearching("false");
            handleSearch(query);
          }}
        >
          <InputCard
            type="text"
            id="searchBox"
            onChange={(e) => {
              setQuery(e.target.value);
              setIsSearching("true");
            }}
            value={isSearching ? query : city}
            required
            style={{
              width: "100px",
              margin: "auto",
              border: "none",
              textAlign: "center",
            }}
          />
          <div id="countryName">{name}</div>
        </form>
      </CountryCard>
    </Card>
  );
};

const CountryCard = styled.div`
  form:hover #searchBox {
    display: block;
  }
  form:hover #countryName {
    display: none;
  }
`;
const InputCard = styled.input`
  display: none;
  &:focus {
    display: block;
  }
  &:focus + #countryName {
    display: none;
  }
`;
export default Country;
