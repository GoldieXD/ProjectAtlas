import { ApplicationLoadingPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function AssistantLoading() {
  return <ApplicationLoadingPage model={APPLICATION_PAGES["/assistant"]} />;
}
