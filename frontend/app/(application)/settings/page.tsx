import { ApplicationPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function SettingsPage() {
  return <ApplicationPage model={APPLICATION_PAGES["/settings"]} />;
}
