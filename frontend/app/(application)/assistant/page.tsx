import { ApplicationPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function AssistantPage() {
  return <ApplicationPage model={APPLICATION_PAGES["/assistant"]} />;
}
