import { css } from 'lit';

export const styles = css`

.sheep-table {
  padding: 0 15% 10% 15%;
}

tbody td {
    /* 1. Animate the background-color
       from transparent to white on hover */
    background-color: rgba(196,126,16,0);
    transition: all 0.2s linear; 
    transition-delay: 0.3s, 0s;
    /* 2. Animate the opacity on hover */
    opacity: 0.6;

    white-space: nowrap
  }
  tbody tr:hover td {
    background-color: rgba(196,126,16,1);
    transition-delay: 0s, 0s;
    opacity: 1;
    font-size: 2em;
    font-size: 20px;
  }

  tr {
    font-size: 15px;
  }
  
  td {
    /* 3. Scale the text using transform on hover */
    transform-origin: center left;
    transition-property: transform;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;

    white-space: nowrap
  }
  tr:hover td {
    transform: scale(1.1);
    font-size: 20px;
  }
  
  /* Codepen styling */
  * { box-sizing: border-box }
  
  table {
    width: 90%;
    margin: 0 5%;
    text-align: left;
  }
  th, td {
    padding: 0.5em;
  }

  @media only screen and (max-width: 500px) {
    .sheep-table {
      padding: 0 0 10% 0;
    }

    table {
      margin: 0;
    }
  }
`;