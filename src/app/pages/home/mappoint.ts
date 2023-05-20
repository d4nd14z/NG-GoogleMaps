export interface MapPoint {
    'title': string,
    'label': {
        'color':string,
        'text':string
    },
    'position': {
        'lat': number,
        'lng': number
    },
    'weather': any
}