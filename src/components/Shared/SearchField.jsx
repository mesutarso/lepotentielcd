import React from "react";
import Iconify from "./Iconify";
import styled from "styled-components";

const InputField = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .search-control {
    padding: 8px 16px;
    width: 80%;
    border-radius: 24px;
    border: none;
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.secondary};
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 500;
    ::placeholder {
      color: rgba(229, 35, 44, 0.45);
    }
  }
`;

export default function SearchField() {
  return (
    <InputField>
      <input
        type="search"
        placeholder="Recherhe..."
        className="search-control"
      />
      <Iconify icon="ant-design:search-outlined" />
    </InputField>
  );
}
