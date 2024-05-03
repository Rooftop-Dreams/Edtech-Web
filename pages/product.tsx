import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import { media } from 'utils/media';
import Features from 'views/HomePage/Features';
export default function FeaturesPage() {
  return (
    <Page title="Products" description="A list of products that Hulubooks Provide.">
      <Features />
    </Page>
  );
}



