import { ListingsContainer } from "containers";
import { Header, PageWrapper } from "components";

export default function Listings() {
  return (
    <PageWrapper>
      <Header title="Property Listings" />
      <ListingsContainer />
    </PageWrapper>
  );
}
