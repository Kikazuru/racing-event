interface Event {
  id: string
  name: string
  imageUrl: string
  price: number
  date: string
  location: string
}

const events: Event[] = [
  {
    id: 'ctc-ultra-2024',
    name: 'CTC Ultra 2024',
    imageUrl: 'https://etix-storage.s3.ap-southeast-3.amazonaws.com/1701848762869image0.jpg',
    price: 275_000,
    date: '24 Februari 2024',
    location: 'Yogyakarta'
  },
  {
    id: '2',
    name: 'LLK - Lari Lari Kecil',
    imageUrl:
      'https://dyuarqvpljnfesefojys.supabase.co/storage/v1/object/public/baim/UGMTR%202023%20-%20BANNER%20PENDAFTARAN%20(1).jpg',
    price: 200_000,
    date: '1 Oktober 2023',
    location: 'Semarang'
  }
]

function detailEvent(id: string): Event | undefined {
  return events.find((event) => event.id == id)
}

export type { Event }

export { detailEvent }

export default events
