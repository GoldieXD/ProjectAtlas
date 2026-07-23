import { ApplicationLoadingPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function InsightsLoading() {
  return <ApplicationLoadingPage model={APPLICATION_PAGES["/insights"]} />;
}
