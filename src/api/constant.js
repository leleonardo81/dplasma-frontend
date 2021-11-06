export const serverlessBaseUrl = "https://asia-southeast2-ta-leonardo.cloudfunctions.net";
export const monolithBaseUrl = "https://dplasma.leonardo.web.id";
export const hybridBaseUrl = "https://ta-leonardo.et.r.appspot.com";

const server = JSON.parse(localStorage.getItem('server'));
export const serverList = ["", monolithBaseUrl, hybridBaseUrl, serverlessBaseUrl];
export const baseUrl = serverList[server];