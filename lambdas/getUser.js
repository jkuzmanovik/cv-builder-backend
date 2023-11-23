const Responses = require("./API_Responses");

var resume = {
  basics: {
    name: "Jordan Kuzmanovik",
    label: "Kuzmanovik",
    email: "jordan.kuzmanovik@gmail.com",
    phone: "75404253",
    website: "https://www.brilliantearth.com/",
    summary: "sumary",
    location: {
      adress: "Dimitar Makedonski broj 2",
      postalCode: "1000",
      city: "Skopje",
      countryCode: "North Macedonia",
      region: "Macedonia",
    },
  },
  profiles: [
    {
      network: "jordan",
      username: "193214",
      url: "https://www.facebook.com/",
    },
  ],
  work: [
    {
      name: "Jordan Kuzmanovik",
      position: "Najjaka Pozicija",
      website: "https://www.brilliantearth.com/",
      startDate: "2023-11-22T14:45:21.922Z",
      endDate: "2023-11-22T14:45:21.922Z",
      summary: "dsa",
      highlights: ["dasf"],
    },
  ],
  volunteer: [
    {
      organization: "dasf",
      position: "sadf",
      website: "https://www.brilliantearth.com/",
      startDate: "2023-11-22T14:45:29.046Z",
      endDate: "2023-11-22T14:45:29.046Z",
      summary: "Ova e kratok summary",
      highlights: ["da", "da", "i", "da"],
    },
  ],
  education: [
    {
      institution: "Ova e",
      website: "https://www.brilliantearth.com/",
      area: "This is area",
      studyType: "Ova e study type",
      startDate: "2023-11-06T23:00:00.000Z",
      endDate: "2023-11-22T14:45:42.288Z",
      score: "10",
      courses: [""],
    },
  ],
  awards: [
    {
      title: "sdaf",
      date: "2023-11-22T14:45:53.564Z",
      awarder: "dasf",
      summary: "adsf",
    },
  ],
  certificates: [
    {
      name: "dasf",
      date: "2023-11-22T14:45:57.429Z",
      website: "https://www.brilliantearth.com/",
      issuer: "adsf",
    },
  ],
  publications: [
    {
      name: "adsf",
      publisher: "asdf",
      releaseDate: "2023-11-22T14:46:03.745Z",
      website: "https://www.brilliantearth.com/",
      summary: "dasf",
    },
  ],
  skills: [
    {
      name: "adsf",
      level: "asdf",
      keywords: ["asdfasdf", "adsfadsf"],
    },
  ],
  languages: [
    {
      language: "asdf",
      fluency: "asdf",
    },
  ],
  interests: [
    {
      name: "sadf",
      keywords: ["asdf", "fdas"],
    },
  ],
  references: [
    {
      name: "adsf",
      reference: "asdf",
    },
  ],
  projects: [
    {
      name: "Jordan Kuzmanovik",
      description: "asdf",
      highlights: ["asdf", "adsf"],
      keywords: ["adsf", "fdas", ""],
      startDate: "2023-11-19T23:00:00.000Z",
      endDate: "2023-11-20T23:00:00.000Z",
      website: "https://www.brilliantearth.com/",
    },
  ],
  coverLetter: {
    coverLetter: "sadf",
  },
};

var theme = require("jsonresume-theme-eloquent-mod");

exports.handler = async (event) => {
  console.log("event", event);

  // if (!event.pathParameters || !event.pathParameters.ID) {
  //     // failed without an ID
  //     return Responses._400({ message: 'missing the ID from the path' });
  // }

  // let ID = event.pathParameters.ID;

  // if (data[ID]) {
  //     // return the data
  //     return Responses._200(data[ID]);
  // }

  return Responses._200(theme.render(resume));

  // //failed as ID not in the data
  // return Responses._400({ message: 'no ID in data' });
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  7893: { name: "Chris Smith", age: 52, job: "teacher" },
  5132: { name: "Tom Hague", age: 23, job: "plasterer" },
};
