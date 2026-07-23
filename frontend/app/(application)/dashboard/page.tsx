import { ApplicationPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function DashboardPage() {
  return <ApplicationPage model={APPLICATION_PAGES["/dashboard"]} />;
}
