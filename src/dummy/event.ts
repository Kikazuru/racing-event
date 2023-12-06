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
    id: '1',
    name: 'Lari 5k',
    imageUrl:
      'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/275587878_4904312262999038_7200719498784543191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=GeMZ_DOeVD4AX-kIkGk&_nc_ht=scontent.fjog3-1.fna&cb_e2o_trans=t&oh=00_AfDalOtVzl5gDpNQbXA5F6W1Gu_JpqN7pmGFhp8quEVfBA&oe=65742E7A',
    price: 275_000,
    date: '11 Juni 2022',
    location: 'Yogyakarta'
  },
  {
    id: '2',
    name: 'Lari 13k',
    imageUrl:
      'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/275587878_4904312262999038_7200719498784543191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=GeMZ_DOeVD4AX-kIkGk&_nc_ht=scontent.fjog3-1.fna&cb_e2o_trans=t&oh=00_AfDalOtVzl5gDpNQbXA5F6W1Gu_JpqN7pmGFhp8quEVfBA&oe=65742E7A',
    price: 425_000,
    date: '11 Juni 2022',
    location: 'Yogyakarta'
  },
  {
    id: '3',
    name: 'Lari 25k',
    imageUrl:
      'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/275587878_4904312262999038_7200719498784543191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=GeMZ_DOeVD4AX-kIkGk&_nc_ht=scontent.fjog3-1.fna&cb_e2o_trans=t&oh=00_AfDalOtVzl5gDpNQbXA5F6W1Gu_JpqN7pmGFhp8quEVfBA&oe=65742E7A',
    price: 765_000,
    date: '11 Juni 2022',
    location: 'Yogyakarta'
  },
  {
    id: '3',
    name: 'Lari 50k',
    imageUrl:
      'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/275587878_4904312262999038_7200719498784543191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=GeMZ_DOeVD4AX-kIkGk&_nc_ht=scontent.fjog3-1.fna&cb_e2o_trans=t&oh=00_AfDalOtVzl5gDpNQbXA5F6W1Gu_JpqN7pmGFhp8quEVfBA&oe=65742E7A',
    price: 945_000,
    date: '12 Juni 2022',
    location: 'Yogyakarta'
  },
  {
    id: '3',
    name: 'Lari 70k',
    imageUrl:
      'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/275587878_4904312262999038_7200719498784543191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=GeMZ_DOeVD4AX-kIkGk&_nc_ht=scontent.fjog3-1.fna&cb_e2o_trans=t&oh=00_AfDalOtVzl5gDpNQbXA5F6W1Gu_JpqN7pmGFhp8quEVfBA&oe=65742E7A',
    price: 1_250_000,
    date: '12 Juni 2022',
    location: 'Yogyakarta'
  },
  {
    id: '4',
    name: 'LLK - Lari Lari Kecil',
    imageUrl:
      'https://dyuarqvpljnfesefojys.supabase.co/storage/v1/object/public/baim/UGMTR%202023%20-%20BANNER%20PENDAFTARAN%20(1).jpg',
    price: 200_000,
    date: '20 Januari 2024',
    location: 'Semarang'
  }
]

function detailEvent(id: string): Event | undefined {
  return events.find((event) => event.id == id)
}

export type { Event }

export { detailEvent }

export default events
