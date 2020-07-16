import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import AboutMe from "./components/pages/";
import Experience from "./components/pages/experience";
import TheBlairFamilyFoundation from "./components/pages/experience/TheBlairFamilyFoundation";
import ElkindFinancial from "./components/pages/experience/ElkindFinancial";
import TheRetreatOnNichols from "./components/pages/experience/TheRetreatOnNichols";
import MinuteTech from "./components/pages/experience/MinuteTech";
import CAPS from "./components/pages/experience/CAPS";
import BodyByYama from "./components/pages/experience/BodyByYama";
import GlassHouseFarms from "./components/pages/experience/GlassHouseFarms";
import ColdbrewCreative from "./components/pages/experience/ColdbrewCreative";
import Tesla from "./components/pages/experience/Tesla";
import PaloAltoNetworks from "./components/pages/experience/PaloAltoNetworks";
import ACFN from "./components/pages/experience/ACFN";
import SJSU from "./components/pages/experience/SJSU";
import IHealPhones from "./components/pages/experience/IHealPhones";
import ORHS from "./components/pages/experience/ORHS";
import Gallery from "./components/pages/Gallery";
import withTracker from './components/WithTracker';
import PrestigePower from "./components/pages/experience/PrestigePower";
import SmithZellnerConsulting from "./components/pages/experience/SmithZellnerConsulting";

const Page404 = ({ location }) => (
  <div className="wrapper">
    {/* <img src={error404} alt="error404" className="large responsive center" /> */}
    <p className="m-padding">
      Uh oh... doesn't look like this page exists. Check the web address and try
      again.
    </p>
  </div>
);

export class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={withTracker(AboutMe)} />
        <Route exact path="/experience/" component={withTracker(Experience)} />
        <Route exact path="/experience/prestige-power" component={withTracker(PrestigePower)} />
        <Route exact path="/experience/smithzellner.consulting" component={withTracker(SmithZellnerConsulting)} />
        <Route exact path="/experience/theblairfamilyfoundation.org" component={withTracker(TheBlairFamilyFoundation)} />
        <Route exact path="/experience/elkind.financial" component={withTracker(ElkindFinancial)} />
        <Route exact path="/experience/theretreatonnichols.com" component={withTracker(TheRetreatOnNichols)} />
        <Route exact path="/experience/minute.tech" component={withTracker(MinuteTech)} />
        <Route exact path="/experience/capsmd.org" component={withTracker(CAPS)} />
        <Route exact path="/experience/bodybyyama.com" component={withTracker(BodyByYama)} />
        <Route exact path="/experience/glasshousefarms.co" component={withTracker(GlassHouseFarms)} />
        <Route exact path="/experience/coldbrew-creative" component={withTracker(ColdbrewCreative)} />
        <Route exact path="/experience/tesla" component={withTracker(Tesla)} />
        <Route exact path="/experience/palo-alto-networks" component={withTracker(PaloAltoNetworks)} />
        <Route exact path="/experience/acfn-franchised" component={withTracker(ACFN)} />
        <Route exact path="/experience/san-jose-state-university" component={withTracker(SJSU)} />
        <Route exact path="/experience/ihealphones.com" component={withTracker(IHealPhones)} />
        <Route exact path="/experience/oak-ridge-high-school" component={withTracker(ORHS)} />
        <Route exact path="/gallery/" component={withTracker(Gallery)} />
        <Route component={withTracker(Page404)} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
