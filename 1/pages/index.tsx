import DefaultLayout from '@/components/layouts/defaultLayout'
import { PageHeading } from '@/components/pageHeading'

export default function HomePage() {
  return (
    <DefaultLayout
      header={<PageHeading>Home</PageHeading>}
    >
      <p>The home page content</p>
    </DefaultLayout>
  )
}
