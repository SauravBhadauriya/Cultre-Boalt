import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackButton({ label = 'Back to Home' }) {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)} className="back-btn">
      <ArrowLeft className="w-5 h-5" />
      {label}
    </button>
  )
}
