import { ApplicationPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function InsightsPage() {
  return <ApplicationPage model={APPLICATION_PAGES["/insights"]} />;
}
