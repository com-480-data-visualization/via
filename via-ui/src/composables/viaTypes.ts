// Types for the Via app data structures

export interface Train {
    id: number
    service: string
    destination: string
    departure: string // ISO or HH:mm
    stop: Stop | null
    departureCity: City | null

}

export interface Stop {
    name: string
    time: string // ISO or HH:mm
}

export interface City {
    name: string
    lat: number
    lon: number
}

export interface ViaState {
    trainsTaken: Train[]
    nextStarts: Train[]
    possibleStops: Stop[]
    hour: number
    minute: number
}
