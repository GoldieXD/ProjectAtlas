import { ApplicationPage } from "../../../components/application-page";
import { APPLICATION_PAGES } from "../../../lib/application-pages";

export default function WatchlistPage() {
  return <ApplicationPage model={APPLICATION_PAGES["/watchlist"]} />;
}
