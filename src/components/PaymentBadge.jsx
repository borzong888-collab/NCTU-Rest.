import { PAYMENT_LABELS } from '../data/data'
import './PaymentBadge.css'

const PAYMENT_COLORS = {
  cash: { bg: '#e8f5e9', color: '#2e7d32', border: '#2e7d32' },
  credit: { bg: '#e3f2fd', color: '#1565c0', border: '#1565c0' },
  linepay: { bg: '#e8f5e9', color: '#00b300', border: '#00b300' },
  jkopay: { bg: '#ffe0e0', color: '#ff0000', border: '#ff0000' },
  taiwanpay: { bg: '#ffe0f6', color: '#b0069c', border: '#b0069c' },
  easycard: { bg: '#feffdf', color: '#888f00', border: '#dce801' },
}

function PaymentBadge({ method }) {
  const label  = PAYMENT_LABELS[method] || method
  const colors = PAYMENT_COLORS[method] || { bg: '#f5f5f5', color: '#555', border: '#ccc' }

  return (
    <div
      className="payment-badge"
      style={{ backgroundColor: colors.bg, color: colors.color, border: `1px solid ${colors.border}` }}
    >
      {label}
    </div>
  )
}

export default PaymentBadge
