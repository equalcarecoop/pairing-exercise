import DefaultLayout from '@/components/layouts/defaultLayout'
import { PageHeading } from '@/components/pageHeading'

export default function ProfilesPage() {
  return (
    <DefaultLayout
      header={<PageHeading>Profiles</PageHeading>}
    >
      <p>The profiles page content</p>
    </DefaultLayout>
  )
}
