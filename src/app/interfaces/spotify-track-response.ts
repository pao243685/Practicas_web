export interface SpotifyTrackResponse {

    id: string,
    name: string,
    artists: [
        {
            id: string,
            href: string,
            name: string
        }
    ],
    album?: {
        name: string,
        images: {
            url: string,
            height: number,
            width: number
        }[]
    },
    duration_ms: number,
    track_number: number,
    preview_url: string,
}
