import styled from 'styled-components';

export const Wrapper = styled.div`
color: beige;
  border-bottom: 1px solid grey;
  /* height: 63px; */
  padding-left: 10px;
  padding-right: 10px;
  /* width: 90%; */
  padding-bottom: 10px;
  /* background-color: ${({color}) => color}; */

  .link {
  color: brown;
  font-size: 25px;
  /* padding: 15px; */
  text-decoration: none;
}


.link:not(:last-child) {
  margin-right: 20px;
}

.activeLink {
  color: red;
}
`