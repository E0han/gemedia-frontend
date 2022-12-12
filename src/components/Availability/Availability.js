import React from "react";
import styled from "styled-components";

import { Box, Text } from "../../components/Core";
import { useTranslation} from 'next-i18next';

const AvailableCircle = styled(Box)`
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

const Hero = ({ className = "justify-content-center", ...rest }) => {
  const { t } = useTranslation('homepage');
  return (
    <>
      <Box className={`d-flex align-items-center ${className}`} {...rest}>
        <AvailableCircle className="bg-success" mr="13px" />
        <Text variant="tag" className="text-uppercase" color="heading">
        {t("index_contact_banner1")}
        </Text>
      </Box>
    </>
  );
};

export default Hero;
