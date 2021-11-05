export const serverlessBaseUrl = "https://asia-southeast2-ta-leonardo.cloudfunctions.net";
export const monolithBaseUrl = "http://34.101.196.157";
// export const hybridBaseUrl = "";

const server = JSON.parse(localStorage.getItem('server'));
export const serverList = ["", monolithBaseUrl, "", serverlessBaseUrl];
export const baseUrl = serverList[server];