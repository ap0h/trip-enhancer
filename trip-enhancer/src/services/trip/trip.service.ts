import {  ITrip, IDataPoint, IEnhancedTrip } from "../../types";
import { calculateDistance } from "../../utils/geo_utils/geo_distance";
import axios, { Method } from "axios";

async function enhanceTrip(trip: ITrip) {
    const [ speedEnhanced, distanceEnhanced ] = await Promise.all([averageSpeedEnhancer(trip), totalDistanceEnhancer(trip)])
    return { ...speedEnhanced, ...distanceEnhanced };
}

async function totalDistanceEnhancer(trip: ITrip) {
    let totalDistance = 0;
    for (let i = 1; i < trip.dataPoints.length; i++) {
        const distance = calculateDistance(trip.dataPoints[i - 1]?.location, trip.dataPoints[i]?.location);
        totalDistance += distance;
    }
    return {
        ...trip,
        totalDistance,
    } as IEnhancedTrip;
}

async function averageSpeedEnhancer(trip: ITrip) {
    let averageSpeed = 0;
    for (let i = 1; i < trip.dataPoints.length; i++) {
        averageSpeed +=  (trip.dataPoints[i].speed + trip.dataPoints[i - 1].speed) / 2;
    }
    averageSpeed /= (trip.dataPoints.length - 1);
    return {
        ...trip,
        averageSpeed,
    } as IEnhancedTrip;
}


async function sendTrip(enhancedTrip: IEnhancedTrip, method: Method, url: string) {
   return axios.request({
        method,
        data: enhancedTrip,
        url,
    })
}


export { enhanceTrip, sendTrip }
