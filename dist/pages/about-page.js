import { i, _ as __decorate, s, x, e } from '../query-assigned-elements-868cdd0c.js';

let AboutPage = class AboutPage extends s {
    // .clip-circle {
    //   clip-path: circle(60px at center);
    // }
    // .clip-polygon {
    //   clip-path: polygon(5% 5%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    // }
    render() {
        return x `
    <div class="about">
      <img class="clip-animation" class="jj1" src="https://res.cloudinary.com/dqqou4dzd/image/upload/v1736166745/sheep/jj-spinning_x1foqu.png" alt="Jenny Judova in a wax jacket and brown wool hat smilling at the camera while winding yarn off the bobbin" width="400">
      <div class="about-text">
        <p>In late 2024 I recieved a gift of wool from 74 British sheep varieties.</p>
        <p>The wool is not washed or carded.</p>
        <p>In 2025 I will be washing, carding, and spinning this wool.</p>
        <p>The washing will take place at home. The carding and spinning in Spitalfields City Farm in London.</p>
        <p>Bellow is the long list of sheep breeds I will be working with as well as the dates.</p>
        <p>If you are in East London do pop by <a href="https://www.spitalfieldscityfarm.org/" target="_blank">Spitalfields City Farm</a> and say hi.</p>
        <p>If you can help the farm here is their <a href="https://www.amazon.co.uk/hz/wishlist/ls/3P09PCI90HKYQ/ref=hz_ls_biz_ex" target="_blank">Amazon Animal Wish List</a></p>
      </div>
    </div>
    `;
    }
};
AboutPage.styles = i `
  .about {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 5% 10%;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    padding: 6%;
  }

  @media only screen and (max-width: 800px) {
    .about {
      flex-direction: column;
      padding: 5%;
    }

    img {
      width: 350px;
    }
  }

  @media only screen and (max-width: 400px) {
    .about {
      flex-direction: column;
    }

    img {
      width: 250px;
    }
  }

  .clip-animation { 
    clip-path: polygon(100% 50%,84.70057014808336% 54.5684167277018%,91.0518476172854% 60.99980941685713%,82.33578363789503% 63.39392013277814%,93.30127018922194% 75%,77.76736691019323% 71.30665001530522%,80.05203820042827% 80.05203820042827%,71.30665001530522% 77.76736691019323%,75% 93.30127018922192%,63.39392013277814% 82.33578363789503%,60.99980941685714% 91.0518476172854%,54.56841672770181% 84.70057014808336%,50% 100%,45.4315832722982% 84.70057014808336%,39.000190583142874% 91.0518476172854%,36.606079867221865% 82.33578363789505%,25.00000000000001% 93.30127018922194%,28.693349984694787% 77.76736691019323%,19.947961799571733% 80.05203820042827%,22.23263308980677% 71.30665001530522%,6.698729810778076% 75.00000000000001%,17.664216362104966% 63.39392013277815%,8.948152382714603% 60.99980941685715%,15.299429851916635% 54.568416727701816%,0% 50.00000000000001%,15.299429851916635% 45.431583272298205%,8.94815238271459% 39.00019058314288%,17.66421636210496% 36.60607986722188%,6.698729810778062% 25.000000000000014%,22.23263308980676% 28.693349984694787%,19.947961799571715% 19.947961799571747%,28.69334998469477% 22.232633089806775%,24.99999999999998% 6.698729810778083%,36.60607986722184% 17.664216362104973%,39.00019058314284% 8.948152382714603%,45.43158327229816% 15.299429851916642%,49.99999999999999% 0%,54.568416727701795% 15.299429851916635%,60.99980941685711% 8.94815238271459%,63.39392013277812% 17.66421636210496%,74.99999999999997% 6.6987298107780475%,71.3066500153052% 22.23263308980675%,80.05203820042826% 19.947961799571722%,77.76736691019323% 28.69334998469477%,93.30127018922192% 24.99999999999998%,82.33578363789502% 36.60607986722184%,91.0518476172854% 39.00019058314283%,84.70057014808336% 45.43158327229816%)}
  
  .clip-animation { 
    animation: clip 1s infinite
  }
  
  @keyframes clip {
    0% {
      clip-path: polygon(100% 50%,84.70057014808336% 54.5684167277018%,91.0518476172854% 60.99980941685713%,82.33578363789503% 63.39392013277814%,93.30127018922194% 75%,77.76736691019323% 71.30665001530522%,80.05203820042827% 80.05203820042827%,71.30665001530522% 77.76736691019323%,75% 93.30127018922192%,63.39392013277814% 82.33578363789503%,60.99980941685714% 91.0518476172854%,54.56841672770181% 84.70057014808336%,50% 100%,45.4315832722982% 84.70057014808336%,39.000190583142874% 91.0518476172854%,36.606079867221865% 82.33578363789505%,25.00000000000001% 93.30127018922194%,28.693349984694787% 77.76736691019323%,19.947961799571733% 80.05203820042827%,22.23263308980677% 71.30665001530522%,6.698729810778076% 75.00000000000001%,17.664216362104966% 63.39392013277815%,8.948152382714603% 60.99980941685715%,15.299429851916635% 54.568416727701816%,0% 50.00000000000001%,15.299429851916635% 45.431583272298205%,8.94815238271459% 39.00019058314288%,17.66421636210496% 36.60607986722188%,6.698729810778062% 25.000000000000014%,22.23263308980676% 28.693349984694787%,19.947961799571715% 19.947961799571747%,28.69334998469477% 22.232633089806775%,24.99999999999998% 6.698729810778083%,36.60607986722184% 17.664216362104973%,39.00019058314284% 8.948152382714603%,45.43158327229816% 15.299429851916642%,49.99999999999999% 0%,54.568416727701795% 15.299429851916635%,60.99980941685711% 8.94815238271459%,63.39392013277812% 17.66421636210496%,74.99999999999997% 6.6987298107780475%,71.3066500153052% 22.23263308980675%,80.05203820042826% 19.947961799571722%,77.76736691019323% 28.69334998469477%,93.30127018922192% 24.99999999999998%,82.33578363789502% 36.60607986722184%,91.0518476172854% 39.00019058314283%,84.70057014808336% 45.43158327229816%);
    }
    50% {
      clip-path: polygon(84.70057014808336% 54.5684167277018%,91.0518476172854% 60.99980941685713%,82.33578363789503% 63.39392013277814%,93.30127018922194% 75%,77.76736691019323% 71.30665001530522%,80.05203820042827% 80.05203820042827%,71.30665001530522% 77.76736691019323%,75% 93.30127018922192%,63.39392013277814% 82.33578363789503%,60.99980941685714% 91.0518476172854%,54.56841672770181% 84.70057014808336%,50% 100%,45.4315832722982% 84.70057014808336%,39.000190583142874% 91.0518476172854%,36.606079867221865% 82.33578363789505%,25.00000000000001% 93.30127018922194%,28.693349984694787% 77.76736691019323%,19.947961799571733% 80.05203820042827%,22.23263308980677% 71.30665001530522%,6.698729810778076% 75.00000000000001%,17.664216362104966% 63.39392013277815%,8.948152382714603% 60.99980941685715%,15.299429851916635% 54.568416727701816%,0% 50.00000000000001%,15.299429851916635% 45.431583272298205%,8.94815238271459% 39.00019058314288%,17.66421636210496% 36.60607986722188%,6.698729810778062% 25.000000000000014%,22.23263308980676% 28.693349984694787%,19.947961799571715% 19.947961799571747%,28.69334998469477% 22.232633089806775%,24.99999999999998% 6.698729810778083%,36.60607986722184% 17.664216362104973%,39.00019058314284% 8.948152382714603%,45.43158327229816% 15.299429851916642%,49.99999999999999% 0%,54.568416727701795% 15.299429851916635%,60.99980941685711% 8.94815238271459%,63.39392013277812% 17.66421636210496%,74.99999999999997% 6.6987298107780475%,71.3066500153052% 22.23263308980675%,80.05203820042826% 19.947961799571722%,77.76736691019323% 28.69334998469477%,93.30127018922192% 24.99999999999998%,82.33578363789502% 36.60607986722184%,91.0518476172854% 39.00019058314283%,84.70057014808336% 45.43158327229816%,100% 50%);
    }
     100% {
      clip-path: polygon(91.0518476172854% 60.99980941685713%,82.33578363789503% 63.39392013277814%,93.30127018922194% 75%,77.76736691019323% 71.30665001530522%,80.05203820042827% 80.05203820042827%,71.30665001530522% 77.76736691019323%,75% 93.30127018922192%,63.39392013277814% 82.33578363789503%,60.99980941685714% 91.0518476172854%,54.56841672770181% 84.70057014808336%,50% 100%,45.4315832722982% 84.70057014808336%,39.000190583142874% 91.0518476172854%,36.606079867221865% 82.33578363789505%,25.00000000000001% 93.30127018922194%,28.693349984694787% 77.76736691019323%,19.947961799571733% 80.05203820042827%,22.23263308980677% 71.30665001530522%,6.698729810778076% 75.00000000000001%,17.664216362104966% 63.39392013277815%,8.948152382714603% 60.99980941685715%,15.299429851916635% 54.568416727701816%,0% 50.00000000000001%,15.299429851916635% 45.431583272298205%,8.94815238271459% 39.00019058314288%,17.66421636210496% 36.60607986722188%,6.698729810778062% 25.000000000000014%,22.23263308980676% 28.693349984694787%,19.947961799571715% 19.947961799571747%,28.69334998469477% 22.232633089806775%,24.99999999999998% 6.698729810778083%,36.60607986722184% 17.664216362104973%,39.00019058314284% 8.948152382714603%,45.43158327229816% 15.299429851916642%,49.99999999999999% 0%,54.568416727701795% 15.299429851916635%,60.99980941685711% 8.94815238271459%,63.39392013277812% 17.66421636210496%,74.99999999999997% 6.6987298107780475%,71.3066500153052% 22.23263308980675%,80.05203820042826% 19.947961799571722%,77.76736691019323% 28.69334998469477%,93.30127018922192% 24.99999999999998%,82.33578363789502% 36.60607986722184%,91.0518476172854% 39.00019058314283%,84.70057014808336% 45.43158327229816%,100% 50%,84.70057014808336% 54.5684167277018%);
    }
  }
`;
AboutPage = __decorate([
    e('about-page')
], AboutPage);

export { AboutPage };
//# sourceMappingURL=about-page.js.map
