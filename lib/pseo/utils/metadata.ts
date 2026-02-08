import { Metadata } from 'next';
import { Service } from '../data/services';
import { State } from '../data/states';
import { City } from '../data/cities';

export function generateServiceMetadata(service: Service): Metadata {
  return {
    title: `${service.name} | Turf Pro Digital`,
    description: service.description,
  };
}

export function generateStateMetadata(state: State): Metadata {
  return {
    title: `Landscaping Marketing Agency in ${state.name} | Turf Pro Digital`,
    description: `Digital marketing services for landscaping companies in ${state.name}.`,
  };
}

export function generateCityMetadata(city: City): Metadata {
  return {
    title: `Landscaping Marketing in ${city.name}, ${city.stateCode} | Turf Pro Digital`,
    description: `Digital marketing services for landscaping companies in ${city.name}, ${city.state}.`,
  };
}
