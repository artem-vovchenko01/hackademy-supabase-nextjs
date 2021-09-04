import { Auth, Typography, Button } from '@supabase/ui'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

export default function Account() {
  return (
    <>
      <h1> hello </h1>
      <Link href='/kyc'>
          <a>KYC</a>
      </Link>
    </>
  )
}

