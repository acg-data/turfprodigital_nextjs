export interface City {
  slug: string;
  name: string;
  state: string;
  stateCode: string;
  stateSlug: string;
  population: number;
  county: string;
  competitors: number;
  medianIncome: number;
  description: string;
}

export const cities: City[] = [
  // Massachusetts
  { slug: "worcester", name: "Worcester", state: "Massachusetts", stateCode: "MA", stateSlug: "massachusetts", population: 206518, county: "Worcester County", competitors: 47, medianIncome: 52000, description: "Worcester is the second-largest city in New England." },
  { slug: "lowell", name: "Lowell", state: "Massachusetts", stateCode: "MA", stateSlug: "massachusetts", population: 115554, county: "Middlesex County", competitors: 28, medianIncome: 56000, description: "Lowell's revitalization has brought new housing developments." },
  { slug: "springfield", name: "Springfield", state: "Massachusetts", stateCode: "MA", stateSlug: "massachusetts", population: 155929, county: "Hampden County", competitors: 35, medianIncome: 41000, description: "Springfield serves as the economic hub of Western Massachusetts." },
  { slug: "cambridge", name: "Cambridge", state: "Massachusetts", stateCode: "MA", stateSlug: "massachusetts", population: 118403, county: "Middlesex County", competitors: 42, medianIncome: 103000, description: "Cambridge's prestigious universities create a high-end landscaping market." },
  { slug: "new-bedford", name: "New Bedford", state: "Massachusetts", stateCode: "MA", stateSlug: "massachusetts", population: 102882, county: "Bristol County", competitors: 26, medianIncome: 45000, description: "New Bedford's coastal location creates unique landscaping challenges." },
  // Rhode Island
  { slug: "providence", name: "Providence", state: "Rhode Island", stateCode: "RI", stateSlug: "rhode-island", population: 190934, county: "Providence County", competitors: 48, medianIncome: 55000, description: "Providence combines historic charm with modern development." },
  { slug: "warwick", name: "Warwick", state: "Rhode Island", stateCode: "RI", stateSlug: "rhode-island", population: 83000, county: "Kent County", competitors: 24, medianIncome: 72000, description: "Warwick's suburban character makes it ideal for residential landscaping." },
  { slug: "cranston", name: "Cranston", state: "Rhode Island", stateCode: "RI", stateSlug: "rhode-island", population: 82000, county: "Providence County", competitors: 23, medianIncome: 68000, description: "Cranston offers a mix of residential and commercial developments." },
  // New Hampshire
  { slug: "manchester", name: "Manchester", state: "New Hampshire", stateCode: "NH", stateSlug: "new-hampshire", population: 115644, county: "Hillsborough County", competitors: 31, medianIncome: 62000, description: "Manchester is New Hampshire's largest city and economic center." },
  { slug: "nashua", name: "Nashua", state: "New Hampshire", stateCode: "NH", stateSlug: "new-hampshire", population: 91500, county: "Hillsborough County", competitors: 26, medianIncome: 78000, description: "Nashua's location on the Massachusetts border creates a strong market." },
  { slug: "concord", name: "Concord", state: "New Hampshire", stateCode: "NH", stateSlug: "new-hampshire", population: 44000, county: "Merrimack County", competitors: 18, medianIncome: 66000, description: "As the state capital, Concord has government properties requiring landscaping." },
  // Maine
  { slug: "portland", name: "Portland", state: "Maine", stateCode: "ME", stateSlug: "maine", population: 68500, county: "Cumberland County", competitors: 24, medianIncome: 61000, description: "Portland's vibrant food scene attracts residents who value outdoor spaces." },
  // Connecticut
  { slug: "hartford", name: "Hartford", state: "Connecticut", stateCode: "CT", stateSlug: "connecticut", population: 121054, county: "Hartford County", competitors: 38, medianIncome: 36000, description: "Hartford's insurance industry brings affluent professionals." },
  { slug: "new-haven", name: "New Haven", state: "Connecticut", stateCode: "CT", stateSlug: "connecticut", population: 135081, county: "New Haven County", competitors: 41, medianIncome: 42000, description: "Yale University's presence makes New Haven a sophisticated market." },
  { slug: "stamford", name: "Stamford", state: "Connecticut", stateCode: "CT", stateSlug: "connecticut", population: 135470, county: "Fairfield County", competitors: 43, medianIncome: 96000, description: "Stamford's proximity to NYC creates a premium landscaping market." },
  { slug: "bridgeport", name: "Bridgeport", state: "Connecticut", stateCode: "CT", stateSlug: "connecticut", population: 148654, county: "Fairfield County", competitors: 39, medianIncome: 47000, description: "Bridgeport's ongoing revitalization brings new development projects." },
  // New York
  { slug: "buffalo", name: "Buffalo", state: "New York", stateCode: "NY", stateSlug: "new-york", population: 278349, county: "Erie County", competitors: 58, medianIncome: 39000, description: "Buffalo's waterfront revival creates diverse landscaping opportunities." },
  { slug: "rochester", name: "Rochester", state: "New York", stateCode: "NY", stateSlug: "new-york", population: 211328, county: "Monroe County", competitors: 52, medianIncome: 37000, description: "Rochester's strong neighborhoods create steady demand." },
  { slug: "syracuse", name: "Syracuse", state: "New York", stateCode: "NY", stateSlug: "new-york", population: 148620, county: "Onondaga County", competitors: 44, medianIncome: 38000, description: "Syracuse University brings institutional landscaping work." },
  { slug: "albany", name: "Albany", state: "New York", stateCode: "NY", stateSlug: "new-york", population: 99224, county: "Albany County", competitors: 36, medianIncome: 48000, description: "As the state capital, Albany has government buildings requiring landscaping." },
  { slug: "white-plains", name: "White Plains", state: "New York", stateCode: "NY", stateSlug: "new-york", population: 59000, county: "Westchester County", competitors: 28, medianIncome: 96000, description: "White Plains serves as the commercial hub of Westchester County." },
  // Pennsylvania
  { slug: "pittsburgh", name: "Pittsburgh", state: "Pennsylvania", stateCode: "PA", stateSlug: "pennsylvania", population: 302971, county: "Allegheny County", competitors: 72, medianIncome: 50000, description: "Pittsburgh's transformation creates a sophisticated market." },
  { slug: "allentown", name: "Allentown", state: "Pennsylvania", stateCode: "PA", stateSlug: "pennsylvania", population: 125845, county: "Lehigh County", competitors: 34, medianIncome: 43000, description: "Allentown's location in the Lehigh Valley makes it a growing market." },
  { slug: "erie", name: "Erie", state: "Pennsylvania", stateCode: "PA", stateSlug: "pennsylvania", population: 95000, county: "Erie County", competitors: 27, medianIncome: 37000, description: "Erie's location on Lake Erie creates unique landscaping opportunities." },
  { slug: "lancaster", name: "Lancaster", state: "Pennsylvania", stateCode: "PA", stateSlug: "pennsylvania", population: 59400, county: "Lancaster County", competitors: 22, medianIncome: 46000, description: "Lancaster's mix of urban and agricultural creates diverse needs." },
  { slug: "scranton", name: "Scranton", state: "Pennsylvania", stateCode: "PA", stateSlug: "pennsylvania", population: 76000, county: "Lackawanna County", competitors: 25, medianIncome: 40000, description: "Scranton's revitalization creates landscaping opportunities." },
  // New Jersey
  { slug: "trenton", name: "Trenton", state: "New Jersey", stateCode: "NJ", stateSlug: "new-jersey", population: 90000, county: "Mercer County", competitors: 32, medianIncome: 39000, description: "As New Jersey's capital, Trenton has government properties." },
  // Delaware
  { slug: "wilmington", name: "Wilmington", state: "Delaware", stateCode: "DE", stateSlug: "delaware", population: 71500, county: "New Castle County", competitors: 29, medianIncome: 48000, description: "Wilmington's banking industry creates a strong landscaping market." },
  // Vermont
  { slug: "burlington", name: "Burlington", state: "Vermont", stateCode: "VT", stateSlug: "vermont", population: 45000, county: "Chittenden County", competitors: 19, medianIncome: 52000, description: "Burlington's eco-conscious culture creates demand for sustainable landscaping." }
];

export const getCityBySlugAndState = (slug: string, stateCode: string): City | undefined => {
  return cities.find(c => c.slug === slug && c.stateCode === stateCode);
};

export const getCitiesByState = (stateCode: string): City[] => {
  return cities.filter(c => c.stateCode === stateCode);
};
