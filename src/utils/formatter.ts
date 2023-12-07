function numberToRupiah(number: number) {
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number)
}

export { numberToRupiah }
