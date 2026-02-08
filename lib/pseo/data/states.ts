export interface State {
  slug: string;
  name: string;
  abbreviation: string;
  population: number;
  landscapingBusinesses: number;
  majorCities: string[];
  description: string;
}

export const states: State[] = [
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbreviation: "MA",
    population: 7000000,
    landscapingBusinesses: 2850,
    majorCities: ["Boston", "Worcester", "Springfield"],
    description: "Massachusetts has a thriving landscaping market with year-round demand."
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbreviation: "NH",
    population: 1400000,
    landscapingBusinesses: 680,
    majorCities: ["Manchester", "Nashua", "Concord"],
    description: "New Hampshire's landscaping market benefits from high property values."
  },
  {
    slug: "maine",
    name: "Maine",
    abbreviation: "ME",
    population: 1400000,
    landscapingBusinesses: 590,
    majorCities: ["Portland", "Lewiston", "Bangor"],
    description: "Maine's landscaping industry serves both residential and commercial clients."
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbreviation: "RI",
    population: 1100000,
    landscapingBusinesses: 520,
    majorCities: ["Providence", "Warwick", "Cranston"],
    description: "Rhode Island's dense population creates a strong market for landscaping."
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbreviation: "CT",
    population: 3600000,
    landscapingBusinesses: 1450,
    majorCities: ["Bridgeport", "New Haven", "Stamford"],
    description: "Connecticut offers a premium landscaping market with high-income residents."
  },
  {
    slug: "vermont",
    name: "Vermont",
    abbreviation: "VT",
    population: 645000,
    landscapingBusinesses: 310,
    majorCities: ["Burlington", "South Burlington", "Rutland"],
    description: "Vermont's landscaping market focuses on sustainable practices."
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    population: 19500000,
    landscapingBusinesses: 8900,
    majorCities: ["Buffalo", "Rochester", "Syracuse"],
    description: "Upstate New York offers significant opportunities for landscaping businesses."
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbreviation: "PA",
    population: 13000000,
    landscapingBusinesses: 5200,
    majorCities: ["Pittsburgh", "Allentown", "Erie"],
    description: "Pennsylvania's landscaping market is one of the largest in the Northeast."
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbreviation: "NJ",
    population: 9300000,
    landscapingBusinesses: 3850,
    majorCities: ["Newark", "Jersey City", "Paterson"],
    description: "New Jersey's dense suburban landscape creates constant demand."
  },
  {
    slug: "delaware",
    name: "Delaware",
    abbreviation: "DE",
    population: 1000000,
    landscapingBusinesses: 420,
    majorCities: ["Wilmington", "Dover", "Newark"],
    description: "Delaware's small size belies its strong landscaping market."
  }
];

export const getStateBySlug = (slug: string): State | undefined => {
  return states.find(s => s.slug === slug);
};
