import { ApplicationLoadingPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function BriefLoading() {
  return <ApplicationLoadingPage model={APPLICATION_PAGES["/brief"]} />;
}
