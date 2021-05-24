export interface ILocation {
    latitude: number,
    longitude: number,
}
export interface IDataPoint {
location: ILocation,
speed: number,
timestamp: Date | string,
}

export interface ITrip {
    id: string,
    dataPoints: Array<IDataPoint>,
}

export interface IEnhancedTrip extends ITrip {
    averageSpeed: number,  // meters per second
    totalDistance: number, // meters
}
