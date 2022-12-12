import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";

import { useTranslation } from "next-i18next";
import { Router, useRouter } from "next/dist/client/router";

const NestedMenuContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.dark} !important;
    transition: all 0.3s ease-out;
    font-weight: 700;
    text-transform: lowercase;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    font-weight: 700;
    text-transform: lowercase;
    color: ${({ theme }) => theme.colors.dark};
    &:hover,
    &:active,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(22, 28, 45, 0.125);
    }

    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const defaultMenuItems = [
  {
    name: "services",
    label: "header_services",
    items: [
      { name: "portfolio-details", label: "header_services_seeding" },

      {
        name: "portfolio-details",
        label: "header_services_social_media_management",
        items: [
          {
            name: "portfolio-details",
            label: "header_services_social_smm_douyin",
          },
          {
            name: "portfolio-details-2",
            label: "header_services_social_smm_xiaohongshu",
          },
          {
            name: "portfolio-details-2",
            label: "header_services_social_smm_wechat",
          },
        ],
      },

      { name: "contact", label: "header_services_video_making" },
    ],
  },
];

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);
  const { t } = useTranslation("header");
  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className={`d-flex align-items-center justify-content-between ${
            open ? "active" : ""
          }`}
        >
          <span>{t(label)}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {t(label)}
            </a>
          ) : (
            <Link href={`/${name}`}>
              <a
                onClick={() => {
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas();
                  }
                }}
              >
                {t(label)}
              </a>
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = ({ menuItems = defaultMenuItems }) => {
  const gContext = useContext(GlobalContext);
  const { t } = useTranslation("header");
  const router = useRouter();

  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <Link href={"/"}>
              <a
                href="#"
                onClick={(e) => {
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas();
                  }
                }}
              >
                {t("header_home")}
              </a>
            </Link>
          }
        </ListGroup.Item>

        {/*Service menu items */}

        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}

        {/* Open about modal */}

        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <Link href={"/about"}>
              <a
                href="/#"
                onClick={(e) => {
                  // e.preventDefault();
                  // gContext.toggleAbout();
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas();
                  }
                }}
              >
                {t("header_about")}
              </a>
            </Link>
          }
        </ListGroup.Item>

        {/* Open contact modal */}
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <Link href={"/contact"}>
              <a
                href="#"
                onClick={(e) => {
                  // e.preventDefault();
                  // gContext.toggleContact();
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas();
                  }
                }}
              >
                {t("header_contact")}
              </a>
            </Link>
          }
        </ListGroup.Item>
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
