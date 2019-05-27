import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { transparentize } from 'polished';
import styleVars from '../utils/styles';

// TODO: refactor styles to match Modal.jsx
// TODO: restyle sidebar like the following link
// !     https://react.explore-tech.org/static/d68086f1664a0b36653958437058efde/60092/screenshot.png

const SidebarLink = ({ link, title }) => (
  <StyledSidebarLink to={link} activeClassName="active">
    {title}
  </StyledSidebarLink>
);

const SidebarList = ({ items }) => (
  <StyledSidebarList>
    {items.map((item, j) => (
      <li key={j}>
        <SidebarLink link={item.link} title={item.title} />
      </li>
    ))}
  </StyledSidebarList>
);

const SidebarGroupTitle = ({ group }) => (
  <StyledSidebarGroupTitle>{group.group}</StyledSidebarGroupTitle>
);

const SidebarGroup = ({ i, group, location, ...props }) => (
  <>
    <SidebarGroupTitle group={group} />
    <SidebarList key={i} items={group.items} location={location} {...props} />
  </>
);

// eslint-disable-next-line react/prefer-stateless-function
export default class Sidebar extends React.Component {
  render() {
    const { sidebar, location, collapsed, toc, tocComponent } = this.props;

    if (sidebar) {
      try {
        // TODO: Refactor to not use var & query data through gatsby
        var sidebarfile = require(`../../data/sidebars/${sidebar}.yml`); // eslint-disable-line
      } catch (e) {
        throw e;
      }
    }

    if (!sidebarfile) return null;

    return (
      <StyledSidebar>
        {sidebarfile.map((group, i) => (
          <div key={i}>
            {collapsed ? (
              group.items.some(item => item.link === location.pathname) ? (
                <SidebarGroup
                  i={i}
                  group={group}
                  location={location}
                  toc={toc}
                  tocComponent={tocComponent}
                />
              ) : (
                <SidebarGroupTitle group={group} />
              )
            ) : (
              <SidebarGroup i={i} group={group} location={location} />
            )}
          </div>
        ))}
      </StyledSidebar>
    );
  }
}

const StyledSidebar = styled.nav`
  background: ${styleVars.colors.grays[0]};
  padding: 1em 1em 1em 0.5em;
  height: 100%;
  width: 15rem;
  border-right: 1px solid ${transparentize(0.88, styleVars.colors.main[3])};
  /* TODO: Scrollbar, Group Headings, Item styles, Item Dividers, Sticky Position */
`;

const StyledSidebarGroupTitle = styled.h4`
  text-transform: uppercase;
  color: ${transparentize(0.34, styleVars.colors.main[5])};
  margin-bottom: 0.25rem;
  font-weight: 400;
  border-bottom: 1px solid ${transparentize(0.88, styleVars.colors.main[3])};
`;

const StyledSidebarList = styled.ul`
  margin-left: 0.25em;
  li {
    padding-bottom: 0.25em;
    margin-bottom: 0;
    padding-left: 0.125em;
    list-style: none;
    font-size: 0.87em;
    /* border-left: 1px solid ${transparentize(
      0.88,
      styleVars.colors.main[3],
    )}; */
  }
`;

const StyledSidebarLink = styled(Link)`
  text-decoration: none;
  color: ${transparentize(0.34, styleVars.colors.main[5])};
  display: block;
  position: relative;
  :hover {
    color: ${transparentize(0.13, styleVars.colors.main[3])};
  }
  &.active {
    color: ${transparentize(0.13, styleVars.colors.main[3])};
    font-weight: bold;
    ::after {
      content: ' ';
      display: inline-block;
      position: absolute;
      right: -1rem;
      border-bottom: 0.75em solid transparent;
      border-top: 0.75em solid transparent;
      border-right: 0.75em solid
        ${transparentize(0.88, styleVars.colors.main[3])};
    }
  }
`;
