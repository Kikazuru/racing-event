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
    id: 'jakarta-abc-marathon',
    name: 'Jakarta ABC Marathon',
    imageUrl: 'https://etix-storage.s3.ap-southeast-3.amazonaws.com/1701924518809Capture.JPG',
    price: 3_500,
    date: '24 Oktober 2024',
    location: 'GBK'
  },
  {
    id: 'etix-fun-run',
    name: 'etix FUN RUN',
    imageUrl:
      'https://etix-storage.s3.ap-southeast-3.amazonaws.com/1701923681757nqobilevundla9s7VhwzGbUgunsplash.jpg',
    price: 10_000,
    date: '17 Maret 2024',
    location: 'GBK'
  },
  {
    id: 'etix-trail-run',
    name: 'etix TRAIL RUN',
    imageUrl:
      'https://etix-storage.s3.ap-southeast-3.amazonaws.com/1701923541405davidmarcu8TJbrQGKFyUunsplash.jpg',
    price: 2_750,
    date: '24 Februari 2024',
    location: 'Parangtritis'
  },
  {
    id: 'etix-charity-fun-run',
    name: 'etix CHARITY FUN RUN',
    imageUrl:
      'https://etix-storage.s3.ap-southeast-3.amazonaws.com/1701923162327sporlabXiZ7pRvCzrounsplash.jpg',
    price: 27_500,
    date: '17 Maret 2024',
    location: 'FX Sudirman'
  }
]

function detailEvent(id: string): Event | undefined {
  return events.find((event) => event.id == id)
}

export type { Event }

export { detailEvent }

export default events
