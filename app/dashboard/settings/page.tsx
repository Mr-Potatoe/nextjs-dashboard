// app/dashboard/settings/page.tsx
import { notFound } from 'next/navigation'

export default function SettingsPage() {
  return notFound() // ✅ This will render dashboard/not-found.tsx
}


