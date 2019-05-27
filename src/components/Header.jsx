import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import MediaQuery from 'react-responsive';
import useToggle from '../hooks/useToggle';
import Modal from './Modal';
import LogoAbout from '../assets/icons/round-help-24px.svg';

// todo style main nav links & about button, impliment responsive, aria for modal

const AboutButton = () => {
  const [open, setOpen] = useToggle(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <LogoAbout />
      </button>
      {open && (
        <Modal toggle={setOpen} open={open}>
          This project is a work in progress. Check out the{' '}
          <a href="https://github.com/LaneLourcey/gcsc-perf-plus-capstone">
            Github page
          </a>{' '}
          if you are interested in the source code.
        </Modal>
      )}
    </>
  );
};

const Header = () => {
  return (
    <StyledHeader>
      <MediaQuery maxWidth={749}>test</MediaQuery>
      <Link to="/">GCSC PERF+</Link>
      <MediaQuery minWidth={750}>
        <Link to="/analysis/running-audits/">Analysis</Link>
        <Link to="/optimization/web-image-performance/">Optimization</Link>
      </MediaQuery>
      <AboutButton />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 0.5em;
  background-color: #772f87;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    color: hsla(0, 0%, 100%, 0.87);
    text-decoration: none;
  }
  /* About Button */
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    cursor: pointer;
    svg {
      fill: ${transparentize(0.3, '#fff')};
    }
    :hover svg {
      fill: ${transparentize(0, '#fff')};
    }
    :active svg {
      fill: ${transparentize(0, '#fff')};
    }
  }
`;
