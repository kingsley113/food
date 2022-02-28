import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer IzatIEOOh28zObcICTCNkEDDCIbbcLCYOjar4aBWlhRA9b6n3mWP2Fc3ZAravi_60C-cZxcfSVsCGFW3bvka8uBwGvtV5lhTuyWwGDQvDqJQ_8WOwshOfByWqS0bYnYx`,
  },
});
