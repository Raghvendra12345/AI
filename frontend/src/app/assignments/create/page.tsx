import DashboardLayout
from '@/components/layout/DashboardLayout'

// import AssignmentForm
// from '../components/assignments/AssignmentForm'

import AssignmentForm from '@/components/assignments/AssignmentForm'

export default function CreatePage() {

  return (
    <DashboardLayout>

      <AssignmentForm />

    </DashboardLayout>
  )
}