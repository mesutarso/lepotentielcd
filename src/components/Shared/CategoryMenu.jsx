import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Iconify from "./Iconify";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

export default function CategoryMenu() {
  const data = useStaticQuery(graphql`
    query menuCategoryQuery {
      wpMenu {
        menuItems {
          nodes {
            url
            label
          }
        }
      }
    }
  `);
  const categories = data.wpMenu.menuItems.nodes;
  const categorieToShow = [...categories].slice(0, 8);

    const MenuWrapper = styled.div`
    border-bottom: 1px solid #e5e5e5;
    .icon {
      font-size: 16px !important;
    }
    .navlink {
      color: ${(props) => props.theme.colors.secondary} !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      text-transform: uppercase !important;
      &:hover {
        color: ${(props) => props.theme.colors.primary} !important;
      }
    }
  `;

  return (
    <MenuWrapper>
      <Navbar className="categorie-menu">
        <Container>
          <Nav className="d-flex justify-content-around">
            <Nav.Link href="/" className="navlink">
              Accueil
            </Nav.Link>
            {categorieToShow.map((category, index) => {
              return (
                <Nav.Link key={index} href={category.url} className="navlink">
                  {category.label}
                </Nav.Link>
              );
            })}
            <Nav.Link href="/" className="navlink d-flex align-items-center">
              | <Iconify icon="ion:logo-google-playstore" />{" "}
              <span>Télécharger l'application </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </MenuWrapper>
  );
}
